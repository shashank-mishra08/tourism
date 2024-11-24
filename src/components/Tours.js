import React from "react";
import Card from "./Card";

function Tours({tours,removeTour}){
    return(
        <div className="container">
        <div><h2 className="title">PLAN WITH SHASHANK</h2></div>
        {/* ye hai card wala div isme 7 cities ke card honge jo bas ek card banane se ho jayega */}
        <div className="cards">
            {
                tours.map((tour)=>{
                    {/* ...tour ise pure tour object ki copy pass kr di */}
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>

        </div>
    )

}
export default Tours;