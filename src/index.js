import React from "react";
import {useState} from "react";
import Header from "./component/Header";
import {BrowserRouter as Router,Route}from "react-router-dom";
import Customize from "./component/Customize";
import Checkout from "./component/Checkout";


export default function App() {
    const[ingredients,setIngredients]= useState("");

    return(
       <div>
          <Header/>
          <Router>
           <Route exact path="/">
                   <Customize
                   ingredients={ingredients} 
                   setIngredients={setIngredients}/>
                 </Route>
                <Route path="/checkout">
                    <Checkout
                    ingredients={ingredients} />

                </Route>
          </Router>
       </div>
   );
}