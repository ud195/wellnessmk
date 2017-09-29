import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import ls from 'local-storage';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card,  CardText} from 'material-ui/Card';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {Table, Row, Col} from 'antd';

class welcome extends Component {

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

  navigate(e)
  {
    e.preventDefault();

    this.props.history.push('/test');    
  }

  toCardtest(e)
  {
    e.preventDefault();

    this.props.history.push('/test');    
  }



  render() {

    return (
      
      <div>
        <MuiThemeProvider muiTheme={muitheme}>
          <div>
            <Row>
              <Col span= {4} />
              <Col span = {16}>
          <Card>
            <CardText>
          <div>
            {
               this.state.namecheck == true  ? 
              
               <div> 
                 <div style={{marginBottom : 15}}>
                <Row>
                 <Col span={2}/>
                 <Col span={20}> 
                  <div style={{background : "#FF0000	", textAlign: "center"}}>
                    <h3 > welcome  {this.state.name} :D</h3>
                    <br/>
                    <h3> Wellness master Keys program has been designed </h3>
                  </div>
                 </Col>
                 <Col span={2} />
                </Row>
                </div>
                <Row>
                  <Col span={8} />
                  <Col span={8}>
                   <FlatButton style={{textAlign:"center"}} label="Nope that's not me" primary={true} onClick={this.clear.bind(this)} />
                  </Col>
                  <Col span={8} />
                </Row>
                <div style={{marginTop : 15}}>
                <Row>
                  <Col span={6} />
                  <Col span={12}>
                   <FlatButton  label="Let's get started" secondary = {true} onClick={this.toCardtest.bind(this)}/>
                  </Col>
                  <Col span={6}/>
                </Row>
                </div>
               </div>

               : 

               <div> 
               <h4 style={{color: "#28B463"}}> Hello What is your name ? </h4>
               <TextField  id="name_input" value={this.state.name || ''}
               onChange={this.namechange.bind(this)}/>
               <br />
               <FlatButton  label="yep that's me" primary={true} onClick={this.submit.bind(this)} />
               </div> 
            }
          <div>
            </div>
          </div>
            </CardText>
          </Card>
          </Col>
          <Col span={4}/>
          </Row>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(welcome);