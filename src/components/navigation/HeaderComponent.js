import React, { Component } from 'react';
import NavigationComponent from "./NavigationComponent";

class HeaderComponent extends Component {
    constructor(props){
        super(props)
    }


    returnHeader(){
        return(
            <div className="header">
                <h1 className="header__title">Shop Title</h1>
            </div>
        )
    }



    render(){
        return(
            <div>
                {this.returnHeader()}
                <NavigationComponent />
            </div>
        )
    }
}

export default HeaderComponent;