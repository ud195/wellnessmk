import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import muitheme2 from '../muistyle/secondarytheme';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {withRouter} from "react-router-dom";

const home = <FontIcon className="material-icons">event_seat</FontIcon>;
const about = <FontIcon className="material-icons">format_shapes</FontIcon>;
const help = <FontIcon className="material-icons">live_help</FontIcon>;
const admin = <FontIcon className="material-icons">vpn_key</FontIcon>;

class footer extends Component {

  state = {
    selectedIndex: 0,
  };


  select(index)
  {
    console.log("index" + index);
    if(index === 0)
    {
      console.log("index welcome");      
      this.props.history.push("/welcome");
    }
    else if(index === 1)
    {
      console.log("index about");            
      this.props.history.push("/about");
    }
    else if(index === 2)
    {
      console.log("index help");            
      this.props.history.push("/help");
    }
    else if(index === 3)
    {
      console.log("index admin");            
      this.props.history.push("/admin");
    }
  }


  render() {

    return (
      
      <div style={{marginTop : 15}} className="App">
        <div>
          <MuiThemeProvider muiTheme={muitheme}>
            <div style={{marginBottom: 20}}>
          <Divider/>
          </div>
          </MuiThemeProvider>
          <MuiThemeProvider muiTheme={muitheme2}>
          <div>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Home"
              icon={home}
              onClick={() => this.select(0)}
              />
            <BottomNavigationItem
              label="About"
              icon={about}
              onClick={() => this.select(1)}
              />
            <BottomNavigationItem
              label="Help"
              icon={help}
              onClick={() => this.select(2)}
              />
              <BottomNavigationItem
              label="Admin"
              icon={admin}
              onClick={() => this.select(3)}
              />
        </BottomNavigation>
        <br/>
        <h3 style={{color: "#4700b3"}}> <FontIcon className="material-icons">copyright</FontIcon> Wellness MasterKeys - A Redefine Life Program 2017  </h3>
            </div>
          </MuiThemeProvider>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default withRouter(footer);
