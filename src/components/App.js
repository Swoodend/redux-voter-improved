import React, { Component } from 'react';
import InfoArea from './InfoArea';
import '../styles/app.css';


export default class App extends Component {
    render(){
        return (
            <div className="app">
                <InfoArea />
            </div>
        );
    }
}