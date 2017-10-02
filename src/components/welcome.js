import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import ls from 'local-storage';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card,  CardText, CardActions} from 'material-ui/Card';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {Table, Row, Col} from 'antd';
import ButtonIconForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ButtonIconBackward from 'material-ui/svg-icons/navigation/arrow-back';


class welcome extends Component {

  state={
    name: null,
    namecheck : false,
    disclcheck : false
  }

  componentWillMount()
  {
    this.state.name = ls.get("name");
    this.state.disclcheck = ls.get("disclaimer_accepted");    
    this.checkName();
    console.log("mount ... ");
    this.checkDisclaimer();
  }

  checkDisclaimer()
  {
        
    if(this.state.disclcheck === true && (this.state.name === null || this.state.name === ''))
    {
      ls.set("disclaimer_accepted", false);
      console.log(ls.get("disclaimer_accepted"));
    }

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
    ls.set("disclaimer_accepted" , false);
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

  navigate(e)
  {
    e.preventDefault();
    if(ls.get("disclaimer_accepted") === true)
    {
      this.props.history.push('/test');
    }
    else
    {
      this.props.history.push('/discl');    
    }
  }




  render() {

    return (
      
      <div>
        <MuiThemeProvider muiTheme={muitheme}>
          <div>
            <Row>
              <Col span= {2} />
              <Col span = {20}>
          <Card>
            <CardText>
          <div>
            {
               this.state.namecheck == true  ? 
              
               <div> 
                  <div style={{textAlign: "center"}}>
                    <h2 > Welcome  {this.state.name},</h2>
                    <br/>
                    <h2> Hope you are doing well.  </h2>
                  </div>
               </div>

               : 

               <div style={{textAlign: "center"}}> 
               <h3 style={{color: "#28B463"}}> Hello What is your name ? </h3>
               <TextField  id="name_input" value={this.state.name || ''}
               onChange={this.namechange.bind(this)}/>
               </div> 
            }
          <div>
            </div>
          </div>
            </CardText>
            <div>
            {
              this.state.namecheck == true ?
              <div>
            <CardActions style={{alignSelf : "center", textAlign: "center"}} >
              <div>
              <FlatButton icon={<ButtonIconForward />}  label=" Let's get started" secondary = {true} onClick={this.navigate.bind(this)}/>
              </div>
              <div style={{marginTop: 15}}>
              <FlatButton style={{textAlign:"center"}}  label=" Nope that's not me" primary={true} icon={<ButtonIconBackward />} onClick={this.clear.bind(this)} />
              </div>
            </CardActions>
            </div>
              :
              <div>
              <CardActions style={{alignSelf : "center", textAlign: "center"}} >
              <div>
              <FlatButton  label="yep that's me" primary={true} onClick={this.submit.bind(this)} />
              </div>
            </CardActions>
                </div>
            }
            </div>
          </Card>
          </Col>
          <Col span={2}/>
          </Row>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(welcome);