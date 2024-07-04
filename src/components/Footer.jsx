import githubIcon from '../assets/icons8-github.gif'
import linkedInIcon from '../assets/linkedIn_icon.png'
import facebookIcon from '../assets/facebook.png'

const Footer = () => {
    return (
        <div className="p-5">

            <footer className=" flex flex-col gap-6 md:flex-row roboto justify-between bg-[#0a0b44]  text-neutral-content p-5 max-w-7xl mx-auto">
                <aside>

                    <div className='text-2xl font-bold mb-6'>
                        MiaSumon
                    </div>

                    <div className=' space-y-2 md:space-y-4'>
                        <p>
                            Phone : +8801796759576
                        </p>
                        <p>
                            Email : miasumon.ru@gmail.com
                        </p>
                        <p>
                            Location : Gaibandha , Bangladesh
                        </p>
                    </div>

                </aside>
                <nav>
                    <h6 className="text-xl font-bold text-white">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <div className="flex flex-row gap-2 my-4" >

                    <p> <a href="https://www.linkedin.com/in/miasumon/"> <img className="w-8 h-8 " src={linkedInIcon} alt="" /> </a> </p>  
                    
                    <p> <a href="https://github.com/miasumon-ru"> <img className="w-8 h-8 bg-white rounded-full" src={githubIcon} alt="" /> </a> </p>

                     <p> <a href="https://www.facebook.com/searching.rupa.3535"> <img className="w-8 h-8" src={facebookIcon} alt="" /> </a> </p>

                    </div>

                
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;