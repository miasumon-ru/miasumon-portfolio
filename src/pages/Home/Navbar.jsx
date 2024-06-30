import { NavLink } from "react-router-dom";


const Navbar = () => {
    
    const links = <>

    <li className="roboto"> <NavLink to='/' className={({ isActive }) => isActive ? 'text-white border border-white' : 'text-white'} > Home </NavLink> </li>

    <li className="roboto"> <NavLink to='/about' className={({ isActive }) => isActive ? 'text-white border border-white' : 'text-white'} > About </NavLink> </li>

    <li className="roboto"> <NavLink to='/skills' className={({ isActive }) => isActive ? 'text-white border border-white' : 'text-white'} > Skills </NavLink> </li>

    <li className="roboto"> <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-white border border-white' : 'text-white'} > Projects </NavLink> </li>

    <li className="roboto"> <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-white border border-white' : 'text-white'} > Contact </NavLink> </li>

    {/* <li className="roboto"> <NavLink to='/login' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > Login </NavLink> </li> */}

    {/* <li> <NavLink to='/newRelease' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > New Release </NavLink> </li>

    <li> <NavLink to='/bestSeller' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > Best Seller </NavLink> </li> */}

</>

    return (
        <div className="navbar bg-[#0a0b44]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {
                            links
                        }

                  
                  

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl roboto text-white">MiaSumon</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        links
                    }
                  


                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">HI</a>
            </div>
        </div>
    );
};

export default Navbar;