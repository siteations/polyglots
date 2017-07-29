import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Summary = props => {
	let content = props.content;
	let show = props.show;
	let open = props.open;
	let close = props.close;
	let color = props.color;

	const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={close}
        className = {'appareo'}
      />,
  ];


	return (
	        <div className="col-md-4">
	        	<div className="bshadowedlite layerwhite fullheight">
		          <h2 className="underline">{content.title} <span className={`fa fa-circle ${color} fa-sm`}> </span></h2>
		          <span>
		          	<img className="thumb25" src={content.src1} />
		          	<img className="thumb25" src={content.src2} />
		          	<img className="thumb25" src={content.src3} />
		          	<img className="thumb25" src={content.src4} />
		          </span>
		          <p className="plarge">{content.body}</p>
		          <p className={`plarge ${color}`}>On the <a href="#spreads"><span className={color} >Polyglot spreads below</span></a>, {`areas outlined in ${color} or with a ${color} dot show polyglot ${content.title.toLowerCase()}.`}</p>

		          <br/>
							<Dialog
			          actions={actions}
			          modal={true}
			          open={show}
			          contentStyle={{width:'70%', maxWidth: 'none' }}
			          autoScrollBodyContent={true}
			        >
			        <div className="row">
			        	<div className="col-md-5 m20">
			        	</div>
			        	<div className="col-md-6">
			        		<h2 className="black underline">Text to Come?</h2>
			          	{content.more}
			          </div>
			        </div>
			        </Dialog>
		          </div>
		        </div>
	        )
}

export default Summary;
