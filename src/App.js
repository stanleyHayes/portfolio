import './App.css';
import {Switch, Route} from "react-router-dom";
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
            <Switch>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
                <Route path="/about" exact={true}>
                    <AboutPage/>
                </Route>
                <Route path="/contact" exact={true}>
                    <ContactPage/>
                </Route>
                <Route path="/services" exact={true}>
                    <ServicesPage/>
                </Route>
                <Route path="/portfolio" exact={true}>
                    <PortfolioPage/>
                </Route>

                <Route path="/blog" exact={true}>
                    <CoursesPage/>
                </Route>
                <Route path="/blog/:course/lessons" exact={true}>
                    <CourseLessonsPage/>
                </Route>
                <Route path="/blog/:course/lessons/:lesson">
                    <LessonDetailPage/>
                </Route>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
