import React, { Component } from 'react';
import {IntroImg, IntroText} from'./IntroRows';
import Introduction from './Introduction.js';
import scrollToElement from 'scroll-to-element';

import {summaries, introParagraph, lorem1, intro2, intro3, textIntros} from '../copy/content.js';

class IntroPoly extends Component {
		constructor(props) {
        super(props);
				this.state = {};
				this.jumpToHash=this.jumpToHash.bind(this);
		}

		jumpToHash = (hash) => {
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
			        <h3>The Conditions and Collaborations of Polyglot Bible Creation and Dissemination</h3><br/>
			        <img src="" />
			      </div>
			    </div>
			    <div className="row m20 bshadowedlite layerwhite">
			        <IntroImg images=""/>
			        <IntroText content="Economic, Scholarly, and Religious Conditions" texts={intro2}/>
			    </div>
			    <br/>
			    <div className="row m20 bshadowedlite layerwhite" id="introCollab">
			        <IntroText content="Technical and Interdisciplinary Collaborations" texts={intro3} />
			        <IntroImg images="" />
			    </div>
			    <br/>
			    <div className="row m20 " id="introComp">
			    	<Introduction content={textIntros.comp} loc={this.props.location} action={this.jumpToHash} />
			    	<Introduction content={textIntros.antwerp} loc={this.props.location} action={this.jumpToHash} />
			    	<Introduction content={textIntros.london} loc={this.props.location} action={this.jumpToHash} />
			    </div>
			  </div>
			</div>
	        )
	}
};

export default IntroPoly;
