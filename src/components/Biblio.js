import React, { Component } from 'react';
import Summary from'./Summary';
import scrollToElement from 'scroll-to-element';
import {eachPanel, sourceList, fullSourcePrimary, fullSourceSecondary, sourceListBib} from '../copy/panels.js';

import {bib} from '../copy/content.js';


class Biblio extends Component {
	constructor(props) {
        super(props);
				this.state = {
					open: false,
					print: false,
				};
				this.showInfo=this.showInfo.bind(this);
				this.hideInfo=this.hideInfo.bind(this);
				this.print=this.print.bind(this);
				this.printMain=this.printMain.bind(this);
		}

	showInfo(){

  	this.setState({open: true});
  }

  hideInfo(){
  	this.setState({open: false});
  }

  print(){
  	this.setState({print:true});
  	document.getElementById('printList').attributes[0].value = "row hidden";
  	document.getElementById('printPoly').attributes[0].value = "row hidden-print";
    document.getElementById('printIntro').attributes[0].value = "row hidden-print";
  	document.getElementById('printBiblio').attributes[0].value = "row visible-print-block";
  	//console.log(other);
  	window.print();
  }

  printMain(){
  	document.getElementById('printList').attributes[0].value = "row hidden";
  	document.getElementById('printPoly').attributes[0].value = "row ";
    document.getElementById('printIntro').attributes[0].value = "row ";
  	document.getElementById('printBiblio').attributes[0].value = "row hidden";
  	//console.log(other);
  	window.print();

  }

  render() {
  	var list=this.props.list
  	var printClass=(this.state.print)? 'visible-print-block': 'hidden';

	return (
	 <div>
	  <div className="row hidden-print">
			<div className="col-xs-10 col-xs-offset-1" id="biblio">
				<div className="page bshadowed layer1" >

					<div className="row">
						<div className="col-md-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={this.printMain}>Print Introduction <br/> (Excluding Polyglot Spreads/Modals)</button>
						</div>
						<div className="col-md-5 text-center">
							<h2 className="underline">Bibliography for Polyglot Resource</h2>
						</div>
						<div className="col-md-3 text-center">
							<button className={`btn btn-default texta `} role="button" onTouchTap={this.print}>Print Bibliography <br/> (Secondary + Primary Sources)</button>
						</div>
					</div>
					<div className="row ">
						<div className="col-md-8 col-md-offset-2">
						<h4 className="m20 "><span style={{fontSize:'1.25em',lineHeight: '1.5em'}}>This resource is meant to be illustrative, not comprehensive. The resources shown here represent only the tip of the iceberg of the historical and cultural significance of the great polyglot Bibles. The works listed here will serve as a starting point for a deeper investigation of these great books and their impact.</span></h4>
						</div>
					</div>

					<div className="row ">
						<div className="col-md-8 col-md-offset-2">
						<ul>
						{bib &&
							bib.map(entry=> <li className="plarge "><span className="bold">{entry.author}</span>{entry.article}<em>{entry.title}</em>{entry.location}<br/><br/></li>)
						}
						</ul>
						</div>
					</div>

					<div className="row" >
						<div className="col-md-8 col-md-offset-2">
							<h2 className="m20 text-center underline">Primary Sources at the Newberry</h2>
			        <ul>
							{sourceList &&
								sourceList.map(item => {
									if (item.link !== null){
                		return <li className="plarge" ><span className="bold">{item.creator}</span><em> {item.textTitle}</em> {item.place} {item.year} <br/><ul><li><a href={item.link} target="_blank" className="notBold">catalog link</a></li><li><a href={item.link} target="_blank" className="notBold">internet archive image</a></li></ul><br/></li>
                	} else {
                		return <li className="plarge" > <span className="bold">{item.creator}</span><em> {item.textTitle}</em> {item.place} {item.year}<br/></li>
                	}
                })
							}
							</ul>
							<br/>
						</div>
					</div>
			  </div>
		  </div>
		</div>
		<div className="row" id="printBiblio">
		<div className="row">
						<div className="col-md-8 col-md-offset-2">
						<ul>
						{bib &&
							bib.map(entry=> <li className="plarge "><span className="bold">{entry.author}</span>{entry.article}<em>{entry.title}</em>{entry.location}<br/><br/></li>)
						}
						</ul>
						</div>
					</div>

		<div className="row" >
						<div className="col-md-8 col-md-offset-2">
							<h2 className="m20 text-center underline">Primary Sources at the Newberry</h2>
			        <ul>
							{sourceList &&
								sourceList.map(item => {
									if (item.link !== null){
                		return <li className="plarge" ><span className="bold">{item.creator}</span><em> {item.textTitle}</em> {item.place} {item.year} <br/><ul><li><a href={item.link} target="_blank" className="notBold">catalog link</a></li><li><a href={item.link} target="_blank" className="notBold">internet archive image</a></li></ul><br/></li>
                	} else {
                		return <li className="plarge" > <span className="bold">{item.creator}</span><em> {item.textTitle}</em> {item.place} {item.year}<br/></li>
                	}
                })
							}
							</ul>
							<br/>
						</div>
					</div>
		</div>

	</div>
	        )
	}
};

export default Biblio;
