

import "./Skill.css"
import Rating from '@mui/material/Rating';


export const Skill = (props) =>{
    
    console.log(props.image)
    return (
        <div className="grid grid-cols-2 place-items-center ">
            <img src={props.image} alt="" />
            <Rating value={props.level} readOnly/>
        </div>
    );
}