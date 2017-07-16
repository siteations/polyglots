import React, { Component } from 'react';
import Summary from'./Summary';
import scrollToElement from 'scroll-to-element';
import {eachPanel, sourceList, fullSourcePrimary, fullSourceSecondary, sourceListBib} from '../copy/panels.js';

import {bib} from '../copy/content.js';


const About = (props)=>{

	return (
	 <div>
	  <div className="row hidden-print">
			<div className="col-xs-10 col-xs-offset-1" id="about">
				<div className="page bshadowed layer1 m20" >

					<div className="row ">
						<div className="col-md-8 col-md-offset-2">
					<h2 className="texta">About This Site</h2>
					<p>Cathedrals of Print is part of <em>Religious Change, 1450-1700</em>, the Newberry Library's year-long, multidisciplinary project exploring how religion and print challenged authority, upended society, and made the medieval world modern.<br/><br/>This site was built with Create-React-App by <a href="https://www.siteations.com" target="_blank">Siteations Studio</a>.</p>
					<h2 className="underline">ABOUT CATHEDRALS OF PRINT</h2>

					<p>Religion and print were hinges on which the medieval world opened into the modern. Before and after Martin Luther challenged the Roman Church 500 years ago, quests for spiritual renewal or ecclesiastical reform shook traditional sources of authority across Europe and the Americas. Competing ideas about religious beliefs and practices spread far and wide-especially by the printed word-at a pace power structures had difficulty controlling. These ideas awakened new vistas on life, while provoking hope and fear, anxiety and certainty, protest and violence. The winds of religious change profoundly affected people in all walks of life. They also transformed print in ways that continue to influence how we form and share our beliefs. <br/><br/> During 2017-18, the Newberry is exploring religious change through a gallery exhibition, <em>Religious Change and Print, 1450-1700</em> (on view September 14-December 30, 2017), an array of digital resources, and a series of programs for scholars, students, and the general public.<br/><br/> <em>Religious Change, 1450-1700</em> is generously supported by a grant from The Andrew W. Mellon Foundation.<br/><br/></p>
					<h4 className="texta">For more information, please visit our project page: <a href="http://www.newberry.org/religious-change" target="_blank"><em>Religious Change, 1450-1700</em></a></h4>
					</div>
					</div>

			  </div>
		  </div>
		</div>
	</div>
	        )
};

export default About;
