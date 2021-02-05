import React from 'react';
import { useHistory } from "react-router-dom";

export default  function Home(){

    const history = useHistory();

    function goToAbout(){
        history.push("/about");
    }

    return(
        <main>
        <h1>Home</h1>
        <p onClick={goToAbout}>Click me to go the about!</p>
        </main>

    )

}