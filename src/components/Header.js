import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: '100%',

  },
};

const items = {
	home: [
		{ value: 1, text: 'Polyglot Productions' },//href, label
		{ value: 2, text: 'Religious Change' },//href, label,
		{ value: 3, text: 'Newberry Library' },//href, label,
	],
	intro: [
		{ value: 1, text: 'An Introduction to Polyglot Bibles' },
		{ value: 2, text: '“The Age of Polyglots” (1502-1657)' },//href, label
		{ value: 3, text: 'Introducing: Complutensian (1517)' },//href, label,
		{ value: 4, text: 'Introducing: Antwerp (1571)' },//href, label,
		{ value: 5, text: 'Introducing: London (1657)' },//href, label,
	],
	interact: [
		{ value: 1, text: 'Interact with Polyglot Bibles' },
		{ value: 2, text: 'Complutensian (1517) Samples' },//href, label,
		{ value: 3, text: 'Antwerp (1571) Samples' },//href, label,
		{ value: 4, text: 'London (1657) Samples' },//href, label,
	],
	biblio: [
		{ value: 1, text: 'Bibliography of Polyglot Materials' },//href, label
		{ value: 2, text: 'Secondary Polyglot Readings' },//href, label,
		{ value: 3, text: 'Newberry Catalog' },//href, label,
	],
}

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	home: 1,
    	intro: 1,
    	interact: 1,
    	biblio: 1,
    };
  }

  handleChangeHome = (event, index, value) => this.setState({home:value});
  handleChangeIntro = (event, index, value) => this.setState({intro:value});
  handleChangeInteract = (event, index, value) => this.setState({interact:value});
  handleChangeBiblio = (event, index, value) => this.setState({biblio: value});

  render() {
    console.log(this.props.location);

	return (
	     <div className="navbar navbar-fixed-top">
	      <div className="col-xs-10 col-xs-offset-1" style={{marginTop: '20px'}}>

		        <div className="col-md-3">
			        <DropDownMenu
				          value={this.state.home}
				          onChange={this.handleChangeHome}
				          style={styles.customWidth}
				          autoWidth={false}
				        >
				        {items.home &&
				        	items.home.map(home=> <MenuItem value={home.value} primaryText={home.text} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-md-3">
		        	<DropDownMenu
				          value={this.state.intro}
				          onChange={this.handleChangeIntro}
				          style={styles.customWidth}
				          autoWidth={false}
				        >
				        {items.intro &&
				        	items.intro.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-md-3">
		        	<DropDownMenu
				          value={this.state.interact}
				          onChange={this.handleChangeInteract}
				          style={styles.customWidth}
				          autoWidth={false}
				        >
				        {items.interact &&
				        	items.interact.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-md-3">
		        	<DropDownMenu
				          value={this.state.biblio}
				          onChange={this.handleChangeBiblio}
				          style={styles.customWidth}
				          autoWidth={false}
				        >
				        {items.biblio &&
				        	items.biblio.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} />)
				        }
			        </DropDownMenu>
		        </div>


	      </div>
	    </div>
	        )
	}
};

export default Header;
