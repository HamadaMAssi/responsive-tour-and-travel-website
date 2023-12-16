
import React, { Component } from 'react'

import "../Destination/Destination.css"

class DestinationData extends Component {
    render(){
        return (
            <div className={this.props.cName}>
                <div className='des-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className='image'>
                <img alt='mountain' src={this.props.img1} />
                <img alt='mountain' src={this.props.img2} />
                </div>
            </div>
          )
    }
}

export default DestinationData
