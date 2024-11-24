import React from "react";
import { useState } from "react";

 const Card=({id, name, info, price, image,removeTour}) => {
    const[readmore,Setreadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler(){
        Setreadmore(!readmore);
    }

    

    return(
        <div className="card">
          <div> <img className="image" src={image}></img>  </div>
          <div  className="tour-details">
            <h4 className="tour-price">₹ {price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>
          <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `showless` : `readmore`}
            </span>
          </div>

         <button className="button" onClick={()=>removeTour(id)}>Not intreseted</button>

        </div>

    );
}
  export default Card;