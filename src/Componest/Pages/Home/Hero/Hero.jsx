import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero pb-20 min-h-screen">
            <div className="hero-content p-14 flex-col lg:flex-row-reverse">
                <div className="text-center  text-slate-600">
                    <h1 className="text-5xl font-bold"> Your Culinary Partner!</h1>
                    <p className="w-9/12 mx-auto py-6">Unlock the full potential of your restaurant with Bite Bless Management Suite. Seamlessly manage orders, streamline operations, and savor the taste of success in every culinary creation.</p>
                    <button className="btn btn-outline btn-success mr-4"><Link to="/registar" >Get start</Link></button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm lg:ml-24">
                    <div className="relative">
                        <img className="w-80 rounded-lg border-4 border-white shadow-2xl" src="https://i.ibb.co/kKhhVcj/image.png" alt="" />
                        <img className="w-40 rounded-lg border-5 border-white absolute top-60 right-2 shadow-2xl" src="https://i.ibb.co/ncfD6B0/image.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;