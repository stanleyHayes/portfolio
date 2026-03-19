import React, {useEffect} from "react";
import Layout from "../../components/layout";
import {Alert, Avatar, Box, Button, Chip, Container, Divider, Stack, Typography} from "@mui/material";
import SkeletonLoader from "../../components/shared/skeleton-loader";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostBySlug, selectCurrentPost} from "../../features/data/data-slice";
import {useParams, Link} from "react-router-dom";
import {ArrowBackOutlined, CalendarMonthOutlined} from "@mui/icons-material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogDetailPage = () => {

    const {slug} = useParams();
    const dispatch = useDispatch();
    const {loading, error, data: post} = useSelector(selectCurrentPost);

    useEffect(() => {
        dispatch(fetchPostBySlug(slug));
    }, [dispatch, slug]);

    const formattedDate = post?.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})
        : null;

    if (loading) {
        return <Layout><SkeletonLoader variant="detail" /></Layout>;
    }

    if (error) {
        return (
            <Layout>
                <Container maxWidth="md" sx={{py: 8}}>
                    <Alert severity="error" variant="outlined" sx={{borderRadius: 1}}>{error}</Alert>
                </Container>
            </Layout>
        );
    }

    if (!post) {
        return (
            <Layout>
                <Container maxWidth="md" sx={{py: 8}}>
                    <Alert severity="info" variant="outlined" sx={{borderRadius: 1}}>Post not found.</Alert>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageBackground variant="detail">
                <Helmet>
                <title>{post.title ? `${post.title} | Stanley Hayford Blog` : "Stanley Hayford | Blog"}</title>
                <meta name="description" content={post.excerpt || "Read this blog post by Stanley Hayford."} />
                {post.coverImage && <meta property="og:image" content={post.coverImage} />}
            </Helmet>

            {/* Hero Section */}
            <Box
                component={motion.div}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.6}}
                sx={{
                    position: "relative",
                    width: "100%",
                    height: {xs: 260, md: 400},
                    overflow: "hidden",
                    backgroundColor: "background.paper",
                }}>
                {post.coverImage ? (
                    <Box
                        component="img"
                        src={post.coverImage}
                        alt={post.title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        background: (t) => `linear-gradient(135deg, ${t.palette.colors?.accent || "#2563eb"}22, ${t.palette.secondary.main}44)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Typography variant="h1" sx={{opacity: 0.08, fontWeight: 900, color: "colors.accent"}}>
                            Blog
                        </Typography>
                    </Box>
                )}
                {/* Gradient overlay */}
                <Box sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: (t) => `linear-gradient(to top, ${t.palette.background.default}, transparent)`,
                }} />
            </Box>

            <Box sx={{py: {xs: 4, md: 6}}}>
                <Container maxWidth="md">
                    {/* Back Navigation */}
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.4}}>
                        <Button
                            component={Link}
                            to="/blog"
                            startIcon={<ArrowBackOutlined />}
                            sx={{
                                mb: 4,
                                color: "colors.accent",
                                textTransform: "none",
                                fontWeight: 600,
                                "&:hover": {backgroundColor: "light.accent"},
                            }}>
                            Back to Blog
                        </Button>
                    </Box>

                    {/* Post Header */}
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <Stack direction="row" spacing={1} sx={{mb: 2, flexWrap: "wrap", gap: 0.5}}>
                                {post.tags.map((tag, i) => (
                                    <Chip
                                        key={i}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            backgroundColor: "light.accent",
                                            color: "colors.accent",
                                            fontWeight: 600,
                                        }}
                                    />
                                ))}
                            </Stack>
                        )}

                        {/* Title */}
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 800,
                                color: "text.primary",
                                mb: 3,
                                lineHeight: 1.2,
                            }}>
                            {post.title}
                        </Typography>

                        {/* Author & Date */}
                        <Stack direction="row" alignItems="center" spacing={2} sx={{mb: 4}}>
                            <Avatar
                                src={post.author?.avatar}
                                sx={{width: 44, height: 44, backgroundColor: "colors.accent"}}>
                                {post.author?.name?.charAt(0) || "A"}
                            </Avatar>
                            <Box>
                                <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700}}>
                                    {post.author?.name || "Author"}
                                </Typography>
                                {formattedDate && (
                                    <Stack direction="row" alignItems="center" spacing={0.5}>
                                        <CalendarMonthOutlined sx={{fontSize: 14, color: "text.secondary"}} />
                                        <Typography variant="caption" sx={{color: "text.secondary"}}>
                                            {formattedDate}
                                        </Typography>
                                    </Stack>
                                )}
                            </Box>
                        </Stack>
                    </Box>

                    <Divider sx={{mb: 4}} />

                    {/* Post Content — renders Markdown or HTML */}
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        sx={{
                            "& img": {maxWidth: "100%", height: "auto", borderRadius: 2, my: 2},
                            "& h1, & h2, & h3, & h4, & h5, & h6": {color: "text.primary", fontWeight: 700, mt: 4, mb: 2},
                            "& h1": {fontSize: "2rem"}, "& h2": {fontSize: "1.6rem"}, "& h3": {fontSize: "1.3rem"},
                            "& p": {color: "text.secondary", lineHeight: 1.8, mb: 2, fontSize: "1.05rem"},
                            "& a": {color: "colors.accent", textDecoration: "underline", "&:hover": {opacity: 0.8}},
                            "& blockquote": {borderLeft: 4, borderColor: "colors.accent", pl: 3, py: 1, my: 3, backgroundColor: "background.paper", borderRadius: 1, "& p": {mb: 0}},
                            "& ul, & ol": {color: "text.secondary", pl: 3, mb: 2},
                            "& li": {mb: 0.5, lineHeight: 1.7},
                            "& hr": {border: "none", borderTop: 1, borderColor: "divider", my: 4},
                            "& table": {width: "100%", borderCollapse: "collapse", my: 3, "& th, & td": {border: 1, borderColor: "divider", px: 2, py: 1, textAlign: "left"}, "& th": {backgroundColor: "background.paper", fontWeight: 700, color: "text.primary"}, "& td": {color: "text.secondary"}},
                            "& code:not(pre code)": {backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.1)" : "rgba(37,99,235,0.08)", color: "colors.accent", px: 0.8, py: 0.2, borderRadius: 1, fontSize: "0.88rem", fontFamily: "'Fira Code', 'Consolas', monospace"},
                            "& .syntax-highlighter-wrapper": {my: 3, borderRadius: 2, overflow: "hidden"},
                        }}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                code({inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || "");
                                    if (!inline && match) {
                                        return (
                                            <Box className="syntax-highlighter-wrapper">
                                                <SyntaxHighlighter
                                                    style={oneDark}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    customStyle={{margin: 0, borderRadius: 8, fontSize: "0.88rem"}}
                                                    {...props}>
                                                    {String(children).replace(/\n$/, "")}
                                                </SyntaxHighlighter>
                                            </Box>
                                        );
                                    }
                                    if (!inline && !match) {
                                        return (
                                            <Box className="syntax-highlighter-wrapper">
                                                <SyntaxHighlighter
                                                    style={oneDark}
                                                    PreTag="div"
                                                    customStyle={{margin: 0, borderRadius: 8, fontSize: "0.88rem"}}
                                                    {...props}>
                                                    {String(children).replace(/\n$/, "")}
                                                </SyntaxHighlighter>
                                            </Box>
                                        );
                                    }
                                    return <code className={className} {...props}>{children}</code>;
                                },
                            }}>
                            {post.content || ""}
                        </ReactMarkdown>
                    </Box>

                    <Divider sx={{my: 6}} />

                    {/* Bottom Navigation */}
                    <Box
                        component={motion.div}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.4, delay: 0.3}}>
                        <Button
                            component={Link}
                            to="/blog"
                            startIcon={<ArrowBackOutlined />}
                            variant="outlined"
                            sx={{
                                color: "colors.accent",
                                borderColor: "colors.accent",
                                textTransform: "none",
                                fontWeight: 600,
                                borderRadius: 2,
                                "&:hover": {backgroundColor: "light.accent"},
                            }}>
                            All Posts
                        </Button>
                    </Box>
                </Container>
                </Box>
            </PageBackground>
        </Layout>
    );
};

export default BlogDetailPage;
