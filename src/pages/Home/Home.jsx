import Navbar from "./Navbar";

import profileImage from '../../assets/sumon_profile.png'
import githubIcon from '../../assets/github_icon.png'
import linkedInIcon from '../../assets/linkedIn_icon.png'



const Home = () => {
    return (
        <div >

            <Navbar></Navbar>

            <div className="flex flex-col roboto items-center justify-center min-h-screen">

                <img className=" w-56 h-56 object-cover border-2 p-2 border-green-200 rounded-full" src={profileImage} alt="Image of Sumon" />

                <p className="text-2xl font-bold  mt-8 text-center" > Junior Front End  Developer </p>

                <div className="flex flex-row gap-2 mt-2" >
                    <p> <a href="https://github.com/miasumon-ru"> <img className="w-8 h-8" src={githubIcon} alt="" /> </a> </p>
                    <p> <a href="https://www.linkedin.com/in/miasumon/"> <img className="w-8 h-8" src={linkedInIcon} alt="" /> </a> </p>
                </div>


            </div>

            
        </div>
    );
};

export default Home;