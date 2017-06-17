import React, { Component } from 'react';
import {summaries, introParagraph, lorem1, lorem2, lorem3} from '../copy/content.js';

export const IntroImg = props => {
	// let content = props.content;
	// let more = props.more;

	return (
			        <div className="col-md-4 m20">
			        	<img src="./London-header.jpg" style={{width:'95%', margin: '2%' , borderRadius: '5px'}} />
			        	<p>caption: </p>

			          <h4><em>Details information or other?</em></h4>
			          <ul>
			          	<li>this</li>
			          	<li>that</li>
			          	<li>etc</li>
			          </ul>

			        </div>
	        )
};

export const IntroText = props => {
	let content = props.content;
	// let more = props.more;

	return (
					<div className="col-md-8 bshadowlite layerfullwhite">
			        <h2 className="underline">{content}</h2>
			          <h4><em>Describe the economic, scholarly, and religious conditions that created the “age of polyglots” (1502-1657).</em></h4>
			          <div className="col-md-6 m20">
			          	<h4>section header</h4>
			          	<p> {lorem1} </p><br/>
			          	<h4>section header</h4>
			          	<p> {lorem3} </p>
			          </div>
			          <div className="col-md-6 m20">
			          	<h4>section header</h4>
			          	<p> {lorem2}</p><br/>
			          	<ul>
			          	<li>biblio or other</li>
			          	<li>in this space</li>
			          	<li>etc</li>
			          </ul>
			          </div>
			    		</div>
	        )
};
