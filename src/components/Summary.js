import React, { Component } from 'react';

const Summary = props => {
	let content = props.content;
	let more = props.more;

	return (
	        <div className="col-md-4">
	        	<div className="bshadowedlite layerwhite">
		          <h2 className="underline">{content.title}</h2>
		          <span>
		          	<img className="thumb25" src={content.src1} />
		          	<img className="thumb25" src={content.src2} />
		          	<img className="thumb25" src={content.src3} />
		          	<img className="thumb25" src={content.src4} />
		          </span>
		          <p>{content.body}</p>
		          <p><a className="btn btn-default" href="#a" role="button">Learn more »</a></p>
		          {more &&
		          	<p>additional explanation here (conditional visibility, by button above) {content.more}</p>
		          }
		          </div>
		        </div>
	        )
}

export default Summary;
