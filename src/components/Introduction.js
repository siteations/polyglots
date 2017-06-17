import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Introduction extends Component {
	constructor(props) {
        super(props);
				this.state = {
			    open: false,
			    tab: 'none',
			  };
	}

	componentDidMount(){
			this.setState({tab: this.props.content.tab});
	}

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render(){
	let content = this.props.content;

	const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
        className = {'appareo'}
      />,
    ];

	return (
	        <div className="col-md-4" >
	        	<div className={`bshadowedlite layerwhite`}>
		          <h2 className="underline">{content.title}</h2>
		          <span className="center-block">
		          	<img src={content.src1} style={{width:'80%', margin: '2%' , borderRadius: '5px'}} />

		          </span>
		          <p>{content.p1}</p>
		          <button className={`btn btn-default texta `} href="" role="button" onTouchTap={this.handleOpen}>Learn more »</button>
		          <Dialog
			          title={content.title}
			          actions={actions}
			          modal={true}
			          open={this.state.open}
			          contentStyle={{width:'70%', maxWidth: 'none' }}
			        >
			          text establishing history here.
			        </Dialog>

		          </div>
		        </div>
	        )
	}
}

export default Introduction;