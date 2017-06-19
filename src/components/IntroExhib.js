import React, { Component } from 'react';
import Summary from'./Summary';
import scrollToElement from 'scroll-to-element';

import {summaries, introParagraph} from '../copy/content.js';

class IntroExhib extends Component {
	constructor(props) {
        super(props);
				this.state = {
					open: false,
				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
		}

	showInfo(){
  	//console.log(e.target.id);
  	this.setState({open: true});
  }

  hideInfo(){
  	this.setState({open: false});
  }


	jumpToHash = () => {
    const hash = '#introPoly';
    this.props.info.history.push(hash);

    if (hash) {
      scrollToElement(hash, { offset: -120 });
    }
  }

  render() {

	return (
			<div className="col-xs-10 col-xs-offset-1 pre-jumbotron" id="introExhib">
				<div className="page bshadowed layer1" >
					<div className="jumbotron">
			      <div className="text-center">
			        <h1 className="white pjheader">Polyglot Productions</h1>
			        <h3 className="white">Polyglot Bibles Subtitle here</h3><br/>
			        <p className="white">Simple One-Line introduction to the Project/History</p>
			      </div>
			    </div>
			    <div className="row">
			        <div className="col-md-8 col-md-offset-2">
			          <h4><em>Briefly introduce what polyglots are and why they are cool.</em> {introParagraph}</h4>
			        </div>
			    </div>
			    <br/>
			    <div className="row">
			    	<Summary content={summaries.sources} more={false} open={this.showInfo} close={this.hideInfo} show={this.state.open}/>
			    	<Summary content={summaries.translations} more={false} open={this.showInfo} close={this.hideInfo} show={this.state.open}/>
			    	<Summary content={summaries.tools} more={false} open={this.showInfo} close={this.hideInfo} show={this.state.open}/>
			     </div>
					  <div className="row center-block text-center m20">
					  	<span className="glyphicon glyphicon-chevron-down down" onTouchTap={this.jumpToHash}></span>
					  </div>
			  </div>
		  </div>
	        )
	}
};

export default IntroExhib;
