import React, { Component } from 'react';

class Inner extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {

	return (
	     <g>
	      	<rect width={this.props.w*.25} height={this.props.h*.25} x={this.props.w*.25} y={this.props.h*.25} onTouchTap={e=>this.props.on(e)} id="square" fill="#000" fillOpacity="0.05" stroke="#000" />
	    </g>
	        )
	}
};

export default Inner;
