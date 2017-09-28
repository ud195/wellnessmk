import React from 'react';
import '../css/question.css';
import * as firebase from 'firebase';
import { Table, Row, Col, Spin } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { green600, blue300 } from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/done';
import ActionFavoriteBorder from 'material-ui/svg-icons/social/mood';
import FlatButton from 'material-ui/FlatButton';


export default class question extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            score: null,
            loading: true,
            radio: 0,
            radio2: null,
            radio3: null,
            radio4: null,
            radio5: null,
            scores : []
        }

    }


    radio1changed(event) {
        this.setState({ radio: event.target.value });
        console.log('radio :' + this.state.radio);
    }


    radio2changed(event) {
        this.setState({ radio2: event.target.value });
        console.log(`radio 2 : ` + this.state.radio2);
    }


    radio3changed(event) {
        this.setState({ radio3: event.target.value });
        console.log(`radio 3 : ` + this.state.radio3);
    }


    radio4changed(event) {
        this.setState({ radio4: event.target.defaultSelected });
        console.log(`radio 4 : ` + this.state.radio4);
    }


    radio5changed(event) {
        this.setState({ radio5: event.target.defaultSelected });
        console.log(`radio 5 : ` + this.state.radio5);
    }

    doSomething()
    {
        this.state.questions.map( question => 
        {
            if(question.id != this.state.username)
            {
                
                console.log(">>  username Match ");
                this.setState({ usernameMatch: true });
            }
            else
            {                
                this.setState({usernameMatch : false});                                
                console.log(">>  user name not match");     
            }
        }
    );
    }

    componentWillMount() {
        this.DBRef = firebase.database().ref('question').orderByKey().limitToLast(100);

        this.DBRef.on('child_added', snapshot => {
            let question = {
                text: snapshot.val().text, id: snapshot.key, answer1: snapshot.val().answer1,
                answer2: snapshot.val().answer2, answer3: snapshot.val().answer3, answer4: snapshot.val().answer4,
                answer5: snapshot.val().answer5, valueanswer1: snapshot.val().valueanswer1, valueanswer2: snapshot.val().valueanswer2,
                valueanswer5: snapshot.val().valueanswer5, valueanswer4: snapshot.val().valueanswer4, valueanswer3: snapshot.val().valueanswer3,
                category: snapshot.val().category,
            };
            this.setState({ questions: [question].concat(this.state.questions) });
        })

        console.log(this.state + "DB Mounted");
    }

    componentDidMount() {
        this.setState({ loading: false });
        console.log(this.state.questions);
    }

    componentWillUnmount() {
        this.DBRef.off();
        console.log("unmounted DB");
    }

    render() {

        const CardStyle = { background: '#003366', color: '#ffffff' };
        const radioStyle = { display: 'block', height: '40px', lineHeight: '20px', };

        return (

            <div className='empty'>

                <div style={{ marginTop: 15, marginBottom: 15 }}>
                    <Spin size="large" spinning={this.state.loading} />
                </div>
                <ul>
                    {
                        this.state.questions.map(question =>
                            <div key={question.id}>
                                <div style={{ marginTop: 30 }}>
                                    <Row>
                                        <Col span={3}/>
                                        <Col span={18}>
                                            <MuiThemeProvider muiTheme={muitheme}>
                                                <Card style={{ color: blue300 }}>
                                                    <CardTitle titleColor=" #ffffff" style={{background: " #b30000"}} title={question.text} subtitle={question.category} />
                                                    <CardText>
                                                        <RadioButtonGroup name="shipSpeed" defaultSelected="not-selected"
                                                        onChange={this.radio1changed.bind(this)}>
                                                            <RadioButton
                                                                value="-10"
                                                                label="answer 1"
                                                                checkedIcon={<ActionFavorite style={{color: "#F44336"}} />}
                                                            />
                                                            <RadioButton
                                                            onChange={this.radio2changed.bind(this)}
                                                                value="-5"
                                                                label="answer 2"
                                                                checkedIcon={<ActionFavoriteBorder />}
                                                            />

                                                            <RadioButton
                                                            onChange={this.radio3changed.bind(this)}
                                                                value="0"
                                                                label="answer 3"
                                                            />

                                                            <RadioButton
                                                            onChange={this.radio4changed.bind(this)}
                                                                value="5"
                                                                label="answer 4"
                                                            />
                                                            <RadioButton
                                                            onChange={this.radio5changed.bind(this)}
                                                                value="10"
                                                                label="answer 5"
                                                            />
                                                        </RadioButtonGroup>
                                                    </CardText>

                                                </Card>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col span={3}/>
                                    </Row>
                                </div>
                            </div>
                        )
                    }
                </ul>

                Score : {this.state.score}

            </div>

        );

    }

}