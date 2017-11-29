import React, { Component } from 'react';
import '../styles/app.css';
import testImg from '../../public/small.gif';

function testDecorator(target){
    target.working = true;
}

@testDecorator
export default class App extends Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <img src={testImg}></img>
            </div>
        );
    }
}

console.log('decorating working is', App.working);