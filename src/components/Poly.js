import React, { Component } from 'react';
import {imagePanels} from '../copy/content.js';
import {eachPanel, sourceList, fullSourcePrimary, fullSourceSecondary} from '../copy/panels.js';
import InnerSVG from './Inner.js';
import PanelContents from './PanelContents.js';
import { LayerToggleCol, LayerToggle, LayerListCol } from './LayerToggle.js';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {ReactSVGPanZoom, TOOL_NONE, TOOL_AUTO, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT} from 'react-svg-pan-zoom';
import InstructionContents from './InstructionContents.js';


class Poly extends Component {
		constructor(props) {
        super(props);
				this.state = {
					size:[0,0],
          width: 1040,
          height: 700,
					open: false,
					open2: false,
					position: '5%',
					element: ' ',
					sources: true,
					translations: true,
					tools: true,
					list: [],
					mag:false,
          zoom: false,
          modal: '40%',
          instructions: false,
          hash: this.props.info.location.hash,
				};
        this.print=this.print.bind(this);
        this.empty=this.empty.bind(this);
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
        this.showInstruct=this.showInstruct.bind(this);
        this.hideInstruct=this.hideInstruct.bind(this);
				this.showInfo2=this.showInfo2.bind(this);
				this.hideInfo2=this.hideInfo2.bind(this);
				this.listAdd = this.listAdd.bind(this);
				this.toggleAll = this.toggleAll.bind(this);
				this.toggleLayer=this.toggleLayer.bind(this);
        this.magToggle = this.magToggle.bind(this);
        this.pushHash=this.pushHash.bind(this);
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
  	this.setState({size:[width, height], width: (width*.95), height: (width*.9*.69)});
    if (width<992){
      this.setState({modal: '90%'});

    }
  }

  showInfo(e){
  	console.log(this.state.width);

  	this.setState({open: true, element: e.target.id, position: e.target.attributes.value.value });
    if (this.state.width<992){
      this.setState({position: '5%'});
    }
  }

  hideInfo(){
  	this.setState({open: false});
  }

  hideInstruct(){
    this.setState({instructions: false});
  }

  showInstruct(){
    this.setState({instructions: true});
  }


  print(){
    this.setState({open: false});
    // console.log(document.getElementById('printList').attributes);
    // document.getElementById('printList').attributes[0].value = "row visible-print-block";
    window.print();
  }

  empty(){
    this.setState({list: []});
  }

  showInfo2(){
  	console.log('should show');
  	this.setState({open2: true});
  }

  hideInfo2(e){
  	this.setState({open2: false});
  }

  magToggle(e){
    let zoom = this.state.zoom;

    if (zoom){

      let obj = {};
      obj.sources = obj.translations = obj.tools = true;
      obj.zoom = false;
      this.setState(obj);

    } else {

      let obj = {};
      obj.sources = obj.translations = obj.tools = false;
      obj.zoom = true;
      this.setState(obj);
    }

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
  	let item = e.target.value; //this is the id
  	let sourceObj = sourceList.filter(source=> source.id===item)[0];
  	let arr = this.state.list;
  	let arr2 = arr.concat(fullSourcePrimary(sourceObj), fullSourceSecondary(sourceObj));
  	this.setState({list:arr2});
  	console.log(this.state.list, arr2);
  }

  pushHash(e){
    let hash=e.target.value;
    this.props.info.history.push(hash);

  }

  render() {

  	var hash = this.props.info.location.hash;

    var options = {
      '#inter-Comp':'comp',
      '#inter-Antwerp': 'antwerp',
      '#inter-London': 'london',
    }

    let exAntwerp = window.document.getElementById('inter-Antwerp');
    let exComp = window.document.getElementById('inter-Comp');
    let exLondon = window.document.getElementById('inter-London');
    let otherHashes = (hash !== '#inter-Comp' && hash !== '#inter-Antwerp' && hash !== '#inter-London' );
    console.log('series sampled', exAntwerp, exComp, exLondon, otherHashes);

  	if (otherHashes && ( !exAntwerp && !exComp && !exLondon)){
      hash='#inter-Comp'
    } else if (otherHashes && exComp){
      hash='#inter-Comp'
    } else if (otherHashes && exAntwerp){
      hash='#inter-Antwerp'
    } else if (otherHashes && exLondon){
      hash='#inter-London'
    };

    var id = hash.replace('#', '');
  	var key = options[hash];

  	var data = {}, panel = {}, overlays = [], details = [];

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

        const actionsInstruct = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.hideInstruct}
        className = {'appareo'}
      />,
    ];

	return (
    <div id="spreads">


    <div className="row visible-print-block" id="printList">
          <h3 className="m20">The Great Polyglot: Texts of Interest</h3>
                <ul>
                {this.state.list &&
                  this.state.list.map(item => {
                    return (
                     <li className="black m10" > {item.text}
                     <ul>
                     {item.link &&
                      <li><a href={item.link} target="blank">Newberry Catalog Link</a></li>
                     }
                     {item.onlineArchive &&
                      <li><a href={item.onlineArchive} target="blank">CARLI digital collections</a></li>
                     }
                     </ul>
                     </li>
                      )
                  })
                }
                {this.state.list.length<1 &&
                  <li>select panel text to get started</li>
                }
                </ul>
    </div>

	   <div className="row hidden-print">
	   <div className="col-xs-1" >
	   	<LayerListCol list={this.state.list} open={this.state.open2} action={{hideInfo: this.hideInfo2, showInfo:this.showInfo2, clearInfo: this.empty, printInfo: this.print}} zoom={this.state.zoom} />
	   </div>
	   <div className="col-xs-10" id={id} ref="sizeP" >
				<div className="page bshadowed m20 layer1" id='size' >
            <div className="row hidden-print text-center" style={{marginBottom:'20px'}}>
              <h2 className="underline">Compare Polyglot Editions</h2>
              <button className="btn btn-default texta m10s" onTouchTap={this.pushHash} value="#inter-Comp">Complutensian (1517)</button>
              <button className="btn btn-default texta m10s" onTouchTap={this.pushHash} value="#inter-Antwerp">Antwerp (1571)</button>
              <button className="btn btn-default texta m10s" onTouchTap={this.pushHash} value="#inter-London">London (1657)</button>
            </div>

					<div className="row">
						<div className="col-md-4 text-center">
              <button className={`btn btn-default texta `} onTouchTap={this.showInstruct}>Select Texts (to print)</button>
						</div>
						<div className="col-md-4 text-center">
							<h2 className="underline">{data.title}</h2>
						</div>
						<div className="col-md-4 text-center">
							<button className={`btn btn-default texta `} onTouchTap={this.magToggle}>Pan & Magnify View</button>
						</div>
            <Dialog
                actions={actionsInstruct}
                modal={true}
                open={this.state.instructions}
                autoScrollBodyContent={true}
                contentStyle={{width:`70%`, maxWidth: 'none', marginLeft: `15%` }}
              >
                <InstructionContents />
            </Dialog>

					</div>
					<div className="text-center center-block" style={{borderRadius: '5px', width:`${this.state.size[0]*.9}` }}>
          {this.state.zoom===true &&
            <div>
          <ReactSVGPanZoom
            width={this.state.width}
            height={this.state.height}
            onClick={event => console.log(event.x, event.y, event.originalEvent)}
            background="#f4f2ec"
            SVGBackground="#f4f2ec"
            preventPanOutside="true"
            >

						<svg width={this.state.width} height={this.state.height} viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
							<InnerSVG w={this.state.size[0]*.9} h={this.state.size[0]*.9*.69} overlays={overlays} details={details} on={this.showInfo} select={key.toLowerCase()} />
						</svg>
            </ReactSVGPanZoom>

						<Dialog
			          actions={actions}
			          modal={true}
			          open={this.state.open}
			          autoScrollBodyContent={true}
			          contentStyle={{width:`${this.state.modal}`, maxWidth: 'none', marginLeft: `${this.state.position}` }}
			        >
			          <PanelContents element={element} action={this.listAdd}/>
			        </Dialog>
              </div>
          }
          {this.state.zoom===false &&
            <div>
            <svg width={this.state.width} height={this.state.height} viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
              <InnerSVG w={this.state.size[0]*.9} h={this.state.size[0]*.9*.69} overlays={overlays} details={details} on={this.showInfo} select={key.toLowerCase()} />
            </svg>

            <Dialog
                actions={actions}
                modal={true}
                open={this.state.open}
                autoScrollBodyContent={true}
                contentStyle={{width:`${this.state.modal}`, maxWidth: 'none', marginLeft: `${this.state.position}` }}
              >
                <PanelContents element={element} action={this.listAdd}/>
              </Dialog>
              </div>
          }
					</div>
					<LayerToggle all={this.toggleAll} action={this.toggleLayer} zoom={this.state.zoom}/>

					<div className="row center-block text-center m20">
					  	<span className="glyphicon glyphicon-chevron-down down" onTouchTap={this.jumpToHash}></span>
					</div>
				</div>
		</div>

		<LayerToggleCol all={this.toggleAll} action={this.toggleLayer} zoom={this.state.zoom} />
	</div>
</div>
	        )
	}
};

export default Poly;
