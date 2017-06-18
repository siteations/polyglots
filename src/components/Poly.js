import React, { Component } from 'react';
import {imagePanels } from '../copy/content.js';
import Inner from './Inner.js';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Poly extends Component {
		constructor(props) {
        super(props);
				this.state = {
					size:[0,0],
					open: false,
					position: '5%',
					element: {},

				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
		}

  componentDidMount() {
      window.addEventListener("resize", this.refSizeP);
      this.refSize();
  }

  refSize(e){
  	if (e){e.preventDefault();};
  	let sele = window.document.getElementById('size').attributes[0].ownerElement;
  	let width = sele.clientWidth;
  	let height = sele.clientHeight;
  	this.setState({size:[width, height]});
  }

  showInfo(e){
  	console.log(e.target.id);
  	this.setState({open: true});
  	if (this.state.position==='5%'){this.setState({position:'55%'})};
  	if (this.state.position==='55%'){this.setState({position:'5%'})};
  }

  hideInfo(e){
  	this.setState({open: false});
  }

  render() {
  	var hash = this.props.info.location.hash;
  	if (hash !== '#inter-Comp' && hash !== '#inter-Antwerp' && hash !== '#inter-London' ){hash='#inter-Comp'};
  	var id=hash.replace('#','');
  	var key = id.split('-')[1];
  	var data = {};
  	if (key){var data = imagePanels[key.toLowerCase()]};
    console.log('at poly ', id, this.state.size, key);

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.hideInfo}
        className = {'appareo'}
      />,
    ];

	return (
	   <div className="col-xs-10 col-xs-offset-1" id={id} ref="sizeP" >
				<div className="page bshadowed m20 layer1" id='size' >
					<div className="row">
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Magnify View</button>
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Collect Resources to Print</button>
						</div>
						<div className="col-md-4 text-center">
							<h1 className="underline">{data.title}</h1>
						</div>
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Interaction Guide (Annotated)</button>
						</div>
					</div>
					<div className="text-center bshadowInner layerwhite" style={{borderRadius: '5px'}}>
						<svg width={this.state.size[0]*.97} height={this.state.size[0]*.52} viewBox={`0 0 ${this.state.size[0]*.97} ${this.state.size[0]*.52}`}>
							<Inner w={this.state.size[0]*.97} h={this.state.size[0]*.52} data={data} on={this.showInfo} off={this.hideInfo}/>
						</svg>
						<Dialog
			          title={data.title}
			          actions={actions}
			          modal={true}
			          open={this.state.open}
			          contentStyle={{width:'40%', maxWidth: 'none', marginLeft: `${this.state.position}` }}
			        >
			          panel info here.
			        </Dialog>
					</div>
					<div className="row center-block text-center m20">
					  	<span className="glyphicon glyphicon-chevron-down down" onTouchTap={this.jumpToHash}></span>
					 </div>

				</div>
		</div>
	        )
	}
};

export default Poly;
