import React, { Component } from 'react';
import { DatePicker } from 'antd';
import logo from './logo.svg';
import appLogo from './WMK_LOGO.png'
import './App.css';
import { Tabs } from 'antd';
import * as firebase from 'firebase';
import { Row, Col } from 'antd';
import { Table, Steps } from 'antd';
import { Card } from 'antd';
import { Button, Radio, Icon } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Step = Steps.Step;

const TabPane = Tabs.TabPane;

class App extends Component {

constructor()
{
  super();
  this.state = {
    speed : 10

  }
}

componentDidMount()
{
  const rootRef = firebase.database().ref('speed');

  rootRef.on('child_added', snap =>
  {
    this.setState(
      { 
        speed: snap.val()
      }
      );
  });

}




  render() {

   const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };


    return (
      <div className="App">
        <div className="App-header">
          <img size="small" src={logo} className="App-logo" alt="logo" />
          <h2>Wellness MasterKeys React JS App</h2>
        </div>

    <Tabs defaultActiveKey="1" >
    <TabPane tab="Test 1 " key="1">

     <Row>
       <Col span={2}></Col>
      <Col span={20}>
        <Steps>
          <Step status="finish" title="Reaction To Stimuli" icon={<Icon type="user" />} />
          <Step status="finish" title="Engagement in conversation" icon={<Icon type="solution" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>
      </Col>
       <Col span={2}></Col>
     </Row>     


    <Row>

<Col span={2}></Col>
<Col span={18}>
   <Card title="How affected are you when you watch an emotional movie ?" extra={ 
     
                <Button type="primary" icon="forward" size="small">Next</Button>
 } 
        
        style={{ width: 1000 }}>                   
     
     <Row>
       <Col span={2}> </Col>
       <Col span={20}>
       </Col>
       <Col span={2}> </Col>
     </Row>     

     <Row align="top" justify="end">
       <Col span={2}></Col>
     <Col span={18}>
     <Row>
     <Col span={2}> 
      <Radio style={radioStyle} value="a"></Radio>
     </Col>
      <Col span={18}>
     <h4>very affected emotionally</h4>
     </Col>
      </Row>

           <Row>
     <Col span={2}> 
      <Radio style={radioStyle} value="b"></Radio>
     </Col>
      <Col span={18}>
     <h4>somewhat affected emotionally</h4>
     </Col>
      </Row>

           <Row>
     <Col span={2}> 
      <Radio style={radioStyle} value="c"></Radio>
     </Col>
      <Col span={18}>
     <h4>sometimes affected and sometimes not depending on the day</h4>
     </Col>
      </Row>

           <Row>
     <Col span={2}> 
      <Radio style={radioStyle} value="d"></Radio>
     </Col>
      <Col span={18}>
     <h4>rarely emotionally affected</h4>
     </Col>
      </Row>
     <Col span={2}></Col>
     
     </Col>

     </Row>
     </Card>
      </Col>
       <Col span={2}></Col>
     </Row>



    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Questionnaire 2
      <div>
        
        </div>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Questionnaire 3
             <div> {this.state.speed} </div>

          <img src = {appLogo} className = "App LOGO" alt = "Wellness MasterKeys"/>
</TabPane>
  </Tabs>
      </div>
    );
  }
}

export default App;
