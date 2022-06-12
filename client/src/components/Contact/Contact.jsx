
import "./Contact.css";
import "./ContactNight.css"
import { contacts } from "../../misc/global";
import { EmailContact } from "../EmailContact/EmailContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Contact = () => {



    return (
        <div className="contact h-fit grid grid-cols-1 place-items-center bg-slate-100 pb-10 2xl:pb-0 mt-[40vh]" id="contact">


            <div className="grid grid-cols-1 place-items-center lg:place-items-start gap-y-10 w-4/5 lg:grid-cols-2 2xl:grid-cols-3">

                <div className="contact-left grid grid-cols-1 gap-y-4 pt-20 grid grid-cols-1 place-items-center md:place-items-start">
                    <div className="text-4xl font-medium text-blue-600">Contact</div>
                    <div className="w-2/3 text-justify">If you are getting impressed from my works and knowledge contact me on social platforms or with e-mail.</div>
                </div>

                <div className="grid grid-cols-1 gap-y-8 place-items-center pt-20">
                    <div className="text-2xl font-medium text-blue-600">Get in touch on social platforms</div>
                    <div className="grid grid-cols-3 place-items-center w-2/3">
                        <a href="https://www.facebook.com/balint.molnar.397/"><img src="https://img.icons8.com/fluency/40/undefined/facebook.png" /></a>
                        <a href="https://www.instagram.com/balintmolnar20/"><img src="https://img.icons8.com/fluency/40/undefined/instagram-new.png"/></a>
                        <img src="https://img.icons8.com/color/40/undefined/linkedin.png"/>
                    </div>
                </div>

                <EmailContact/>
            </div>

        </div>
    );
}