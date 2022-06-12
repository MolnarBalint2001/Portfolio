
import "./Opening.css"
import { Navbar } from "../Navbar/Navbar";


export const Opening = () => {


    return (
        <div className="opening lg:h-[100vh] h-[70vh]">
            <Navbar />
            <div className="flex flex-col space-y-8 text-center pt-[35vh] p-2">
                <div className="text-5xl lg:text-7xl text-white font-semibold">Welcome to my personal website!</div>
                <div className="text-4xl lg:text-5xl text-slate-200 font-medium"><span className="text-red-800">Hard</span> work betrays none...</div>
            </div>


        </div>
    );

}