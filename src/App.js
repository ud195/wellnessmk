import React, { Component } from 'react';
import logo from './logo.svg';
import appLogo from './WMK.png'
import apptag from './masterkeys.png'
import './css/App.css';
import Divider from 'material-ui/Divider';
import Welcome from './components/welcome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from './muistyle/maintheme';




class App extends Component {


  render() {

    return (

      <div className="App">
        <div className="App-header">
          <img size="small" src={appLogo} className="App-logo" alt="logo" />
          <div >
            <img size="small" src={apptag} className="App-tag" alt="tag" />
          </div>
        </div>
        <div>
          <MuiThemeProvider muiTheme={muitheme}>
            <div style={{ marginBottom: 20 }}>
              <Divider />
            </div>
          </MuiThemeProvider>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
