import React, { Component } from 'react';
import Login from "./Login"

class Menu extends Component {

    render () {
        return (
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li style={{"float":"right"}}>
                    <Login/>
                    
                    </li>
                    </ul>
            </div>
        )
    }
}
    export default Menu;



