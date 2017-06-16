import React, { Component } from 'react';

class IntroExhib extends Component {

  render() {

	return (
			<div className="col-xs-10 col-xs-offset-1 page">
				<div className="jumbotron">
		      <div className="text-center">
		        <h1>Polyglot Productions</h1>
		        <h3>Polyglot Bibles Subtitle here</h3><br/>
		        <p>Simple One-Line introduction to the Project/History</p>
		        <p><a className="btn btn-primary btn-lg" href="#d" role="button">Learn more »</a></p>
		      </div>
		    </div>
		    <div className="row">
		        <div className="col-md-4">
		          <h2>Heading</h2>
		          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		          <p><a className="btn btn-default" href="#a" role="button">View details »</a></p>
		        </div>
		        <div className="col-md-4">
		          <h2>Heading</h2>
		          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
		          <p><a className="btn btn-default" href="#b" role="button">View details »</a></p>
		       </div>
		        <div className="col-md-4">
		          <h2>Heading</h2>
		          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		          <p><a className="btn btn-default" href="#c" role="button">View details »</a></p>
		        </div>
		      </div>
		   </div>
	        )
	}
};

export default IntroExhib;
