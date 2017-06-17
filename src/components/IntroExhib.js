import React, { Component } from 'react';
import Summary from'./Summary';

import {summaries, introParagraph} from '../copy/content.js';

class IntroExhib extends Component {

  render() {

	return (
			<div className="col-xs-10 col-xs-offset-1 pre-jumbotron" id="introExhib">
				<div className="page bshadowed" >
					<div className="jumbotron">
			      <div className="text-center">
			        <h1 className="white">Polyglot Productions</h1>
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
			    	<Summary content={summaries.sources} more={false}/>
			    	<Summary content={summaries.translations} more={false}/>
			    	<Summary content={summaries.tools} more={false}/>
			     </div>
					  <div className="row center-block text-center">
					  	<span className="glyphicon glyphicon-chevron-down"></span>
					  </div>
			  </div>
		  </div>
	        )
	}
};

export default IntroExhib;
