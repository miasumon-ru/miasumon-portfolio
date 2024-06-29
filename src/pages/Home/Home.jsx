

import profileImage from '../../assets/sumon_profile.png'
import githubIcon from '../../assets/github_icon.png'
import linkedInIcon from '../../assets/linkedIn_icon.png'
import downloadIcon from '../../assets/download_icon.png'
import Navbar from './Navbar';

// import ParticlesBg from "../../components/ParticlesBg";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
                
            <div className="flex flex-col roboto items-center justify-center min-h-screen ">
            

                <img className=" w-56 h-56 object-cover border-2 p-2 border-green-200 rounded-full" src={profileImage} alt="Image of Sumon" />

                <p className="text-2xl font-bold  mt-8 text-center text-white" > Junior Front End  Developer </p>

                <div className="flex flex-row gap-2 my-4" >
                    <p> <a href="https://github.com/miasumon-ru"> <img className="w-8 h-8 bg-white rounded-full" src={githubIcon} alt="" /> </a> </p>
                    <p> <a href="https://www.linkedin.com/in/miasumon/"> <img className="w-8 h-8 " src={linkedInIcon} alt="" /> </a> </p>
                </div>

                <a className="hover:bg-green-600 text-2xl btn bg-green-500  text-white my-4 " href="https://drive.google.com/file/d/1xZ_dUVrF078wvmY_Hl4TyRucyNdiMOr-/view">
                    <button className="flex flex-row gap-2 justify-center items-center">

                        <img className="" src={downloadIcon} alt="" />


                        Resume
                    </button>
                </a>


            </div>


            


        </div>
    );
};

export default Home;