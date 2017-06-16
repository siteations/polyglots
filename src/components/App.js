import React, { Component } from 'react';
import '../stylesheets/bootstrap.css';
import '../stylesheets/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './Header';
import IntroExhib from './IntroExhib';
import IntroPoly from './IntroPoly';
import Poly from './Poly';

injectTapEventPlugin();

class App extends Component {


  render() {
    console.log(this.props.location);

    return (
    <MuiThemeProvider>
      <div className="App Container-Fluid">
      <Header />
      <IntroExhib />
      <IntroPoly />
      <Poly loc={this.props.location} />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
