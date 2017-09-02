import React, { Component } from 'react';
import { DatePicker } from 'antd';
import logo from './logo.svg';
import appLogo from './WMK_LOGO.png'
import './App.css';
import { Tabs } from 'antd';
import * as firebase from 'firebase';
import { Row, Col } from 'antd';
import { Table, Steps } from 'antd';
import { Button, Radio, Icon, Progress, Card, Spin } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10,
      current: 0

    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref('speed');

    rootRef.on('child_added', snap => {
      this.setState(
        {
          speed: snap.val()
        }
      );
    });

  }




  render() {

    const radioStyle = {    display: 'block',
      height: '40px',
      lineHeight: '20px',
    };

    const CardStyle =
      {
        background: '#003366',
      };



    return (

      <div className="App">

        <div className="App-header">
          <img size="small" src={logo} className="App-logo" alt="logo" />
          <h2 className="header-text" >Wellness MasterKeys</h2>
        </div>

        <Tabs defaultActiveKey="1" >
          <TabPane tab="Test 1 " key="1">

            <Row>
              <Col span={4}></Col>
              <Col span={14}>
                  <Progress percent={10} status="active" />
              </Col>
              <Col span={4}><Spin/></Col>
            </Row>

            <div style={{ marginTop: 30 }}>

              <Row>
                <Col span={2}></Col>
                <Col span={20}>

                  <Card title="How affected are you when you watch an emotional movie ?"
                    extra={<Button type="primary" icon="forward" size="small">Next</Button>} style={CardStyle}>


                    <Row>
                      <Col span={1}>
                        <Radio style={radioStyle} value="a"></Radio>
                      </Col>
                      <Col span={15}>
                        <h4 className="card-text"> very affected emotionally </h4>
                      </Col>
                      <Col span={8}>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={1}>
                        <Radio style={radioStyle} value="b"></Radio>
                      </Col>
                      <Col span={15}>
                        <h4 className="card-text"> somewhat affected emotionally </h4>
                      </Col>
                      <Col span={8}>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={1}>
                        <Radio style={radioStyle} value="c"></Radio>
                      </Col>
                      <Col span={15}>
                        <h4 className="card-text"> sometimes affected and sometimes not depending on the day </h4>
                      </Col>
                      <Col span={8}>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={1}>
                        <Radio style={radioStyle} value="d"></Radio>
                      </Col>
                      <Col span={15}>
                        <h4 className="card-text"> rarely emotionally affected </h4>
                      </Col>
                      <Col span={8}>
                      </Col>
                    </Row>



                  </Card>
                </Col>

              </Row>


            </div>

          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <Card>
            </Card>

          </TabPane>




          <TabPane tab="Tab 3" key="3">
            Questionnaire 3
             <div> {this.state.speed} </div>

            <img src={appLogo} className="App LOGO" alt="Wellness MasterKeys" />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
