import { Outlet } from "react-router-dom";
import NavBar from "../Componest/Shared/NavBar/NavBar";
import { Helmet } from "react-helmet";
import Footer from "../Componest/Shared/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Helmet>
                <title>BITE-BLISS || HOME</title>
            </Helmet>
            <div className="bg-white">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;