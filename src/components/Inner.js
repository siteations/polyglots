import React, { Component } from 'react';

class InnerSVG extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let dots = this.props.overlays;

    console.log('sites to add ', dots);

	return (
	     <g>
	      	<image width={this.props.w} height={this.props.h} x={0} y={0} xlinkHref="./London-Header.jpg" />
          <text x="50" y="50"> placeholder image </text>
          <text x="50" y="75"> placeholder annotation position </text>
          <g>
          {dots &&
            dots.map((site, i)=>{ //placeholder until identified in text
              return <circle className={site.category} cx="100" cy={i*40+150} r="15" onTouchTap={e=>this.props.on(e)} key={site.id}  id={site.id} label={site.type} />
            })
          }
          </g>
	    </g>
	        )
	}
};

export default InnerSVG;
