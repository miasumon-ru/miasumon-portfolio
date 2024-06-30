import Title from "../../components/Title";
import Navbar from "../Home/Navbar";

import { FaCheckCircle } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="min-h-screen p-5">
            <Navbar></Navbar>

            <Title title={'Projects'}></Title>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 roboto">
                <div className="card card-compact bg-[#090c56] text-white  shadow-xl">
                    <figure>
                       
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">GreenLifeStyle |  Building Management </h2>
                        <p className="flex flex-row items-center gap-2 text-xs mt-2"> <FaCheckCircle /> A user can rent an apartment giving payment</p>
                        <p className="flex flex-row items-center gap-2 text-xs "> <FaCheckCircle /> User, Member and Admin dashboard are available</p>
                        <p className="flex flex-row items-center gap-2 text-xs "> <FaCheckCircle /> Login and Registration with firebase</p>
                        <p className="text-xs my-2"> <span className="font-bold text-orange-400 ">Used Technology</span> : React,Tailwind CSS, Firebase, Stripe, JWT, Express, MongoDB</p>

                        <div className="grid grid-cols-3 gap-4 text-[18px] my-2">
                            <p> <a className="underline" href="https://assignment-twelve-client-e914a.web.app"> Live </a> </p>
                            <p> <a className="underline " href="https://github.com/miasumon-ru/greenLifestyle?tab=readme-ov-file"> Client </a> </p>
                            <p> <a className="underline " href="https://github.com/miasumon-ru/greenLifestyle-server"> Server </a> </p>

                        </div>
                        
                    </div>
                </div>
                <div className="card card-compact bg-[#090c56] text-white  shadow-xl">
                    <figure>
                      
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Uttaran | Library Management System</h2>
                        <p className="flex flex-row items-center gap-2 text-xs mt-2 "> <FaCheckCircle /> A user can add and borrow a book</p>
                        <p className="flex flex-row items-center gap-2 text-xs "> <FaCheckCircle /> The user also can return the book</p>
                        <p className="flex flex-row items-center gap-2 text-xs "> <FaCheckCircle /> Jwt token is used to secure api</p>
                        <p className="text-xs my-2"> <span className="font-bold text-orange-400">Used Technology</span> : React, Javascript,Tailwind CSS, Express, MongoDB, JWT </p>

                        <div className="grid grid-cols-3 gap-4 text-[18px] my-2">
                            <p> <a className="underline" href="https://assignment-eleven-client-side.web.app"> Live </a> </p>
                            <p> <a className="underline " href="https://github.com/miasumon-ru/uttaran-library-client-side"> Client </a> </p>
                            <p> <a className="underline " href="https://github.com/miasumon-ru/uttaran-library-server-side"> Server </a> </p>

                        </div>
                        
                    </div>
                </div>
                <div className="card card-compact bg-[#090c56] text-white  shadow-xl">
                    <figure>
                        
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">JuteWoody | Collection of Crafts</h2>
                        <p className="flex flex-row items-center gap-2 text-xs mt-2"> <FaCheckCircle /> A user can add a craft item</p>
                        <p className="flex flex-row items-center gap-2 text-xs "> <FaCheckCircle /> Product is stored in the mongodb database</p>
                        <p className="flex flex-row items-center gap-2 text-xs "> <FaCheckCircle /> Items can be updated and deleted easily</p>
                        <p className="text-xs my-2"> <span className="font-bold text-orange-400 ">Used Technology</span> : React, Javascript, Tailwind CSS, Express, MongoDB</p>

                        <div className="grid grid-cols-3 gap-4 text-[18px] my-2">
                            <p> <a className="underline" href="https://assignment-ten-client-si-56d22.web.app"> Live</a> </p>
                            <p> <a className="underline " href="https://github.com/miasumon-ru/jutewoody-client-side"> Client </a> </p>
                            <p> <a className="underline " href="https://github.com/miasumon-ru/jutewoody-server-side"> Server </a> </p>

                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;