
import "./TabletDevice.css"
import Notebook from "../../images/notebook.png"

export const TabletDevice = () => {


    return (
        <div className="h-fit relative">
            <iframe src="https://hnfdebrecen.com/" frameborder="0" className="project-iframe w-[916px] h-[573px]"></iframe>
            <img src={Notebook} alt=""></img>
        </div>

    );
}