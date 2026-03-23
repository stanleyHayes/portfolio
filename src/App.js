import './App.css';
import {Route, useLocation} from "react-router-dom";
import {Routes} from "react-router";
import {useSelector} from "react-redux";
import {getUiState} from "./features/ui/ui-slice";
import {THEMES} from "./themes/themes";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {AnimatePresence} from "framer-motion";
import {Suspense, lazy} from "react";
import {HelmetProvider} from "react-helmet-async";
import Splash from "./components/shared/splash";
import NotFoundPage from "./pages/404/not-found-page";
import useVisitorTracking from "./hooks/use-visitor-tracking";
import ScrollToTop from "./components/shared/scroll-to-top";

const HomePage = lazy(() => import("./pages/home/home-page"));
const AboutPage = lazy(() => import("./pages/about/about-page"));
const ContactPage = lazy(() => import("./pages/contact/contact-page"));
const ServicesPage = lazy(() => import("./pages/services/services-page"));
const PortfolioPage = lazy(() => import("./pages/portfolio/portfolio-page"));
const CoursesPage = lazy(() => import("./pages/course/courses-page"));
const CourseLessonsPage = lazy(() => import("./pages/course/course-lessons-page"));
const LessonDetailPage = lazy(() => import("./pages/course/lesson-detail-page"));
const BlogPage = lazy(() => import("./pages/blog/blog-page"));
const BlogDetailPage = lazy(() => import("./pages/blog/blog-detail-page"));

function App() {

    const {theme} = useSelector(getUiState);
    const location = useLocation();

    useVisitorTracking();

    return (
        <HelmetProvider>
            <ThemeProvider theme={theme  === "dark" ? THEMES.darkTheme : THEMES.lightTheme}>
                <CssBaseline enableColorScheme={true}/>
                <ScrollToTop />
                <AnimatePresence mode="popLayout" initial={true}>
                    <Routes location={location}>
                        <Route path="/" element={<Suspense fallback={<Splash/>}><HomePage/></Suspense>}/>
                        <Route path="/about" element={<Suspense fallback={<Splash/>}><AboutPage/></Suspense>}/>
                        <Route path="/contact" element={<Suspense fallback={<Splash/>}><ContactPage/></Suspense>}/>
                        <Route path="/services" element={<Suspense fallback={<Splash/>}><ServicesPage/></Suspense>}/>
                        <Route path="/portfolio" element={<Suspense fallback={<Splash/>}><PortfolioPage/></Suspense>}/>
                        <Route path="/learn" element={<Suspense fallback={<Splash/>}><CoursesPage/></Suspense>}/>
                        <Route path="/learn/:slug/lessons" element={<Suspense fallback={<Splash/>}><CourseLessonsPage/></Suspense>}/>
                        <Route path="/learn/:cslug/lessons/:lslug" element={<Suspense fallback={<Splash/>}><LessonDetailPage/></Suspense>}/>
                        <Route path="/blog" element={<Suspense fallback={<Splash/>}><BlogPage/></Suspense>}/>
                        <Route path="/blog/:slug" element={<Suspense fallback={<Splash/>}><BlogDetailPage/></Suspense>}/>
                        <Route path="*" element={<Suspense fallback={<Splash/>}><NotFoundPage/></Suspense>}/>
                    </Routes>
                </AnimatePresence>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
