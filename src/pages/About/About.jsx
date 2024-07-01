import Title from "../../components/Title";
import Navbar from "../Home/Navbar";

import aboutImage from '../../assets/sumon_profile.png'



const About = () => {
    return (
        <div className="min-h-screen roboto">
            <Navbar></Navbar>


            <Title title={"About"}></Title>


            <div className="flex flex-col-reverse md:flex-row gap-8 p-5 justify-center items-center">

                <div className=" flex flex-col justify-center items-center text-white">
                    <img className="w-64 h-64 rounded-full object-cover border-2 p-2 border-white" src={aboutImage} alt="image of sumon" />

                    <div className="mt-6 space-y-2 text-center">
                        <p> Phone : +8801796759576 </p>
                        <p> Email : miasumon.ru@gmail.com </p>
                        <p> Location : Gaibandha, Bangladesh </p>
                    </div>
                </div>

                <div className="text-white max-w-2xl flex flex-col text-justify justify-center items-center p-5">
                    <p> Sumon , <span className="text-orange-400 font-bold">a junior front-end web developer</span> creating a functional and attractive web design , is currently studying in <span className="text-orange-400 font-bold">Department of Law</span>, University of Rajshahi, Bangladesh.

                        <br />
                        <br />

                        He is self-taught front-end web developer focusing on <span className="text-orange-400 font-bold">MERN</span> stack and dedicated to continuous learning as well as capable of adjusting himself with a new technology.
                    </p>
                </div>


            </div>



        </div>
    );
};

export default About;