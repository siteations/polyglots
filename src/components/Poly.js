import React, { Component } from 'react';
import {imagePanels} from '../copy/content.js';
import {eachPanel} from '../copy/panels.js';
import InnerSVG from './Inner.js';
import PanelContents from './PanelContents.js';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Poly extends Component {
		constructor(props) {
        super(props);
				this.state = {
					size:[0,0],
					open: false,
					position: '5%',
					element: ' ',
					sources: true,
					translations: true,
					tools: true,
					list: [],
				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
				this.listAdd = this.listAdd.bind(this);
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
  	this.setState({open: true, element: e.target.id });
  	if (this.state.position==='5%'){this.setState({position:'55%'})};
  	if (this.state.position==='55%'){this.setState({position:'5%'})};
  }

  hideInfo(e){
  	this.setState({open: false});
  }

  toggleLayer(e){
  	let type = e.target.value, curr = !this.state[type];
  	let obj={};
  	obj[type] = curr;
  	this.setState(obj);
  	console.log(this.state);
  }

  toggleAll(e){
  	let obj = {};
  	obj.sources = !this.state.sources;
  	obj.translations = !this.state.sources;
  	obj.tools = !this.state.sources;
  	this.setState(obj);
  	console.log(this.state);
  }

  listAdd(e){
  	let item = e.target.value;
  	let arr = this.state.list;
  	let arr2 = arr.concat([item]);
  	this.setState({list:arr2});
  }

  render() {

  	var hash = this.props.info.location.hash;
  	if (hash !== '#inter-Comp' && hash !== '#inter-Antwerp' && hash !== '#inter-London' ){hash='#inter-Comp'};
  	var id=hash.replace('#','');
  	var key = id.split('-')[1];
  	var data = {}, panel ={}, overlays = [], details = [];

  	if (key){
  		data = imagePanels[key.toLowerCase()]; //image underlays/points for svg.
  		panel = eachPanel[key.toLowerCase()];
  		if (this.state.sources) { overlays = overlays.concat(data.sources); details = details.concat(panel.sources) };
  		if (this.state.translations) { overlays = overlays.concat(data.translations); details = details.concat(panel.translations) };
  		if (this.state.tools) { overlays = overlays.concat(data.tools); details = details.concat(panel.tools) };
  	};

  	var element={};
  	if (this.state.element !==''){
  		var elementArr = details.filter(detail => detail.id === this.state.element);
  		(elementArr.length>0)? element = elementArr[0] : element = {};
  	}

    console.log('at poly ', overlays, details, element, this.state);

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
							<h2 className="underline">{data.title}</h2>
						</div>
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} href="" role="button" onTouchTap="">Interaction Guide (Annotated)</button>
						</div>
					</div>
					<div className="text-center bshadowInner layerwhite" style={{borderRadius: '5px'}}>
						<svg width={this.state.size[0]*.97} height={this.state.size[0]*.52} viewBox={`0 0 ${this.state.size[0]*.97} ${this.state.size[0]*.52}`}>
							<InnerSVG w={this.state.size[0]*.97} h={this.state.size[0]*.52} overlays={overlays} details={details} on={this.showInfo} />
						</svg>
						<Dialog
			          actions={actions}
			          modal={true}
			          open={this.state.open}
			          autoScrollBodyContent={true}
			          contentStyle={{width:'40%', maxWidth: 'none', marginLeft: `${this.state.position}` }}
			        >
			          <PanelContents element={element} action={this.listAdd}/>
			        </Dialog>
					</div>
					<div className="row text-center">
						<h3> ~ Toggle Annotations ~ </h3>
						<div className="col-md-3">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleAll(e)}>
							<span className="fa fa-circle red"> </span> <span className="fa fa-circle blue"> </span> <span className="fa fa-circle green"> </span> All Layers <span className="fa fa-circle-o red"> </span> <span className="fa fa-circle-o blue"> </span> <span className="fa fa-circle-o green"> </span>
							</button>
						</div>
						<div className="col-md-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='sources' >
								<span className="fa fa-circle red"> </span> Sources <span className="fa fa-circle-o red"> </span>
							</button>
						</div>
						<div className="col-md-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='translations' >
								<span className="fa fa-circle blue"> </span> Translations <span className="fa fa-circle-o blue"> </span>
							</button>
						</div>
						<div className="col-md-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={e=>this.toggleLayer(e)} value='tools' >
								<span className="fa fa-circle yellow"> </span> Tools <span className="fa fa-circle-o yellow"> </span>
							</button>
						</div>
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
