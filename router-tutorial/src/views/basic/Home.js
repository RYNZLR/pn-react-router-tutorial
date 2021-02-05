import React from 'react';
import { useHistory, Link, NavLink } from "react-router-dom";

export default  function Home(){

    const history = useHistory();

    function goToAbout(){
        history.push("/about");
    }

    return(
        <main>
            <h1>Home</h1>
            <h2>Programmatically link</h2>
            <p onClick={goToAbout}>Click me to go the about!</p>

            <h2>Link components</h2>
            <h3>Link</h3>
            <Link to="/users">String Link: Users</Link>
            <br/>
            <Link to="/params/1/hello">Link: params</Link>
            <br/>
            <Link to= {{ 
                pathname: "/queries",
                search: "?name=Lisa&age=20",
                hash: "#hash",
             }}>Object Link: Queries</Link>
            <br/>
            <Link to={location => ({...location, pathname: "/about"})}>Function Link: about</Link>
            <br/>
            <Link to="/users" replace>Replace history entry</Link>

            <h3>NavLink</h3>
            <NavLink to="/users/create">NavLink: Create user</NavLink>
            <br/>
            <NavLink to="/" activeClassName="active">Current page: activeClassName</NavLink>
            <br/>
            <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "#00ffbb" }}>Current page: activeStyle</NavLink>
            
            
        </main>

    )

}