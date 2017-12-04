import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castVote } from '../actions/voteAction';
import '../styles/infoarea.css';


@connect(state => {
    return {
        votes: {
            angular: state.votes.angular,
            react: state.votes.react,
            vue: state.votes.vue
        },
        currentPercent: {
            angular: state.currentPercentages.angular,
            react: state.currentPercentages.react,
            vue: state.currentPercentages.vue
        }
    }
})
export default class InfoArea extends Component {
    constructor(props){
        super(props);
        this.votedAngular = this.votedAngular.bind(this);
        this.votedReact = this.votedReact.bind(this);
        this.votedVue = this.votedVue.bind(this);
    }   

    votedAngular(){
        this.props.dispatch(castVote('angular'));
    }

    votedReact(){
        this.props.dispatch(castVote('react'));        
    }

    votedVue(){
        this.props.dispatch(castVote('vue'));
    }

    render(){
        return (
        <div className="info-container">
            <img 
                style={{"marginTop":"25px"}} 
                className="app-img" 
                src={require("../../public/brainbulb.svg")}>
            </img>
            <h2 className="wide">What is your favourite front-end framework in 2017?</h2>
            <h4 style={{"marginTop": "0"}}>Click an image below to vote!</h4>
            <div className="row">
                <div className="images-container">
                    <img
                        onClick={this.votedAngular} 
                        className="framework-logo" 
                        src={require("../../public/angular.png")}>
                    </img>
                    <img 
                        onClick={this.votedReact}
                        className="framework-logo" 
                        src={require("../../public/react.png")}>
                    </img>
                    <img 
                        onClick={this.votedVue}
                        className="framework-logo"
                        src={require("../../public/vue.png")}
                    ></img>
                </div>
            </div>
        </div>
        );
    }
}