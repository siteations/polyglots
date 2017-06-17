import React, { Component } from 'react';
import {IntroImg, IntroText} from'./IntroRows';
import Introduction from './Introduction.js';
import scrollToElement from 'scroll-to-element';

import {summaries, introParagraph, lorem1, lorem2, lorem3, textIntros} from '../copy/content.js';

class IntroPoly extends Component {

		jumpToHash = () => {
    const hash = '#interOptions';
    this.props.info.history.push(hash);

    if (hash) {
      scrollToElement(hash, { offset: -120 });
    }
  }

  render() {

	return (
	      <div className="col-xs-10 col-xs-offset-1" id="introPoly">
				<div className="page bshadowed m20 layer1">
					<div className="">
			      <div className="text-center">
			        <h1 className="pjheader">"The Age of Polyglots"</h1>
			        <h2 className="underline">1502-1657</h2>
			        <h3>Conditions and Collaborations spurring Polyglot Bible Creation and Dissemination</h3><br/>
			        <img src="" />
			      </div>
			    </div>
			    <div className="row m20 bshadowedlite layerwhite">
			        <IntroImg />
			        <IntroText content="Economic, Scholarly, and Religious Conditions" />
			    </div>
			    <br/>
			    <div className="row m20 bshadowedlite layerwhite" id="introCollab">
			        <IntroText content="Technical and Interdisciplinary Collaborations" />
			        <IntroImg />
			    </div>
			    <br/>
			    <div className="row m20 " id="introComp">
			    	<Introduction content={textIntros.comp} loc={this.props.location} />
			    	<Introduction content={textIntros.antwerp} loc={this.props.location} />
			    	<Introduction content={textIntros.london} loc={this.props.location} />
			    </div>
					  <div className="row center-block text-center">
					  	<span className="glyphicon glyphicon-chevron-down down" onTouchTap={this.jumpToHash}></span>
					  </div>
			  </div>
			</div>
	        )
	}
};

export default IntroPoly;
