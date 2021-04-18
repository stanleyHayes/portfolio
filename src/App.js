import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import ContactPage from "./pages/contact/contact-page";
import ServicesPage from "./pages/services/services-page";
import PortfolioPage from "./pages/portfolio/portfolio-page";

function App() {
    return (
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
        </Switch>
    );
}

export default App;
