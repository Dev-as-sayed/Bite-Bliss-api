// import {heroMainImg } from "../../../../assets/image/heroMainImg.jpg"

import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div >
            <div className="hero pb-20 min-h-screen ">
                <div className="hero-content p-14 flex-col lg:flex-row">
                    <div className="text-center  text-slate-600">
                        <h1 className="text-5xl font-bold"> Kitchen Bliss</h1>
                        <p className="w-9/12 mx-auto py-6">Create a culinary haven with our chic kitchen solutions. Elevate your cooking experience effortlessly.</p>
                        <button className="btn btn-outline btn-success mr-4"><Link to="/blog" >Food Rsipes</Link></button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm lg:ml-24">
                        <div className="relative">
                            <img className="w-80 rounded-lg border-4 border-white shadow-2xl" src="https://i.ibb.co/7nX4wQz/image.png"  alt="" />
                            <img className="w-40 rounded-lg border-5 border-white absolute top-60 right-72 shadow-2xl" src="https://i.ibb.co/f4nzHYt/restonet-Team.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero pb-20 bg-slate-100 min-h-screen">
                <div className="hero-content p-14 flex-col lg:flex-row-reverse">
                    <div className="text-center  text-slate-600">
                        <h1 className="text-5xl font-bold">Unforgettable Dining Experiences Await</h1>
                        <p className="w-9/12 mx-auto py-6">Indulge in exquisite flavors and impeccable service at our restaurant. Elevate your dining moments with culinary delights that leave a lasting impression.</p>
                        <button className="btn btn-outline btn-success mr-4"><Link to="/allFood" >Our Foods</Link></button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm lg:ml-24">
                        <div className="relative">
                            <img className="w-80 rounded-lg border-4 border-white shadow-2xl" src="https://i.ibb.co/3FGW9j3/food-For-Crusel.jpg" alt="" />
                            <img className="w-40 rounded-lg border-5 border-white absolute top-60 right-2 shadow-2xl" src="https://i.ibb.co/PYBwqXb/hero-Main-Img.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;