import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

const PanelContents = props => {
	let element = props.element;
	let action = props.action;
	var color='';
	if (element.category==='sources'){ color = 'red' };
	if (element.category==='translations'){ color = 'blue' };
	if (element.category==='tool'){ color = 'green' };

	if (element.src===''){element.src='./London-header.jpg'}; //placeholder photo

	return (
	     <div className="row" >
		     <div className="col-md-1">
			     <h1><span className={`fa fa-circle ${color}`}> </span></h1>
		     </div>

		     <div className="col-md-10">
			     	<h1 className="black">{element.title}</h1><br/>
			     	<Divider inset={false} />

			     	<h3>{element.subtitle}</h3>
			     	<img src={element.src} style={{width: '95%', margin: '2%' , borderRadius: '5px'}} />
			     	<h5 className="black" >{element.creator}, <em>{element.textTitle}</em>, {element.place}, {element.year} </h5>
			     	<p>{element.narrative}</p><br/>

			     	<Divider inset={false} />
			     	<h5 className="red"><a href={element.link} className="red" target="_blank" >Find at the Newberry (new page)</a></h5>
			     	<button className="btn btn-default texta" value={[element.creator, element.textTitle, element.place, element.year, element.link].join(',')} onTouchTap={e=>action(e)} >Add to List of Titles</button>
	     	</div>
	    </div>
	        )
};

export default PanelContents;
