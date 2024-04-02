import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Checkout(){
  const [success, setSuccess] = useState("");

  function handleChange(event) {
      console.log(event.target.value);
  }

  return (
    <div>
      <div style={{display:"flex"}}>
        
      <div>
    <h2>Your Ingredients</h2>
    {Object.map((ingredient) => {
        return (
            ingredient[ingredient] && (
                <p>
                    {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                </p>
            )
        );
    })}
</div>
          <div>
            <button onClick={()=>setSuccess(true)}>
                Confirm
            </button>
            <button onClick={()=>useNavigate.push("/")}>
                Go back
            </button>
          </div>
        
         <div>Order is Completed.</div>
       
        <div> <input type="text" onChange={handleChange} />
         <p>Success: {success}</p></div>
        
         </div>
        </div>
    );
}

  
  
  
  
  
    


   