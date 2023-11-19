import { Helmet } from "react-helmet";
import Hero from "./Hero/Hero";
import HomePageProduct from "./HomePageProduct/HomePageProduct";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>BITE-BLISS || HOME</title>
            </Helmet>
            <Hero></Hero>
            <HomePageProduct></HomePageProduct>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;