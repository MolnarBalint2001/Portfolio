
import "./Navbar.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { blueGrey, indigo, yellow } from "@mui/material/colors";
import { useEffect, useState } from "react";
import Avatar from "../../images/AvatarMaker.png"






export const Navbar = () => {
    //true-nappali
    //false-night
    const [theme, setTheme] = useState(true);
    const [Y, setY] = useState(0);




    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);

    });


    const changeNavbar = () => {
        const navbar = document.querySelector(".navbar");
        const ball = document.querySelector(".ball");
        const Y = window.scrollY;
        console.log(Y)
        setY(Y);

        if (Y >= 285) {
            navbar.classList.add("active");
        }
        else {
            ball.classList.remove("change");
            navbar.classList.remove("active");
        }


    }

    const LightDarkControl = () => {

        const sun = document.querySelector(".sun");
        const moon = document.querySelector(".moon");
        const ball = document.querySelector(".ball");
        const about = document.querySelector(".about");
        const skills = document.querySelector(".skills");
        const contact = document.querySelector(".contact");

        setTheme((theme) => {
            return !theme;
        })
        ball.classList.toggle("night");

        if (!theme) {
            sun.classList.add("active");
            moon.classList.remove("active");
            about.classList.remove("night");
            skills.classList.remove("night");
            contact.classList.remove("night")
        }
        else {
            sun.classList.remove("active");
            moon.classList.add("active");
            about.classList.add("night");
            skills.classList.add("night");
            contact.classList.add("night")
        }

    }


    return (
        <div className="navbar h-[9vh] w-full flex flex-row justify-around text-white text-lg font-semibold mx-auto p-4 fixed items-center">

            <img src={Avatar} className="w-[80px] pt-1" />
            <div className="justify-around flex-row w-[50%] hidden lg:flex">
                <a href="#about" className="nav-link hover:text-red-700">About</a>
                <a href="#skills" className="nav-link hover:text-red-700 ">Skills</a>
                <a href="#projects" className="nav-link hover:text-red-700 ">Projects</a>
                <a href="#contact" className="nav-link hover:text-red-700 ">Contact</a>
            </div>

            <div className="burger flex flex-col space-y-2 inline-block lg:hidden cursor-pointer">
                <div className="h-[2px] bg-white w-[40px]"></div>
                <div className="h-[2px] bg-white w-[40px]"></div>
                <div className="h-[2px] bg-white w-[40px]"></div>
            </div>


            <div>
                <div className="light-dark-controller px-4 flex flex-row space-x-4 py-2 rounded-3xl" onClick={LightDarkControl}>
                    <WbSunnyIcon className="sun" fontSize="large" sx={{ color: yellow[500] }} />
                    <ModeNightIcon className="moon" fontSize="large" sx={{ color: blueGrey[500] }} />
                    <div className="ball bg-zinc-800"></div>
                </div>
            </div>
        </div>

    );
}