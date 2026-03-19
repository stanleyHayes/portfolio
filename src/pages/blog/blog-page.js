import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import {Alert, Avatar, Box, Chip, Container, Divider, Grid, Pagination, Stack, Typography} from "@mui/material";
import SkeletonLoader from "../../components/shared/skeleton-loader";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectPosts} from "../../features/data/data-slice";
import {Link} from "react-router-dom";
import {ArrowForwardOutlined, CalendarMonthOutlined, AccessTimeOutlined} from "@mui/icons-material";

const POSTS_PER_PAGE = 9;

const ACCENT_GRADIENTS = [
    (t) => `linear-gradient(135deg, ${t.palette.colors?.accent || "#2563eb"}, ${t.palette.colors?.blue || "#60a5fa"})`,
    (t) => `linear-gradient(135deg, ${t.palette.colors?.gold || "#f5a623"}, #f59e0b)`,
    (t) => `linear-gradient(135deg, ${t.palette.colors?.blue || "#60a5fa"}, #818cf8)`,
];

const PostCard = ({post, index}) => {
    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric"})
        : null;
    const readingTime = Math.ceil(post.content?.length / 1000) || 3;
    const gradientIndex = index % ACCENT_GRADIENTS.length;
    const accentGradient = ACCENT_GRADIENTS[gradientIndex];

    return (
        <Box
            component={motion.div}
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.07}}
            sx={{height: "100%", display: "flex"}}>
            <Link to={`/blog/${post.slug}`} style={{textDecoration: "none", display: "flex", width: "100%"}}>
                <Box sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    backgroundColor: "background.paper",
                    boxShadow: (t) => t.palette.mode === "dark"
                        ? "0 4px 24px rgba(0,0,0,0.4)"
                        : "0 4px 24px rgba(0,0,0,0.06)",
                    transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: (t) => {
                            const accent = t.palette.colors?.accent || "#2563eb";
                            return t.palette.mode === "dark"
                                ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${accent}25`
                                : `0 20px 60px rgba(0,0,0,0.1), 0 0 30px ${accent}20`;
                        },
                        "& .post-image": {
                            transform: "scale(1.08)",
                        },
                        "& .read-more-arrow": {
                            transform: "translateX(4px)",
                        },
                    },
                }}>
                    {/* Accent gradient bar */}
                    <Box sx={{
                        height: 4,
                        background: accentGradient,
                        flexShrink: 0,
                    }} />

                    {/* Cover Image — floating with padding */}
                    <Box sx={{p: 1.5, pb: 0}}>
                    <Box sx={{position: "relative", overflow: "hidden", height: 200, borderRadius: 2}}>
                        {post.coverImage ? (
                            <Box
                                className="post-image"
                                component="img"
                                src={post.coverImage}
                                alt={post.title}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            />
                        ) : (
                            <Box
                                className="post-image"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    background: (t) => `linear-gradient(135deg, ${t.palette.colors?.accent || "#2563eb"}22, ${t.palette.secondary.main}44)`,
                                    transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            />
                        )}
                        {/* Gradient overlay with title */}
                        <Box sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                            p: 2,
                            pt: 5,
                        }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#fff",
                                    fontWeight: 700,
                                    lineHeight: 1.3,
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                                }}>
                                {post.title}
                            </Typography>
                        </Box>
                        {/* Reading time badge */}
                        <Box sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            backgroundColor: "rgba(0,0,0,0.5)",
                            backdropFilter: "blur(8px)",
                            borderRadius: 2,
                            px: 1.2,
                            py: 0.4,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}>
                            <AccessTimeOutlined sx={{fontSize: 13, color: "#fff"}} />
                            <Typography variant="caption" sx={{color: "#fff", fontWeight: 600, fontSize: "0.68rem"}}>
                                {readingTime} min
                            </Typography>
                        </Box>
                    </Box>
                    </Box>

                    {/* Card Content */}
                    <Box sx={{p: 2.5, flex: 1, display: "flex", flexDirection: "column"}}>
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <Stack direction="row" spacing={0.5} sx={{mb: 1.5, flexWrap: "wrap", gap: 0.5}}>
                                {post.tags.slice(0, 3).map((tag, i) => {
                                    const tagColors = [
                                        {bg: "light.accent", color: "colors.accent"},
                                        {bg: (t) => t.palette.colors?.gold ? `${t.palette.colors.gold}18` : "#f5a62318", color: "colors.gold"},
                                        {bg: (t) => t.palette.colors?.blue ? `${t.palette.colors.blue}18` : "#60a5fa18", color: "colors.blue"},
                                    ];
                                    const tc = tagColors[i % tagColors.length];
                                    return (
                                        <Chip
                                            key={i}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                fontSize: "0.68rem",
                                                height: 24,
                                                backgroundColor: tc.bg,
                                                color: tc.color,
                                                fontWeight: 700,
                                                borderRadius: 1.5,
                                                letterSpacing: 0.3,
                                            }}
                                        />
                                    );
                                })}
                            </Stack>
                        )}

                        {/* Excerpt */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                mb: 2,
                                flex: 1,
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                lineHeight: 1.7,
                            }}>
                            {post.excerpt}
                        </Typography>

                        {/* Author, Date & Read More */}
                        <Stack spacing={1.5} sx={{mt: "auto"}}>
                            <Divider sx={{opacity: 0.5}} />
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Avatar
                                        src={post.author?.avatar}
                                        sx={{width: 26, height: 26, fontSize: "0.7rem", background: accentGradient}}>
                                        {post.author?.name?.charAt(0) || "A"}
                                    </Avatar>
                                    <Stack spacing={0}>
                                        <Typography variant="caption" sx={{color: "text.primary", fontWeight: 700, fontSize: "0.7rem", lineHeight: 1.2}}>
                                            {post.author?.name || "Author"}
                                        </Typography>
                                        {formattedDate && (
                                            <Typography variant="caption" sx={{color: "text.secondary", fontSize: "0.65rem", lineHeight: 1.2}}>
                                                {formattedDate}
                                            </Typography>
                                        )}
                                    </Stack>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={0.5} sx={{color: "colors.accent"}}>
                                    <Typography variant="caption" sx={{fontWeight: 700, fontSize: "0.72rem"}}>
                                        Read More
                                    </Typography>
                                    <ArrowForwardOutlined className="read-more-arrow" sx={{fontSize: 14, transition: "transform 300ms ease"}} />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

const BlogPage = () => {

    const dispatch = useDispatch();
    const {loading, error, data: posts} = useSelector(selectPosts);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const allPosts = posts || [];
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    const paginated = allPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    if (loading) {
        return <Layout><SkeletonLoader variant="cards" /></Layout>;
    }

    if (error) {
        return (
            <Layout>
                <Container maxWidth="xl" sx={{py: 8}}>
                    <Alert severity="error" variant="outlined" sx={{borderRadius: 1}}>{error}</Alert>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageBackground variant="cards">
                <Helmet>
                    <title>Stanley Hayford | Blog</title>
                    <meta name="description" content="Read blog posts by Stanley Hayford on software engineering, web development, and technology." />
                </Helmet>
                <Box sx={{py: 8}}>
                    <Container maxWidth="xl">
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}>
                        <Typography variant="body2" align="center" sx={{textTransform: "uppercase", color: "colors.accent", fontWeight: 800, mb: 1, letterSpacing: 3}}>
                            Blog
                        </Typography>
                        <Typography variant="h3" align="center" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                            Thoughts & Insights
                        </Typography>
                        <Typography variant="body1" align="center" sx={{color: "text.secondary", maxWidth: 550, mx: "auto", mb: 2}}>
                            Exploring ideas in software engineering, web development, and technology.
                        </Typography>
                        <Stack direction="row" justifyContent="center" sx={{mb: 2}}>
                            <Chip
                                label={`${allPosts.length} Posts`}
                                size="small"
                                sx={{backgroundColor: "light.accent", color: "colors.accent", fontWeight: 700}}
                            />
                        </Stack>
                    </Box>

                    <Divider light sx={{my: 4}} />

                    <Grid container spacing={4} sx={{display: "flex", flexWrap: "wrap"}}>
                        {paginated.map((post, index) => (
                            <Grid size={{xs: 12, sm: 6, lg: 4}} key={post._id || index} sx={{display: "flex", flexDirection: "column"}}>
                                <PostCard post={post} index={index} />
                            </Grid>
                        ))}
                    </Grid>

                    {totalPages > 1 && (
                        <Stack alignItems="center" sx={{mt: 6}}>
                            <Pagination
                                count={totalPages}
                                page={page}
                                onChange={handlePageChange}
                                color="secondary"
                                shape="rounded"
                                size="large"
                            />
                            <Typography variant="body2" sx={{color: "text.secondary", mt: 1}}>
                                Showing {paginated.length} of {allPosts.length} posts
                            </Typography>
                        </Stack>
                    )}
                </Container>
                </Box>
            </PageBackground>
        </Layout>
    );
};

export default BlogPage;
