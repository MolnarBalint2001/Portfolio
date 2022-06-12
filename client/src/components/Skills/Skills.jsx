
import "./Skills.css"
import "./SkillsNight.css"
import { Skill } from "../Skill/Skill";
import { skills } from "../../misc/global";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {


    return (

        <div id="skills" className="skills">

            <div className="w-[95%] md:w-[90%] h-fit mx-auto flex flex-col items-center">

                <div className="w-[95%] lg:w-[80%] xl:w-[60%] h-fit shadow-2xl rounded-lg">


                    <div className="skills-header p-8 lg:h-[35vh] rounded-t-lg flex flex-col justify-center items-center space-y-6 ">
                        <div className="text-4xl text-white font-medium">My Skills</div>
                        <div className="text-white w-full sm:w-[80%] md:w-[60%] lg:w-[50%] text-justify font-medium text-sm sm:text-lg">I have been learning programming for 1.5 years. I learned lot of programming concepts, algorithims and different styling skills. I am intented to learn as much as I can but not at the expense of quality.</div>
                    </div>

                    <div className="skills-content grid grid-cols-1 place-items-center p-2 sm:grid-cols-2 pt-8">

                        {skills.map(e =>
                            <Skill image={e.image} level={e.level} />
                        )}
                    </div>


                    <div className="skills-content flex flex-col items-center space-y-4 justify-around py-10 sm:flex-row sm:space-y-0 sm:space-x-4 rounded-b-md">
                        <a href="" className="flex flex-row space-x-4 items-center justify-center text-lg sm:text-xl md:text-2xl bg-blue-600 text-white w-[18vh] p-1 rounded-md hover:bg-blue-700 transition-all font-medium">
                            <FontAwesomeIcon icon={faUserAstronaut}/>
                            <p>About Me</p>

                        </a>

                        <a href="" className="hover:bg-red-900 flex flex-row space-x-4 items-center justify-center text-lg sm:text-xl md:text-2xl bg-red-800 text-white w-[18vh] rounded-md p-1 transition-all font-medium">
                            <FontAwesomeIcon icon={faLaptopCode}/>
                            <p>Projects</p>
                        </a>


                    </div>
                </div>
            </div>

        </div>
    );
}