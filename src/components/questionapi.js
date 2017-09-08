import React from 'react';
import '../css/questionapi.css';
import * as firebase from 'firebase';
import { Button, message, Menu, Radio, Rate, Icon, Progress, Slider, Card, Tag, Spin, Table, Steps, Row, Select, Col, Tabs, Input } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const SubMenu = Menu.SubMenu;
const Option = Select.Option;

export default class questionapi extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            text: null,
            answer1: null,
            valueanswer1: null,
            answer2: null,
            valueanswer2: null,
            answer3: null,
            valueanswer3: null,
            answer4: null,
            valueanswer4: null,
            answer5: null,
            valueanswer5: null,
            category: null
        }

        this.questionobj =
        {
            text: null,
            answer1: null,
            valueanswer1: null,
            answer2: null,
            valueanswer2: null,
            answer3: null,
            valueanswer3: null,
            answer4: null,
            valueanswer4: null,
            answer5: null,
            valueanswer5: null,
            category: null
        }
    }

    submitForm() {
        // add Firebase binding
        this.questionobj.text = this.state.text;
        this.questionobj.answer1 = this.state.answer1;
        this.questionobj.valueanswer1 = this.state.valueanswer1;
        this.questionobj.answer2 = this.state.answer2;
        this.questionobj.valueanswer2 = this.state.valueanswer2;
        this.questionobj.answer3 = this.state.answer3;
        this.questionobj.valueanswer3 = this.state.valueanswer3;
        this.questionobj.answer4 = this.state.answer4;
        this.questionobj.valueanswer4 = this.state.valueanswer4;
        this.questionobj.answer5 = this.state.answer5;
        this.questionobj.valueanswer5 = this.state.valueanswer5;
        this.questionobj.category = this.state.category;
        firebase.database().ref('question').push(this.questionobj);
        message.success('Changes Saved', 5);
    };

    componentWillMount() {

    }

    componentDidMount() {
        console.log(this.state.questions);
    }

    questionChange(event) {
        this.setState({ text: event.target.value });
    }

    answer1Change(event) {
        this.setState({ answer1: event.target.value });
    }

    valueanswer1Change(event) {
        this.setState({ valueanswer1: event.target.value });
    }

    answer2Change(event) {
        this.setState({ answer2: event.target.value });
    }

    valueanswer2Change(event) {
        this.setState({ valueanswer2: event.target.value });
    }
  
    answer3Change(event) {
        this.setState({ answer3: event.target.value });
    }

    valueanswer3Change(event) {
        this.setState({ valueanswer3: event.target.value });
    }

    answer4Change(event) {
        this.setState({ answer4: event.target.value });
    }

    valueanswer4Change(event) {
        this.setState({ valueanswer4: event.target.value });
    }

    answer5Change(event) {
        this.setState({ answer5: event.target.value });
    }

    valueanswer5Change(event) {
        this.setState({ valueanswer5: event.target.value });
    }

    categoryChange(event) {
        this.setState({ category: event.target.value });
    }

    render() {

        const CardStyle = { background: '#003366', color: '#ffffff' };
        const radioStyle = { display: 'block', height: '40px', lineHeight: '20px', };

        return (
            <div className="text" style={{ marginTop: 5 }}>

                <Row>
                    <Col span={2}>
                    </Col>

                    <Col span={20}>
                        <div style={{ marginBottom: 5, marginTop: 10 }}>
                            <h4>
                                <Tag color='#2db7f5'>Add Questions</Tag>
                                <div style={{ marginTop: 15, marginBottom: 20 }}>
                                    <Input
                                        placeholder="Enter Question"
                                        prefix={<Icon type="question-circle-o" />}
                                        onChange={this.questionChange.bind(this)}
                                    />                    
                                </div>
                            </h4>
                        </div>
                    </Col>

                    <Col span={2}>
                    </Col>
                </Row>

                <Row>
                    <Col span={2}>
                    </Col>

                    <Col span={20}>
                        <div style={{ marginBottom: 10, marginTop: 5 }}>
                                <div style={{ marginTop: 15, marginBottom: 20 }}>
                                    <Input
                                        placeholder="Enter category"
                                        prefix={<Icon type="tags-o" />}
                                        onChange={this.categoryChange.bind(this)}
                                    />                    
                                </div>
                        </div>
                    </Col>

                    <Col span={2}>
                    </Col>
                </Row>

                <div style={{marginBottom: 15}}>
                <Row>
                    <Col span={2}>

                    </Col>

                    <Col span={20}>
                        <Row>
                            <Col span={11}>

                                <Input
                                    placeholder="Enter answer 1"
                                    prefix={<Icon type="check-square-o" />}
                                    onChange={this.answer1Change.bind(this)}
                                />
                            </Col>
                            <Col span={1} />

                            <Col span={8}>
                                <Radio.Group onChange={this.valueanswer1Change.bind(this)} value="default">
                                    <Radio.Button value="-10">-10</Radio.Button>
                                    <Radio.Button value="-5">-5</Radio.Button>
                                    <Radio.Button value="0">0</Radio.Button>
                                    <Radio.Button value="5">5</Radio.Button>
                                    <Radio.Button value="10">10</Radio.Button>
                                </Radio.Group>
                            </Col>
                        </Row>

                        <div style={{ marginTop: 10 }}>
                            <Row>
                                <Col span={11}>

                                    <Input
                                        placeholder="Enter answer 2"
                                        prefix={<Icon type="check-square-o" />}
                                        onChange={this.answer2Change.bind(this)}
                                    />
                                </Col>
                                <Col span={1} />

                                <Col span={8}>
                                    <Radio.Group onChange={this.valueanswer2Change.bind(this)} value="default">
                                        <Radio.Button value="-10">-10</Radio.Button>
                                        <Radio.Button value="-5">-5</Radio.Button>
                                        <Radio.Button value="0">0</Radio.Button>
                                        <Radio.Button value="5">5</Radio.Button>
                                        <Radio.Button value="10">10</Radio.Button>
                                    </Radio.Group>
                                </Col>
                            </Row>
                        </div>

                        <div style={{ marginTop: 10 }}>
                            <Row>
                                <Col span={11}>

                                    <Input
                                        placeholder="Enter answer 3"
                                        prefix={<Icon type="check-square-o" />}
                                        onChange={this.answer3Change.bind(this)}
                                    />
                                </Col>
                                <Col span={1} />

                                <Col span={8}>
                                    <Radio.Group onChange={this.valueanswer3Change.bind(this)} value="default">
                                        <Radio.Button value="-10">-10</Radio.Button>
                                        <Radio.Button value="-5">-5</Radio.Button>
                                        <Radio.Button value="0">0</Radio.Button>
                                        <Radio.Button value="5">5</Radio.Button>
                                        <Radio.Button value="10">10</Radio.Button>
                                    </Radio.Group>
                                </Col>
                            </Row>
                        </div>

                        <div style={{ marginTop: 10 }}>
                            <Row>
                                <Col span={11}>

                                    <Input
                                        placeholder="Enter answer 4"
                                        prefix={<Icon type="check-square-o" />}
                                        onChange={this.answer4Change.bind(this)}
                                    />
                                </Col>
                                <Col span={1} />

                                <Col span={8}>
                                    <Radio.Group onChange={this.valueanswer4Change.bind(this)} value="default">
                                        <Radio.Button value="-10">-10</Radio.Button>
                                        <Radio.Button value="-5">-5</Radio.Button>
                                        <Radio.Button value="0">0</Radio.Button>
                                        <Radio.Button value="5">5</Radio.Button>
                                        <Radio.Button value="10">10</Radio.Button>
                                    </Radio.Group>
                                </Col>
                            </Row>
                        </div>

                        <div style={{ marginTop: 10 }}>
                            <Row>
                                <Col span={11}>

                                    <Input
                                        placeholder="Enter answer 5"
                                        prefix={<Icon type="check-square-o" />}
                                        onChange={this.answer5Change.bind(this)}
                                    />
                                </Col>
                                <Col span={1} />

                                <Col span={8}>
                                    <Radio.Group onChange={this.valueanswer5Change.bind(this)} value="default">
                                        <Radio.Button value="-10">-10</Radio.Button>
                                        <Radio.Button value="-5">-5</Radio.Button>
                                        <Radio.Button value="0">0</Radio.Button>
                                        <Radio.Button value="5">5</Radio.Button>
                                        <Radio.Button value="10">10</Radio.Button>
                                    </Radio.Group>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
                </div>


                <div style={{ marginTop: 15, marginBottom: 15 }}>
                    <Button ghost onClick={this.submitForm.bind(this)}>save</Button>
                </div>

            </div>
        );

    }

}