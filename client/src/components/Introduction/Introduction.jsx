
import "./Introduction.css"
import Avatar from "../../images/AvatarMaker.png";
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import DescriptionIcon from '@mui/icons-material/Description';
import "./IntroductionNight.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";


export const Introduction = () => {


    return (

        <div id="about" className="about ">
            <div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 place-items-center">

                <div className="w-[95%] lg:w-[80%] xl:w-[60%] shadow-2xl rounded-lg my-20">
                    <div className="intro-header grid grid-cols-2 place-items-center rounded-lg">
                        <img src={Avatar} className="pt-2" />
                        <div className="intro-title ">

                        </div>
                    </div>
                    <div className="intro-desc text-justify p-8">My name is Bálint Molnár. I haven been attended to University of Debrecen as a softwer engineer beside chemical engineering. I have been interested in programming since 2020. I have tought my self how to programming, learning programming concepts, algorithms and useful modern technologies. I worked in the softwer developing industry as a freelance web developer. My personal prefernce is engineering web application's frontend, but I also like dealing with the backend. I always do the best I can in my projects. I always strive to be better and better and learning new features, technologies.</div>

                    <div className="intro-content flex flex-col items-center space-y-4 justify-around py-10 sm:flex-row sm:space-y-0 sm:space-x-4 rounded-b-md">
                        <a href="" className="flex flex-row space-x-4 items-center justify-center text-lg sm:text-xl md:text-2xl bg-blue-600 text-white w-[18vh] p-1 rounded-md hover:bg-blue-700 transition-all font-medium">
                            <FontAwesomeIcon icon={faCode} />
                            <p>Skills</p>

                        </a>

                        <a href="" className="hover:bg-red-900 flex flex-row space-x-4 items-center justify-center text-lg sm:text-xl md:text-2xl text-white bg-red-800 w-[18vh] rounded-md p-1 transition-all font-medium">
                            <FontAwesomeIcon icon={faLaptopCode} />
                            <p>Projects</p>
                        </a>


                    </div>
                </div>

            </div>
        </div>

    );
}