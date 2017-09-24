import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Button, Rate, Radio, Icon, Progress, Slider, Card, Spin, Table, Steps, Row, Col, Tabs } from 'antd';
import Question  from '../components/question';
import QuestionsAPI from '../components/questionapi';
import Mood from '../components/mood';
  import CardTest from '../components/cardTest';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;


class home extends Component {


  render() {

    const radioStyle = { display: 'block', height: '40px', lineHeight: '20px', };
    const CardStyle = { background: '#000000', color: '#ffffff' };
    const progressstyle = { color: '#000000', background: '#ffffff' };
    const tab1Style = { background: '#ffffff', padding: '30px', color: '#000000' };
    const tab2Style = {background:  '#ff9900',  color: '#000000'};
    const tabStyle = { background: '#000000', color: '#ffffff' };

    return (

      <div>
        <Tabs style={tabStyle} defaultActiveKey="1" >
        
          <TabPane style={tab1Style} tab="Mood" key="1">
            <Mood/>
          </TabPane>

          <TabPane style={tab1Style} tab="Test" key="2">
            <Question />
          </TabPane>

          <TabPane tab="Admin" key="3" style={tab1Style}>
            <QuestionsAPI/>
            <CardTest/>

          </TabPane>

        </Tabs>
      </div>
    );
  }
}

export default home;
