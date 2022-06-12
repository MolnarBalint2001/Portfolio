


import "./EmailContact.css";
import "./EmailContactNight.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export const EmailContact = () =>{


    return (
        <div className="email-contact grid grid-cols-1 gap-y-8 p-4 shadow-2xl w-full rounded-lg 2xl:translate-y-[-100px] md:col-span-2 2xl:col-span-1">
            <div className="email-contact-header flex flex-row items-center justify-around text-blue-600 text-2xl font-medium ">
                <p>Get in touch with email</p>
                <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <input type="text" placeholder="Name" className="rounded-sm"/>
            <input type="text" placeholder="E-mail address" className="rounded-sm"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="rounded-sm"></textarea>
            <button className="bg-red-800 font-medium text-white p-2 rounded-sm hover:bg-red-900 transition-all text-2xl">Send</button>
        </div>
    );
}