import React, { Component } from 'react';
// import '../stylesheets/scalar-annotorious.css';
// import '../stylesheets/scalar-mediaelement.css';
// import '../stylesheets/reset.css';
// import '../stylesheets/bootstrap.min.css';
// import '../stylesheets/bootstrap-accessibility.css';
// import '../stylesheets/common.css';
// import '../stylesheets/responsive.css';
// import '../stylesheets/scalarvis.css';
// import '../stylesheets/header.css';
// import '../stylesheets/screen_print.css';
// import '../stylesheets/font-imports.css';
import '../stylesheets/bootstrap.css';
import '../stylesheets/font-awesome.css';
import '../stylesheets/footer.css';
import '../stylesheets/style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {  deepOrange500, deepOrange900, blueGrey800,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Nav from './Nav.js';
import Header from './Header';
import IntroExhib from './IntroExhib';
import IntroPoly from './IntroPoly';
import Poly from './Poly';
import Biblio from './Biblio';
import About from './About.js';
import {Footer} from './Footer';

const muiTheme = getMuiTheme({
  fontFamily: 'texta',
  palette: {
    primary1Color: deepOrange900,
    primary2Color: deepOrange900,
    primary3Color: grey400,
    accent1Color: deepOrange900,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: deepOrange900,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: deepOrange900,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});


injectTapEventPlugin();

class App extends Component {


  render() {
    console.log(this.props);

    return (
    <MuiThemeProvider muiTheme={muiTheme} >
      <div className="App container-fluid">
      <Header info={this.props}/>
      <Nav />
      <IntroExhib info={this.props} />
      <IntroPoly info={this.props} />
      <Poly info={this.props} />
      <Biblio info={this.props} />
      <About />
      <Footer />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
