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
const creators = <FontIcon className="material-icons">person_pin</FontIcon>;

class footer extends Component {

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});
  
  toHome(e)
  {
    e.preventDefault();
    console.log(this.state.selectedIndex)
    if(this.state.selectedIndex == 0)
    {
      this.props.history.push('/welcome');   
      
    }
    else if(this.state.selectedIndex == 1)
    {
      this.props.history.push('/result');   
      
    }
    else if(this.state.selectedIndex == 2)
    {
      this.props.history.push('/test');   
      
    }
  }

  selectedAbout()
  {
    this.setState({selectedIndex : 2})
  }

  selectedCreators()
  {
    this.setState({selectedIndex : 1})
  }

  
  selectedHome()
  {
    this.setState({selectedIndex : 0})
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
          <BottomNavigation selectedIndex={this.state.selectedIndex} onClick={this.toHome.bind(this)}>
            <BottomNavigationItem
              label="Home"
              icon={home}
              onClick={this.selectedHome.bind(this)}
              />
            <BottomNavigationItem
              label="Creators"
              icon={creators}
              onClick={this.selectedCreators.bind(this)}
              />
            <BottomNavigationItem
              label="About"
              icon={about}
              onClick={this.selectedAbout.bind(this)}
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
