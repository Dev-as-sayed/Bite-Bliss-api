import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-5 bg-neutral text-neutral-content ">
            <aside className="mx-auto">
                <div className="w-fit text-center">
                    <Link className="btn btn-ghost normal-case text-2xl" to="/">BLTE BLISS</Link>
                    <p className="w-64">Copyright © 2023 - All right reserved by BITE-BLISS Industries Ltd</p>
                </div>
            </aside> 
            <nav className="mx-auto">
                <div className="w-fit">
                    <header className="footer-title text-center">Social</header> 
                    <div className="grid grid-flow-col gap-4">
                        <a className="text-3xl"><FaFacebook></FaFacebook></a> 
                        <a className="text-3xl"><FaLinkedin></FaLinkedin></a> 
                        <a className="text-3xl"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;