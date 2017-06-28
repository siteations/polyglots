import React, { Component } from 'react';
import Summary from'./Summary';
import scrollToElement from 'scroll-to-element';
import {eachPanel, sourceList, fullSourcePrimary, fullSourceSecondary, sourceListBib} from '../copy/panels.js';


class Biblio extends Component {
	constructor(props) {
        super(props);
				this.state = {
					open: false,
				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
		}

	showInfo(){

  	this.setState({open: true});
  }

  hideInfo(){
  	this.setState({open: false});
  }

  render() {
  	var list=this.props.list

	return (
	    <div className="row hidden-print">
			<div className="col-xs-10 col-xs-offset-1" id="biblio">
				<div className="page bshadowed layer1" >

					<div className="row">
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Print Collected Texts</button>
						</div>
						<div className="col-md-4 text-center">
							<h2 className="underline">Bibliography</h2>
						</div>
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Print Full Bibliography</button>
						</div>
					</div>

					<div className="row ">
						<h3 className="m20">The Great Polyglots: <br/>Primary Sources</h3>
					<div className="col-xs-11 col-xs-offset-1">
			        <ul>
							{sourceListBib.primary &&
								sourceListBib.primary.map(item => {
									if (item.link !== null){
                		return <li className="black plarge" > {item.text} <br/><a href={item.link} target="blank"><em>catalog link </em></a></li>
                	} else {
                		return <li className="black plarge" > {item.text} </li>
                	}
                })
							}
							</ul>
							<br/>
					</div>
					<h3 className="m20">The Great Polyglots: <br/>Secondary Sources</h3>
					<div className="col-xs-11 col-xs-offset-1">
			        <ul>
							{sourceListBib.secondary &&
								sourceListBib.secondary.map(item => {
									if (item.text !== null){
                		return <li className="black  plarge" > {item.text} </li>
                	}
                })
							}
							</ul>
							<br/>
						</div>

					</div>



			  </div>
		  </div>
		  </div>
	        )
	}
};

export default Biblio;
