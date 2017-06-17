import React, { Component } from 'react';
import Summary from'./Summary';

import {summaries, introParagraph} from '../copy/content.js';

class IntroPoly extends Component {

  render() {
    console.log(this.props.location);

	return (
	      <div className="col-xs-10 col-xs-offset-1">
				<div className="page bshadowed m20" id="introPoly">
					<div className="">
			      <div className="text-center">
			        <h1>'The Age of Polyglots'</h1>
			        <h2>1502-1657</h2>
			        <h5>Conditions and Collaborations spurring Polyglot Bible Creation and Dissemination</h5><br/>
			        <img src="" />
			      </div>
			    </div>
			    <div className="row">
			        <div className="col-md-6">
			        	<h2>economic, scholarly, and religious conditions</h2>
			        	<img src="./London-header.jpg" style={{width:'60%', margin: '2%' , borderRadius: '5px'}} />
			        	<p>caption: </p>
			        	<div className="col-md-10 col-md-offset-1">
			          <h4><em>•	Describe the economic, scholarly, and religious conditions that created the “age of polyglots” (1502-1657).</em> {introParagraph}</h4>
			          </div>
			        </div>
			        <div className="col-md-6">
			        	<h2>technical, interdisciplinary collaborations</h2>
			        	<img src="./London-header.jpg" style={{width:'60%', margin: '2%' , borderRadius: '5px'}} />
			        	<p>caption: </p>
			        	<div className="col-md-10 col-md-offset-1">
			          <h4><em>•	Describe the economic, scholarly, and religious conditions that created the “age of polyglots” (1502-1657).</em> {introParagraph}</h4>
			          </div>
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

export default IntroPoly;
