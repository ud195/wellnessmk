import React from 'react';
import '../css/question.css';
import * as firebase from 'firebase';
import { Table, Row, Col, Spin } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import muitheme2 from '../muistyle/secondarytheme';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { green600, blue300, indigo900 } from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/done';
import ActionFavoriteBorder from 'material-ui/svg-icons/social/mood';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ls from 'local-storage';
import Divider from 'material-ui/Divider';
import {withRouter} from "react-router-dom";

class question extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            score: 0,
            loading: true,
            validate: false,
            name : null
        }

    }



    submit() {
        var references = [];
        var temp = [];
        var check = false;
        var scores = [];
        var t_score = 0;

        console.log(" Count Total : " + this.state.questions.length);
        this.state.questions.map(function (question) {
            references.push(question.id);
            temp.push(this.refs[question.id].state.selected);

            if (temp.indexOf(-100) === -1) {
                scores.push(this.refs[question.id].state.selected);
                check = true;
                console.log("validate : " + this.state.validate);
                console.log("Scores > " + scores);
            }


        }, this);


        if (check === true) {
            this.setState({ validate: true });
            scores.map(function (i) {
                console.log("current val : " + i);
                t_score = ((t_score) + (i));
            });

            this.setState({ score: t_score });

            if(ls.get("currentscore") != null )
            {
                ls.set("currentscore", t_score);
                console.log(ls.get("currentscore"));
            }
            else
            {
                ls.set("currentscore", 0);
            }

            this.toResult();
        }
    }


    componentWillMount() {
        this.DBRef = firebase.database().ref('question').orderByKey().limitToLast(100);

        this.DBRef.on('child_added', snapshot => {
            let question = {
                text: snapshot.val().text, id: snapshot.key, answer1: snapshot.val().answer1,
                answer2: snapshot.val().answer2, answer3: snapshot.val().answer3, answer4: snapshot.val().answer4,
                answer5: snapshot.val().answer5, valueanswer1: snapshot.val().valueanswer1, valueanswer2: snapshot.val().valueanswer2,
                valueanswer5: snapshot.val().valueanswer5, valueanswer4: snapshot.val().valueanswer4, valueanswer3: snapshot.val().valueanswer3,
                category: snapshot.val().category, bgcol: snapshot.val().bgcol
            };
            this.setState({ questions: [question].concat(this.state.questions) });
            this.setState({ loading: false });

        })

        console.log(this.state + "DB Mounted");

        ls.set("currentscore", 0);

        if( ls.get("name") != null || ls.get("name") != '')
        {
            this.setState({ name: ls.get("name")});
        }
        else
        {
            this.setState({ name: ':D'});
        }
    }

    keepchecking() {
        setTimeout(() => {
            console.log("Checking..");
            var references = [];
            var temp = [];
            var x = false;
            var scores = [];

            this.state.questions.map(function (question) {
                references.push(question.id);
                temp.push(this.refs[question.id].state.selected);

            }, this);

            console.log(temp);
            if (temp.indexOf(-100) === -1) {
                x = true;
            }
            else {
                x = false;
            }


            if (x == true) {
                this.setState({ validate: true });
            }

        }, 100);
    }

    componentWillUnmount() {
        this.DBRef.off();
        console.log("unmounted DB");
    }


    toResult()
    {
      this.props.history.push('/result');    
    }
  

    render() {
        const CardStyle = { background: '#003366', color: '#ffffff' };
        const radioStyle = { display: 'block', height: '40px', lineHeight: '20px', };

        return (

            <div className='empty'>

                <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
                    <Spin tip="loading .." spinning={this.state.loading} />
                </div>
                <ul>
                    {
                        this.state.questions.map(question =>
                            <div key={question.id}  >
                                <div style={{ marginTop: 30 }}>
                                    <Row>
                                        <Col span={3} />
                                        <Col span={18}>
                                            <MuiThemeProvider muiTheme={muitheme}>
                                                <Card style={{ color: blue300 }}>
                                                    <CardTitle titleColor={indigo900} style={{ background: question.bgcol }}
                                                        title={question.text} titleStyle={{color: "#ffffff"}}
                                                        subtitle={question.category} subtitleStyle={{color: "#ffffff"}} />

                                                    <CardText>
                                                        <div style={{ marginBottom: 15 }}>
                                                            <Divider />
                                                        </div>
                                                        <RadioButtonGroup ref={question.id}
                                                            name="RadioGroup"
                                                            onChange={this.keepchecking.bind(this)}
                                                            defaultSelected={-100}
                                                        >
                                                            <RadioButton style={{ color: "#F44336" }}
                                                                value={question.valueanswer1}
                                                                label={question.answer1}
                                                                checkedIcon={<ActionFavorite />}
                                                            />
                                                            <RadioButton
                                                                value={question.valueanswer2}
                                                                label={question.answer2}
                                                                checkedIcon={<ActionFavoriteBorder />}
                                                            />

                                                            <RadioButton
                                                                value={question.valueanswer3}
                                                                label={question.answer3}
                                                            />

                                                            <RadioButton
                                                                value={question.valueanswer4}
                                                                label={question.answer4}
                                                            />
                                                            <RadioButton
                                                                value={question.valueanswer5}
                                                                label={question.answer5}
                                                            />
                                                        </RadioButtonGroup>
                                                    </CardText>

                                                </Card>
                                            </MuiThemeProvider>
                                        </Col>
                                        <Col span={3} />
                                    </Row>

                                </div>
                            </div>
                        )
                    }
                </ul>

                {
                    this.state.validate == true ?
                        <Row>
                            <div style={{ textAlign: "center", marginTop: 15 }}>
                                <MuiThemeProvider muiTheme={muitheme2}>
                                    <RaisedButton secondary={true} label="i'm done" onClick={this.submit.bind(this)} />
                                </MuiThemeProvider>
                            </div>
                        </Row> :

                        <Row>
                            <div style={{ textAlign: "center", marginTop: 15 }}>
                                <h3 style={{color : "#B71C1C"}}> Please choose one answer for each question {this.state.name} </h3>
                            </div>
                        </Row>

                }

            </div>

        );

    }

}

export default withRouter(question);