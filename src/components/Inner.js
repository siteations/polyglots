import React, { Component } from 'react';

class InnerSVG extends Component {
	constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let dots = this.props.overlays;
    let key = this.props.select;
    let placeholder;

    (key==='london'|| key ==='antwerp')? placeholder= true : placeholder= false;

    let ratio = +this.props.w / 3021; //for size sonversions... adjust after zoom.

    console.log('sites to add ', dots, ratio);

	return (
	     <g>
        {placeholder &&
          <g>
	      	<image width={this.props.w} height={this.props.h} x={0} y={0} xlinkHref="./London-Header.jpg" />
          <text x="50" y="50"> placeholder image </text>
          <text x="50" y="75"> placeholder annotation position </text>
          <text x="50" y="100"> modal window positon randomized </text>
          <g>
          {dots &&
            dots.map((site, i)=>{ //placeholder until identified in text
              return <circle className={site.category} cx="100" cy={i*40+150} r="15" onTouchTap={e=>this.props.on(e)} key={site.id}  id={site.id} label={site.type} />
            })
          }
          </g>
          </g>
        }
        {!placeholder &&
          <g>
          <image width={this.props.w} height={this.props.h} x={0} y={0} xlinkHref="./Compu-tests.jpg" />
          <g>
          {dots &&
            dots.map((site, i)=>{ //placeholder until identified in text
              return (
                <g key={site.id} >
                <rect className={site.rect.stroke} x={site.rect.x*ratio} y={site.rect.y*ratio}  width={site.rect.width*ratio} height={site.rect.height*ratio} id={site.id} value={site.pos} label={site.type} onTouchTap={e=>this.props.on(e)} />
                <circle className={site.category} cx={site.x*ratio} cy={site.y*ratio} r="8" onTouchTap={e=>this.props.on(e)} id={site.id} value={site.pos} label={site.type} />
                </g>
                )
            })
          }
          </g>
          </g>
        }
	    </g>
	        )
	}
};

export default InnerSVG;
