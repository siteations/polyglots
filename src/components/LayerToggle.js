import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export const LayerListCol = (props) => {
	let action = props.action;
	let list = props.list;
	let open = props.open;

	    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={action.hideInfo}
        className = {'appareo'}
      />,
      <FlatButton
        label="Print"
        primary={true}
        onTouchTap={action.printInfo}
        className = {'appareo'}
      />,

    ];

	return (
	  <div className="hidden-md hidden-sm hidden-xs" >
	   			<div className="row m20">
						<h3 className="m20">Select Texts</h3>
							<button className="btn btn-default texta m20 text-center" onTouchTap={action.showInfo}> Show <br/> List </button>
							<button className="btn btn-default texta m20 text-center" onTouchTap={action.clearInfo}> Clear <br/> List </button>
				</div>
					<Dialog
			          actions={actions}
			          modal={true}
			          open={open}
			          autoScrollBodyContent={true}
			          contentStyle={{width:'70%', maxWidth: 'none', paddingTop: '0px', transform: 'translate(0px 0px)'}}
			          style = {{paddingTop: '0px'}}
			          className = "hidden-print"
			        >
			        <div className="">
				        <h3 className="m20">The Great Polyglot: Texts of Interest</h3>
				        <ul>
								{list &&
									list.map(item => {
										return (
									   <li className="black m10" > {item.text}
									   <ul>
									   {item.link &&
									   	<li><a href={item.link} target="blank">{item.link} </a></li>
									   }
									   {item.onlineArchive &&
									   	<li><a href={item.onlineArchive} target="blank">{item.onlineArchive}</a></li>
									   }
									   </ul>
									   </li>
									   	)
									})
								}
								{list.length<1 &&
									<li>select panel text to get started</li>
								}
								</ul>
							</div>
			        </Dialog>
	   </div>
		)
};


export const LayerToggleCol = (props) => {
	let action = props.action;
	let all = props.all;
	console.log('toggles, ', props);

	return (
	  <div className="col-xs-1 hidden-md hidden-sm hidden-xs" >
	   			<div className="row m20">
						<h3 className="m20">Toggle Markup</h3>

							<button className={`btn btn-default btn-block texta m20`} onTouchTap={all} disabled={props.zoom}>
							<span className="fa fa-circle red fa-sm"> </span> <span className="fa fa-circle blue fa-sm"> </span> <span className="fa fa-circle yellow fa-sm"> </span><br/> All Layers
							</button>

							<button className={`btn btn-default btn-block texta  m20`} disabled={props.zoom} onTouchTap={action} value='sources' >
								<span className="fa fa-circle red fa-sm"> </span><br/> Sources
							</button>

							<button className={`btn btn-default btn-block texta  m20`} disabled={props.zoom} onTouchTap={action} value='translations' >
								<span className="fa fa-circle blue fa-sm"> </span><br/> Translations
							</button>

							<button className={`btn btn-default btn-block texta  m20`} disabled={props.zoom} onTouchTap={action} value='tools' >
								<span className="fa fa-circle yellow fa-sm"> </span><br/> Tools
							</button>

					</div>
	   </div>
		)
};

export const LayerToggle = (props) => {
	let action = props.action;
	let all = props.all;

	return (
	        <div className="row text-center visible-md visible-sm visible-xs">
						<h3> ~ Toggle Annotations ~ </h3>
						<div className="col-xs-3">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleAll(e)}>
							<span className="fa fa-circle red"> </span> <span className="fa fa-circle blue"> </span> <span className="fa fa-circle green"> </span><br/> All Layers
							</button>
						</div>
						<div className="col-xs-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='sources' >
								<span className="fa fa-circle red"> </span><br/> Sources
							</button>
						</div>
						<div className="col-xs-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='translations' >
								<span className="fa fa-circle blue"> </span><br/> Translations
							</button>
						</div>
						<div className="col-xs-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='tools' >
								<span className="fa fa-circle yellow"> </span><br/> Tools
							</button>
						</div>
					</div>
		)
};


