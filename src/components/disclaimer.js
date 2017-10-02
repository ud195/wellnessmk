import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/secondarytheme';
import ls from 'local-storage';
import FlatButton from 'material-ui/FlatButton';
import { Card,  CardText, CardActions, CardTitle} from 'material-ui/Card';
import {withRouter} from "react-router-dom";
import {Table, Row, Col} from 'antd';
import ButtonIconAgree from 'material-ui/svg-icons/action/done-all';
import ButtonIconNotAgreed from 'material-ui/svg-icons/content/clear';
import { green600, blue300, indigo900 } from 'material-ui/styles/colors';


class disclaimer extends Component {

  submit()
  {
    ls.set("disclaimer_accepted", true);
    this.props.history.push("/test");
  }


  toHome(e)
  {
    e.preventDefault();
    this.props.history.push('/welcome');    
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
          <CardTitle titleColor={indigo900} style={{ textAlign: "center", background: "#ffffff" }} title="Agreement" />
            <CardText style={{ textAlign: "center"}}>
                <h3> 
                    Some text ....
                    <br/>
                    some more text ....
                    <br/>
                    even more text .....
                    <br/>
                    omg that's too much text !!
                </h3>

            </CardText>
            <div>
            
              <div>
            <CardActions style={{alignSelf : "center", textAlign: "center"}} >
              <div>
              <FlatButton icon={<ButtonIconAgree/>}  label="I agree" secondary = {true} onClick={this.submit.bind(this)}/>
              </div>
              <div style={{marginTop: 15}}>
              <FlatButton  label="I don't agree" primary={true} icon={<ButtonIconNotAgreed />} onClick={this.toHome.bind(this)} />
              </div>
            </CardActions>
            </div>

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

export default withRouter(disclaimer);