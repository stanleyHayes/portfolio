import './App.css';
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import ContactPage from "./pages/contact/contact-page";
import ServicesPage from "./pages/services/services-page";
import PortfolioPage from "./pages/portfolio/portfolio-page";
import {useSelector} from "react-redux";
import {getUiState} from "./features/ui/ui-slice";
import {ThemeProvider} from "@material-ui/styles";
import {dark, light} from "./themes/themes";
import CoursesPage from "./pages/course/courses-page";
import CourseLessonsPage from "./pages/course/course-lessons-page";
import LessonDetailPage from "./pages/course/lesson-detail-page";

function App() {

    const variant = useSelector(getUiState);
    let theme = variant === "dark" ? dark : light

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route element={<HomePage/>} path="/" exact={true} />
                <Route element={<AboutPage/>} path="/about" exact={true} />
                <Route element={<ContactPage/>} path="/contact" exact={true} />
                <Route element={<ServicesPage/>} path="/services" exact={true} />
                <Route element={<PortfolioPage/>} path="/portfolio" exact={true} />
                <Route element={<CoursesPage/>} path="/blog" exact={true} />
                <Route element={<CourseLessonsPage/>} path="/blog/:slug/lessons" exact={true} />
                <Route element={<LessonDetailPage/>} path="/blog/:cslug/lessons/:lslug" exact={true} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
