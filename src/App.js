import React, { Component } from 'react';
import { DatePicker } from 'antd';
import logo from './logo.svg';
import appLogo from './WMK.png'
import './App.css';
import { Tabs } from 'antd';
import * as firebase from 'firebase';
import { Row, Col } from 'antd';
import { Table, Steps } from 'antd';
import { Button, Radio, Icon, Progress, Slider, Card, Spin } from 'antd';
import  Test  from './components/test';


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      speed: 10,
      current: 0,
      questions: [],
    }

  }

  componentDidMount() {
    const rootRef = firebase.database().ref('question/people1/text');

    rootRef.on('value', snap => {
      this.setState(
        {
          speed: snap.val()
        }
      );
    });

    this.state.questions.map(question => <li key={question.id}>{question.attr.id}</li>)
    console.log("Mount >> " + this.state.questions);

    //    fire.database().ref('messages').push( this.inputEl.value );

  }

  componentWillMount() {

    let questionref = firebase.database().ref('question').orderByKey().limitToLast(100);
    questionref.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let question =
        {
          attr: snapshot.val(),
          id: snapshot.key
        };

      this.setState({ questions: [question].concat(this.state.questions) });
      console.log(this.state.questions);
    })

  }




  render() {

    const radioStyle = {
      display: 'block',
      height: '40px',
      lineHeight: '20px',
    };

    const CardStyle =
      {
        background: '#000000',
        color: '#ffffff'
      };

    const progressstyle = { color: '#000000', background: '#ffffff' };

    const tab1Style = { background: '#ffffff', padding: '30px', color: '#000000' };

    const tabStyle = { background: '#000000', color: '#ffffff' };

    return (

      <div className="App">

        <div className="App-header">
          <img size="small" src={appLogo} className="App-logo" alt="logo" />
          <h2 className="header-text" >Wellness MasterKeys</h2>
      <Test/>

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
            <Card>
              <img src={appLogo} className="App LOGO" alt="Wellness MasterKeys" />
            </Card>

          </TabPane>




          <TabPane tab="Tab 3" key="3">
            Questionnaire 3
             <div> {this.state.speed} </div>

          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
