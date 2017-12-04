import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import { Motion, spring } from 'react-motion';
import '../styles/resultsarea.css';

@connect((state) => {
    return {
        currentPercentages: state.currentPercentages,
        pastPercentages: state.pastPercentages
    }
})
export default class ResultsArea extends Component {
    render(){
       return (
           <div className='chart-area-container'>
            <Motion defaultStyle={{width: this.props.pastPercentages.angular}} style={{width: spring(this.props.currentPercentages.angular)}}>
                { springyWidth => {
                    return (<ProgressBar
                        framework={"Angular"}
                        readoutWidth={this.props.currentPercentages.angular}
                        endWidth={springyWidth.width}
                        fillerColor={"#ea1f3f"}
                    />
                )}}

            </Motion>
            <Motion defaultStyle={{width: this.props.pastPercentages.react}} style={{width: spring(this.props.currentPercentages.react)}}>
                { springyWidth => {
                    return (
                    <ProgressBar
                        framework={"React"}
                        readoutWidth={this.props.currentPercentages.react}                    
                        endWidth={springyWidth.width}
                        fillerColor={"#66daf8"}
                    />
                    
                )}}
            </Motion>
            <Motion defaultStyle={{width: this.props.pastPercentages.vue}} style={{width: spring(this.props.currentPercentages.vue)}}>
                { springyWidth => {
                    return (
                    <ProgressBar
                        framework={"Vue"}
                        readoutWidth={this.props.currentPercentages.vue}                          
                        endWidth={springyWidth.width}
                        fillerColor={"#39af78"}
                    />
                )}}
            </Motion>
           </div>  
       )
    }
}