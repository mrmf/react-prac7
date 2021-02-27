import React , { useContext, useState, useEffect } from "react";
import {ThemeContext} from "../ThemeContext";

const Test = (props) => { 
  const [buyBucketCount, setbuyBucketCount] = useContext (ThemeContext);
  //const [photos, setPhotos] = useState([]);
  // useEffect(
  //     ()=>{
  //       fetch(`https://jsonplaceholder.ir/photos`)
  //       .then((res) => res.json())
  //       .then((result) => setPhotos(result));
  //     },[]);
  const HandleInc = () => {

    setbuyBucketCount(buyBucketCount + 1)
  } 
  const HandleDec = () => {

    setbuyBucketCount(buyBucketCount - 1)
  } 
    return( 
      <div className="row">              
          <button defaultValue="+" onClick={HandleInc} className="btn ">+</button>
          <input
            type="text" value={buyBucketCount} 
            className="form-control text-center col-4"   />
          <button  defaultValue="-" onClick={HandleDec} className="btn ">-</button>
      </div>
       )

}

export default Test;