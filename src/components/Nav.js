import React, { Component } from 'react';


class Nav extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	home: 1,
    	intro: 1,

    };
  }

  handleChangeNewberry = (event, index, value) => this.setState({home:value});
  handleChangeReligious = (event, index, value) => this.setState({intro:value});


  render() {
    //console.log(this.props.location);

	return (
	     <div className="navbarG navbar-fixed-top bshadowed layerwhite">
	      <div className="col-xs-10 col-xs-offset-1" style={{marginTop: '20px'}}>
	      	{/*<nav role="navigation" className="heading_font navbar navbar-inverse navbar-fixed-top desktop_view" id="scalarheader">
          <span property="dcterms:title" content="Polyglot Bibles">
          </span>
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-text navbar-left pull-left title_wrapper visible-xs" style={{maxWidth: "768px"}}><a id="" href="" className="navbar-link book-title" tabIndex="1" style={{wordWrap: 'break-word'}}>Cathedrals of Print</a></span>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#ScalarHeaderMenu"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
              </button>
          </div>
        {/* add in visibility conditions
          <div className="collapse navbar-collapse" id="ScalarHeaderMenu" style={{transform: 'translateX(0px)'}}>
            <ul className="nav navbar-nav" id="ScalarHeaderMenuLeft">
              <li className="visible-xs"><a href="" className="headerIcon" id="homeLink" tabIndex="2"><span className="visible-xs">Home Page</span></a></li>
              <li className="dropdown mainMenu ready"><a className="dropdown-toggle headerIcon" data-toggle="dropdown" role="button" aria-expanded="false" tabindex="3"><span className="visible-xs">Table of Contents</span></a>
                <ul className="dropdown-menu mainMenuDropdown" role="menu" style={{transform: 'translateX(0px)'}}>
                <div id="mainMenuInside"><div className="close"><span className="menuIcon closeIcon"></span>
                </div>
                <li className="header"><h2 className="heading_font heading_weight clearboth">Table of Contents</h2></li>
                <li className="top hidden-xs home_link static"><a href="http://publications.newberry.org/dig/italian-broadsides/" tabindex="-1"><span className="menuIcon" id="homeIcon"></span>Home</a></li>
                <li className="body">
                  <ol>
                  <li><a href="http://publications.newberry.org/dig/italian-broadsides/introduction" tabindex="-1">Introduction</a><a className="expand" title="Explore Introduction" tabindex="-1"><span className="menuIcon rightArrowIcon pull-right"></span></a></li>
                  <li><a href="http://publications.newberry.org/dig/italian-broadsides/guide-to-research" tabindex="-1">Guide to Research</a><a className="expand" title="Explore Guide to Research" tabindex="-1"><span className="menuIcon rightArrowIcon pull-right"></span></a></li>
                  <li><a href="http://publications.newberry.org/dig/italian-broadsides/downloads-and-bibliography" tabindex="-1">Downloads and Bibliography</a><a className="expand" title="Explore Downloads and Bibliography" tabindex="-1"><span className="menuIcon rightArrowIcon pull-right"></span></a></li>
                  <li><a href="http://publications.newberry.org/dig/italian-broadsides/about" tabindex="-1">About This Site</a><a className="expand" title="Explore About This Site" tabindex="-1"><span className="menuIcon rightArrowIcon pull-right"></span></a></li>
                  </ol>
                </li>
              </div>
              <div id="mainMenuSubmenus" className="tocMenu">
              </div>
            </ul>
          </li>
        </ul>
        <span className="navbar-text navbar-left pull-left title_wrapper hidden-xs overflowCalculated" id="desktopTitleWrapper" style={{maxWwidth: '768px', wordWrap: 'break-word'}}><span className="hidden-xs author_text">   <a href="https://www.newberry.org" style={{color: '#ffffff'}} tabindex="4" ><img src="./newberry_logo_dark.png" style={{height:'40px', width:'130px'}} /></a></span><a id="" href="" className="navbar-link appareo" tabindex="5">Cathedrals of Print</a></span>
      <div className="rc-banner"><a href="https://www.newberry.org/religious-change&#10;" target="_blank"><img src="http://publications.newberry.org/dig/rcp/media/religious-change-new-header-5-12.jpg&#10;" style={{width:'100%'}} /></a>
      </div>
    </div>
  </div>
</nav>*/}
	      </div>
	    </div>
	        )
	}
};

export default Nav;
