import React, { Component } from 'react';
import Login from "./Login"
import { Link } from "react-router-dom"

class Menu extends Component {

    render () {
        return (
            <div className="menu">
                <ul>
                    <li className="home"><Link to="/">Photo@Shop</Link></li>
                    <li style={{"float":"right"}}>
                    <Login/>
                    
                    </li>
                    </ul>
            </div>
        )
    }
}
    export default Menu;



