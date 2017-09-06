import React, { Component } from 'react';
import { DatePicker } from 'antd';
import logo from './logo.svg';
import appLogo from './WMK.png'
import './css/App.css';
import { Button, Radio, Icon, Progress, Slider, Card, Spin, Table, Steps, Row, Col, Tabs } from 'antd';
import Test from './components/test';
import Question from './components/question';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;

class App extends Component {


  render() {

    const radioStyle = { display: 'block', height: '40px', lineHeight: '20px',};
    const CardStyle = { background: '#000000', color: '#ffffff'};
    const progressstyle = { color: '#000000', background: '#ffffff' };
    const tab1Style = { background: '#ffffff', padding: '30px', color: '#000000' };
    const tabStyle = { background: '#000000', color: '#ffffff' };

    return (

      <div className="App">

        <div className="App-header">
          <img size="small" src={appLogo} className="App-logo" alt="logo" />
          <h2 className="header-text" >Wellness MasterKeys</h2>

        </div>
        <Tabs style={tabStyle} defaultActiveKey="1" >
          <TabPane style={tab1Style} tab="Test 1 " key="1">
            <Row>
              <Col span={4}></Col>
              <Col span={14}>
                <Progress style={progressstyle} percent={10} status="active" />
              </Col>
              <Col span={4}><Spin /></Col>
            </Row>

            <div style={{ marginTop: 30 }}>

              <Row>
                <Col span={2}></Col>
                <Col span={20}>

                  <Card title="How affected are you when you watch an emotional movie ?"
                    extra={<Button type="primary" icon="forward" size="small">Next</Button>} style={CardStyle}>


                    <Row>
                      <Col span={1}>
                        <Radio style={radioStyle} value={5}></Radio>
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
            <Question/>
            <Card>
              <img src={appLogo} className="App LOGO" alt="Wellness MasterKeys" />
            </Card>

          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <Test />

          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
