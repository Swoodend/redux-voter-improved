import React, { Component } from 'react';
import '../styles/progressbar.css';

export default class ProgressBar extends Component {
    render(){
        return (
            <div className="progress-bar">
                <div 
                    className='progress-bar-tag'
                    style={{background: this.props.fillerColor}}
                >
                    {this.props.framework}
                </div>
                <div id="percentage-readout">{this.props.readoutWidth + '%'}</div>                
                <div 
                    style={{width: this.props.endWidth + '%', background: this.props.fillerColor}}
                    className="filler"
                >
                </div>
            </div>
        )
    }
}