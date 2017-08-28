import React, { Component } from 'react';
import { DatePicker } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wellness MasterKeys React JS App</h2>
        </div>
        <DatePicker/>
          <Tabs defaultActiveKey="1" >
    <TabPane tab="Tab 1" key="1">
    Questionnaire 1 
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Questionnaire 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Questionnaire 3</TabPane>
  </Tabs>
      </div>
    );
  }
}

export default App;
