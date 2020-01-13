import React, { Component } from 'react';
import HomeContent from './HomeContent';

class HomepageComponent extends Component {
        constructor(props){
            super(props)
        }

    render(){
        return(
            <main className="homepage">
                <h1>
                    mijn naam is {this.props.name}
                </h1>
                <HomeContent/>
            </main>
        )
    }
}

export default HomepageComponent;
