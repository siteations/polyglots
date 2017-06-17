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
    console.log(this.props.location);

	return (
	     <div className="navbarG navbar-fixed-top bshadowed">
	      <div className="col-xs-10 col-xs-offset-1" style={{marginTop: '20px'}}>
	      	general logo and religious change graphic here
	      </div>
	    </div>
	        )
	}
};

export default Nav;
