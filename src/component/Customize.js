import React from "react";
import { useNavigate } from 'react-router-dom';



export default function Customize({ingredients,setIngredients}){
            const onChange=(event,name)=>{
            let newIngredients=JSON.parse(JSON.stringify(ingredients));
            newIngredients[name]=event;
            setIngredients(newIngredients);

      };
         
     return(
         <div style={{border:"2px solid black",flex:1}}>
            <div style={{maxHeight:500,maxWidth:500,position:"relative"}}>
            
         
           <label class="container-checkbox">
            pineapple
            <input type="checkbox" checked={ingredients["pineapple"]}
            onChange={(event)=>
             onChange(event.currentTarget.checked,"pineapple")}/>
             < span class="checkmark"></span>
             </label>

             <label class="container-checkbox">
            Basil
            <input type="checkbox" checked={ingredients["Basil"]}
            onChange={(event)=>
             onChange(event.currentTarget.checked,"Basil")}/>
             < span class="checkmark"></span>
             </label>


             <label class="container-checkbox">
            Cheese
            <input type="checkbox" checked={ingredients["Cheese"]}
            onChange={(event)=>
             onChange(event.currentTarget.checked,"Cheese")}/>
             < span class="checkmark"></span>
             </label>


             <label class="container-checkbox">
            Mushroom
            <input type="checkbox" checked={ingredients["Mushroom"]}
            onChange={(event)=>
             onChange(event.currentTarget.checked,"Mushroom")}/>
             < span class="checkmark"></span>
             </label>

             <label class="container-checkbox">
            Olive
            <input type="checkbox" checked={ingredients["Olive"]}
            onChange={(event)=>
             onChange(event.currentTarget.checked,"Olive")}/>
             < span class="checkmark"></span>
             </label>

             <label class="container-checkbox">
            Tomato
            <input type="checkbox" checked={ingredients["Tomato"]}
            onChange={(event)=>
             onChange(event.currentTarget.checked,"Tomato")}/>
             < span class="checkmark"></span>
             </label>
             <button onClick={()=>useNavigate.push("/checkout")}>
                Proceed to checkout
             </button>
             </div>
             {JSON.stringify(ingredients)}
             </div>
     );

}