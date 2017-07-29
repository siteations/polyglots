import React, { Component } from 'react';

const instructions = [
		{
			title: 'Switch Between Different Polyglot Spreads',
			tags: ['Complutensian Spread', 'Antwerp Spread', 'London Spread'],
			text: 'To switch between any of the three main polyglot texts, click on the navigation bar - item second from the right - and select the desired text.',
			src: './instructions/01_switchTexts-01.jpg',
		},
		{
			title: 'Pan & Zoom to Inspect Text Details',
			tags: ['Pan', 'Zoom', 'Resize', 'Recenter', 'Disable Overlays'],
			text: 'To pan around the image or zoom in to view details, click on the "Pan & Magnify View" button on the upper left. This will disable and hide the overlaid annotations. On the right side of the image, you will see a panel that offers several tools to interact with the text. In order, you can: (pointer) auto-interactions like mouse-scroll zoom, (4-way arrows) click and drag on text to pan, (+ magnifier) zoom in, (- magnifier) zoom out, and (corner arrows) reset, re-center image to fill the initial frame. To toggle the pan & zoom options off, simply click the "Pan & Magnify View" button again.',
			src: './instructions/02_PanMagnify-01.jpg',
		},
		{
		title: 'Change & Explore the Annotation (categories) on Polyglot Spread',
			tags: ['tools', 'sources', 'translations'],
			text: 'As introduced above, each Polyglot required vast resources and had distributed, discursive impacts. The categories at the right - sources, translations, and tools - are color coded to show where original texts were sourced (red), the translations that they enabled/relied upon (blue) and the literary/philological tools they made possible (yellow). For each of the different texts in the polyglot, you can explore one or multiple of these categories. Toogle the buttons at the right to hide/show categories. Any annotation that is visible will highlight when hovered over and can be clicked to reveal a panel detailing specific resources.',
			src: './instructions/05_hoverOpen-01.jpg',
		},
		{
		title: 'Explore Images in the Detailed Annotation Panels',
			tags: ['details', 'images', 'enlarged pages', 'larger images'],
			text: 'Once an annotation is clicked, a panel will appear describing specific resources and their contribution to the Polyglot. Within this panel, there are several options for interaction. If there are multiple images, simply click on the dots beneath the image to show different pages of the resourse - title page, typical spreads, details of prints or marginalia. If you wish to see a specific image in greater detail, click on the image itself and it will load a larger version into a new tab. If you wish to save an image copy, in this new tab, simply right-click and save the image to your machine.',
			src: './instructions/07_imageClick-01.jpg',
		},
		{
		title: 'Explore Resource Links in the Detailed Annotation Panels',
			tags: ['newberry catalog', 'bibliographic links', 'resource list'],
			text: "If you are interested in a specific resources, as described in the detailed annotation panels, there are several options for saving this information. At the bottom of each panel there is both a link to that resource's listing in the Newberry Catalog and a button to save resource to a list. The catalog link will open in a new tab and allow you to examine the resource's detailed information. The button, when clicked, will save that primary and secondary source to a list, which is accesible at the left when the panel is closed. The list persists, so that you can add the resources from several annotation panels and print them out at the end of your polyglot exploration. See below for the list interactions",
			src: './instructions/10_catalogListlinks-01.jpg',
		},
		{
		title: 'Preview, Print, or Clear the List of Resources Gathered',
			tags: ['clear list', 'print list', 'resource list'],
			text: "If you have saved resources from one or more panels, they will appear in a list which is accessible at the left of the screen. From the bottom of this pop-up list you can either close the preview or print the list. If you click on 'print' this will open the printing dialogue on your home computer. Outside the panel, at the left again, there is also a button to 'clear list' that will remove all existing entries and allow you to start building a custom print-out from scratch. For those interested in printing the full bibliography or saving larger portions of the website text see below.",
			src: './instructions/12_textlists-01.jpg',
		},
		{
		title: 'Preview and Download/Print Bibliography and Website Text (in Acrobat PDF)',
			tags: ['bibliography pdf', 'website pdf', 'resource copies'],
			text: "If you prefer to print the full bibliography of primary and secondary sources or wish to save the website text, please scroll down to the Bibliography pane. On the left of this pane is the button 'Save Site Content'; clicking this will open a pdf of the complete website text (minus bibliography) in a new tab. Save or print as desired. On the right is a button 'Save Bibliography'; clicking this will open a pdf for the complete secondary and primary bibliography, including catalog and internet archive links, in a new tab. Save or print as desired. ",
			src: './instructions/13_bibliobuttons-01.jpg',
		},





]




const InstructionContents = (props)=>{
	return (
	        <div>
	        	<h3 className="black">Collect Personalize List of Texts to Print</h3>
	        	<p>Visitors can download and save the full Polyglot bibliography from the final website section.<br/>To save a personalize a list of research texts  - for later exploration - follow the steps below.<br/><em> These options will only be available during laptop and desktop viewing, outside the gallery.</em></p>
	        	<div className="row">
		        	<div className="col-xs-4">
			        	<ul>
				        	<li> Click on the polglot spread to show a resource, tool, or translation and scroll to the bottom of that descriptive panel. </li><br/>
				        	<li> By clicking the final button, you add both the secondary and primary texts to an evolving list that can be accessed to the left. </li><br/>
				        	<li> After added desired texts (from multiple resources), click on 'show list' to preview and print their bibliographic selections. Click 'clear list' to remove elements and start a new collection.</li>
			        	</ul>
		        	</div>
		        	<div className="col-xs-8">
		        	<img src="" style={{width: '95%', borderRadius: '5px'}}/>
		        	<img src="" style={{width: '95%', borderRadius: '5px'}}/>
		        	</div>

		        </div>


	        	{instructions &&
	        		instructions.map(instruction=>{
	        			return (
			        	<div className="row m20">
			        		<h2 className="black texta underline">{instruction.title}</h2>
			        		<div className="col-xs-3">
			        		<ul>
			        			{instruction.tags &&
			        				instruction.tags.map(tag=>{
			        					return <li>{tag}</li>
			        				})
			        			}
			        		</ul>
			        		<p>{instruction.text}</p>
			        		</div>
			        		<div className="col-xs-9">
			        			<img src={'https://s3.us-east-2.amazonaws.com/polyglot-images/'+instruction.src.replace('./', '')} style={{width: '95%', borderRadius: '5px'}}/>
			        		</div>
			        	</div>
	        			)
	        		})
	        	}

	        </div>
	        )
}

export default InstructionContents;
