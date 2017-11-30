import React, { Component } from 'react';
import '../styles/infoarea.css';

export default class InfoArea extends Component {
    render(){
        return (
        <div className="info-container">
            <img style={{"marginTop":"25px"}} className="app-img" src={require("../../public/brainbulb.svg")}></img>
            <h2 className="wide">What is your favourite front-end framework in 2017?</h2>
            <h4 style={{"marginTop": "0"}}>Click an image below to vote!</h4>
            <div className="row">
                <div className="images-container">
                    <img className="framework-logo" src={require("../../public/angular.png")}></img>
                    <img className="framework-logo" src={require("../../public/react.png")}></img>
                    <img className="framework-logo" src={require("../../public/vue.png")}></img>                        
                </div>
            </div>
        </div>
        );
    }
}