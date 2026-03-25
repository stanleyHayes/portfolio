import React from "react";
import {Helmet} from "react-helmet-async";

const SITE_URL = "https://hayfordstanley.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;
const SITE_NAME = "Stanley Hayford — Software Engineer";
const TWITTER_HANDLE = "@stanley_hayford";

const SEO = ({
    title,
    description,
    path = "/",
    image,
    type = "website",
    article,
    jsonLd,
    noIndex = false,
}) => {
    const fullTitle = title ? `${title} | Stanley Hayford` : SITE_NAME;
    const fullUrl = `${SITE_URL}${path}`;
    const ogImage = image || DEFAULT_IMAGE;
    const desc = description || "Software Engineer with 7+ years building scalable backend systems, APIs, and modern web applications with Golang, Node.js, and React.";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={desc} />
            <link rel="canonical" href={fullUrl} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_US" />

            {/* Article-specific OG */}
            {article?.publishedAt && <meta property="article:published_time" content={article.publishedAt} />}
            {article?.tags?.map((tag, i) => <meta key={i} property="article:tag" content={tag} />)}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={TWITTER_HANDLE} />
            <meta name="twitter:creator" content={TWITTER_HANDLE} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

// Pre-built JSON-LD generators
export const personSchema = (info = {}) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: info.name || "Stanley Asoku Hayford",
    jobTitle: info.title || "Software Engineer",
    url: SITE_URL,
    sameAs: [
        info.socialLinks?.github || "https://github.com/stanleyHayes",
        info.socialLinks?.linkedin || "https://www.linkedin.com/in/stanley-asoku-hayford/",
        info.socialLinks?.twitter || "https://x.com/stanley_hayford",
    ].filter(Boolean),
    email: info.email || "hayfordstanley@gmail.com",
    address: {
        "@type": "PostalAddress",
        addressLocality: info.location || "Accra",
        addressCountry: "GH",
    },
    knowsAbout: ["Golang", "Node.js", "React", "TypeScript", "Kubernetes", "Docker", "MongoDB", "PostgreSQL"],
});

export const articleSchema = (post) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage || DEFAULT_IMAGE,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
        "@type": "Person",
        name: "Stanley Asoku Hayford",
        url: SITE_URL,
    },
    publisher: {
        "@type": "Person",
        name: "Stanley Asoku Hayford",
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${post.slug}`,
    },
});

export const courseSchema = (course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.summary,
    provider: {
        "@type": "Person",
        name: "Stanley Asoku Hayford",
        url: SITE_URL,
    },
    numberOfLessons: course.lessons?.length,
});

export const breadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
    })),
});

export default SEO;
