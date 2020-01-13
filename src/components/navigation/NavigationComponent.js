import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavigationComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="header-navigation">
                <ul>
                    <NavLink className="header-navigation__link" to="/">
                        Home
                    </NavLink>
                </ul>
                <ul>
                    <NavLink  className="header-navigation__link"
                              to="/catalog"
                              activeClassName="active-link">
                        Categories
                    </NavLink>
                </ul>
                <ul>
                    <NavLink  className="header-navigation__link"
                              to="/about"
                              activeClassName="active-link">
                        Abou
                    </NavLink>
                </ul>
            </div>
        )
    }
}

export default NavigationComponent;

