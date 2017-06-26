import React, { Component } from 'react';
import {summaries, introParagraph, lorem1, lorem2, lorem3} from '../copy/content.js';

export const IntroImg = props => {
	// let content = props.content;
	// let more = props.more;

	return (
			        <div className="col-md-4 m20">
			        	<img src="./London-header.jpg" style={{width:'95%', margin: '2%' , borderRadius: '5px'}} />
			        	<p>caption: tbd</p>

			        {/*
			          <h4><em>Details information or other?</em></h4>
			          <ul>
			          	<li>this</li>
			          	<li>that</li>
			          	<li>etc</li>
			          </ul>
			        */}

			        </div>
	        )
};

export const IntroText = props => {
	let content = props.content;
	let texts = props.texts;
	// let more = props.more;

	return (
					<div className="col-md-8 bshadowlite layerfullwhite">
			        <h2 className="underline">{content}</h2>
			          <h4><em>{texts[0]}</em></h4>
			          <div className="col-md-6 m20">
			          	<p className='plarge'> {texts[1]} </p><br/>
			          </div>
			          <div className="col-md-6 m20">
			          	<p className='plarge'> {texts[2]}</p><br/>
			          	{/*<ul>
			          	<li>biblio or other</li>
			          	<li>in this space</li>
			          	<li>etc</li>
			          	</ul>*/}
			          </div>
			    		</div>
	        )
};
