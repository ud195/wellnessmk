import React, { Component } from 'react';
import logo from './logo.svg';
import appLogo from './WMK.png'
import apptag from './masterkeys.png'
import './css/App.css';
import Home from './components/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from './muistyle/maintheme';
import Mood from './components/mood';
import Question from './components/question';
import QuestionAPI from './components/questionapi';
import ls from 'local-storage';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';



class App extends Component {

  state={
    name: null,
    namecheck : false
  }

  componentWillMount()
  {
    this.state.name = ls.get("name");
    this.checkName();
  }

  submit()
  {
    ls.set( "name" , this.state.name);
    console.log(this.state.name);
    this.checkName();
  }

  clear()
  {
    ls.remove("name");
    this.setState({ name : "" });
    this.setState({ namecheck : false});
    console.log(" clear" + this.state.name);
  }

  checkName()
  {
    if(this.state.name == "" || this.state.name == null)
    {
      this.setState({namecheck : false });     
    }
    else
    {
      this.setState({namecheck : true });
    }
    console.log("check");
  }

  namechange(e)
  {
    this.setState({name : e.target.value });
  }

  render() {

    return (
      
      <div className="App">
        <div className="App-header">
          <img size="small" src={appLogo} className="App-logo" alt="logo" />
          <div >
          <img size="small" src={apptag} className="App-tag" alt="tag" />
            </div>
        </div>
        <MuiThemeProvider muiTheme={muitheme}>
          <div>
          <div style={{marginTop: 15, marginBottom: 15}}>
            <Divider/>
          </div>
          <div>
            {
               this.state.namecheck == true  ? 
              
               <div> 
               <h3 style={{color : ""}}> welcome  {this.state.name} :D</h3>
               <br/>
               <FlatButton label="Nope that's not me" primary={true} onClick={this.clear.bind(this)} />
               <FlatButton label="Let's get started" secondary = {true} href="/test"/>
               </div>

               : 

               <div> 
               <h4 style={{color: "#28B463"}}> Hi how might i call you, </h4>
               <TextField id="name_input" value={this.state.name || ''}
               onChange={this.namechange.bind(this)}/>
               <br />
               <FlatButton label="yep that's me" primary={true} onClick={this.submit.bind(this)} />
               </div> 

            }
          <div>

            </div>
          </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
