import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import scrollToElement from 'scroll-to-element';

import {items} from '../copy/content.js';

const styles = {
  customWidth: {
    width: '100%',
  },
};

class Header extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	home: '#introExhib',
    	intro: '#introPoly',
    	interact: '#inter-Comp',
    	biblio: '#biblio',
    };
  }

  handleChangeHome = (event, index, value) => this.setState({home:value}, this.props.info.history.push(value));
  handleChangeIntro = (event, index, value) => this.setState({intro:value}, this.props.info.history.push(value));
  handleChangeInteract = (event, index, value) => this.setState({interact:value}, this.props.info.history.push(value));
  handleChangeBiblio = (event, index, value) => this.setState({biblio: value}, this.props.info.history.push(value));

  componentDidMount() {
    this.jumpToHash();
  }
  componentDidUpdate() {
    this.jumpToHash();
  }

  jumpToHash = () => {
    const hash = this.props.info.location.hash;
    if (hash) {
      scrollToElement(hash, { offset: -100 });
    }
  }

  render() {
    console.log('history?', this.props.info);

	return (
	     <div className="navbar navbar-fixed-top bshadowed layer1">
	      <div className="col-xs-10 col-xs-offset-1" style={{marginTop: '20px'}}>

		        <div className="col-md-3">
			        <DropDownMenu
				          value={this.state.home}
				          onChange={this.handleChangeHome}
				          style={styles.customWidth}
				          autoWidth={false}
				          className={'appareo'}
				        >
				        {items.home &&
				        	items.home.map(home=> <MenuItem value={home.value} primaryText={home.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-md-3">
		        	<DropDownMenu
				          value={this.state.intro}
				          onChange={this.handleChangeIntro}
				          style={styles.customWidth}
				          autoWidth={false}
				          className={'appareo'}
				        >
				        {items.intro &&
				        	items.intro.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-md-3">
		        	<DropDownMenu
				          value={this.state.interact}
				          onChange={this.handleChangeInteract}
				          style={styles.customWidth}
				          autoWidth={false}
				          className={'appareo'}
				        >
				        {items.interact &&
				        	items.interact.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>

		        <div className="col-md-3">
		        	<DropDownMenu
				          value={this.state.biblio}
				          onChange={this.handleChangeBiblio}
				          style={styles.customWidth}
				          autoWidth={false}
				          className={'appareo'}
				        >
				        {items.biblio &&
				        	items.biblio.map(intro=> <MenuItem value={intro.value} primaryText={intro.text} className={'texta'} />)
				        }
			        </DropDownMenu>
		        </div>


	      </div>
	    </div>
	        )
	}
};

export default Header;
