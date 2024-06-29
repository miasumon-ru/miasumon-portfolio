import { Outlet } from "react-router-dom";
import ParticlesBg from "../components/ParticlesBg";

const MainLayout = () => {
    return (
        <div className="bg-[#0a0b44]">

             <ParticlesBg></ParticlesBg>

             {/* <Navbar></Navbar>         */}
            <Outlet>
            </Outlet>
        
            
        </div>
    );
};

export default MainLayout;