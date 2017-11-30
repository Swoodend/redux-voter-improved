import React, { Component } from 'react';
import InfoArea from './InfoArea';
import '../styles/app.css';

function testDecorator(target){
    target.working = true;
}

@testDecorator
export default class App extends Component {
    render(){
        return (
            <div className="app">
                <InfoArea />
            </div>
        );
    }
}
