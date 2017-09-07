import React from 'react';
import '../css/question.css';
import * as firebase from 'firebase';
import { Button, Radio, Rate, Icon, Progress, Slider, Card, Tag, Spin, Table, Steps, Row, Col, Tabs } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default class question extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            score: null,
            loading: true
        }

    }

    radiochanged(event)
    {
        console.log(`radio checked:${event.target.value}`);
    }

    componentWillMount() {
        let DBRef = firebase.database().ref('question').orderByKey().limitToLast(100);

        DBRef.on('child_added', snapshot => {
            let question = {
                text: snapshot.val().text, id: snapshot.key, answer1: snapshot.val().answer1,
                answer2: snapshot.val().answer2, answer3: snapshot.val().answer3, answer4: snapshot.val().answer4,
                answer5: snapshot.val().answer5, valueanswer1: snapshot.val().valueanswer1, valueanswer2: snapshot.val().valueanswer2,
                valueanswer5: snapshot.val().valueanswer5, valueanswer4: snapshot.val().valueanswer4, valueanswer3: snapshot.val().valueanswer3,
                category: snapshot.val().category,
            };
            this.setState({ questions: [question].concat(this.state.questions) });
        })

        console.log(this.state);
    }

    componentDidMount() {
        this.setState({loading: false});
        console.log(this.state.questions);
    }

    render() {

        const CardStyle = { background: '#003366', color: '#ffffff' };
        const radioStyle = { display: 'block', height: '40px', lineHeight: '20px', };

        return (

            <div className='empty'>
                <h1 className='text'>  Optimal Level Test  </h1>
                <div style={{marginTop: 15, marginBottom: 15}}>
                <Spin size="large" spinning={this.state.loading}/>
                </div>
                <ul>
                    {
                        this.state.questions.map(question =>
                                <div key={question.id}>
                            <div style={{ marginTop: 30 }}>
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={20}>
                                            <Card title={question.text}
                                                extra={<Tag color="#f50">{question.category}</Tag>} style={CardStyle}>
                                                    <Row>
                                                        <Col span={1}>
                                                        <Radio onChange={this.radiochanged.bind(this)} style={radioStyle} value={question.valueanswer1}></Radio>
                                                        </Col>
                                                        <Col span={15}>
                                                            <h4 className="card-text"> {question.answer1} </h4>
                                                        </Col>
                                                        <Col span={8}>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={1}>
                                                        <Radio onChange={this.radiochanged.bind(this)} style={radioStyle} value={question.valueanswer2}></Radio>
                                                        </Col>
                                                        <Col span={15}>
                                                            <h4 className="card-text"> {question.answer2} </h4>
                                                        </Col>
                                                        <Col span={8}>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={1}>
                                                        <Radio style={radioStyle} value={question.valueanswer3}></Radio>
                                                        </Col>
                                                        <Col span={15}>
                                                            <h4 className="card-text"> {question.answer3} </h4>
                                                        </Col>
                                                        <Col span={8}>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={1}>
                                                        <Radio style={radioStyle} value={question.valueanswer4}></Radio>
                                                        </Col>
                                                        <Col span={15}>
                                                            <h4 className="card-text"> {question.answer4} </h4>
                                                        </Col>
                                                        <Col span={8}>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={1}>
                                                        <Radio style={radioStyle} value={question.valueanswer5}></Radio>
                                                        </Col>
                                                        <Col span={15}>
                                                            <h4 className="card-text"> {question.answer5} </h4>
                                                        </Col>
                                                        <Col span={8}>
                                                        </Col>
                                                    </Row>

                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        )
                    }
                </ul>
            </div>

        );

    }

}