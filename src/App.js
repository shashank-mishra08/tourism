import React, { useState } from "react";
import data from './data.js';
import Tours from "./components/Tours";

const App = ()=>{
  
  // tours wale variable ke andar saara data daal diya  data.js ka
  const[tours, setTours] = useState(data);

  function removeTour(id){
    const updatedItems = tours.filter((tour) => tour.id !== id);
    setTours(updatedItems);
        
  }
  if(tours.length==0){
    return(
      <div>
        <h2>sorry...🙂‍↕️ No tours left</h2>
        <button className="btn " onClick={()=>setTours(data)}>Reload</button>
      </div>
    )
  }
 
  return (
    <div className="app">

    {/* isme tours wala data pass kar diya hai jo data se copy krke tour me daala tha  */}
    <Tours tours ={tours} removeTour={removeTour}></Tours>
   </div>

  )
  
}
export default App;
