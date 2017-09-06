import React from 'react';
import '../css/question.css';
import * as firebase from 'firebase';
import { Button, Radio, Icon, Progress, Slider, Card, Spin, Table, Steps, Row, Col, Tabs } from 'antd';

export default class question extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }

    }


    componentWillMount() {

        let DBRef = firebase.database().ref('question').orderByKey().limitToLast(100);

        DBRef.on('child_added', snapshot => {
            let question = { text: snapshot.val().text, id: snapshot.key, answer1: snapshot.val().answer1 };
            this.setState({ questions: [question].concat(this.state.questions) });
        }
        )

        console.log(this.state);

    }

    componentDidMount()
    {
        console.log(this.state.questions);
    }

    render() {
    
        const CardStyle = { background: '#000000', color: '#ffffff'};

        return (

            <div className='text'>
                <h1 className='text'>  question >> </h1>
                <ul>
                    <li>List >></li>
                </ul>
                <ul>
                    {
                        this.state.questions.map(question => 
                        
                        <div>
                            
                         <Card title = {question.text}
                         extra={<Button type="primary" icon="forward" size="small">Next</Button>} style={CardStyle}>
                         </Card>

                         {question.id}
    
                        </div>
                        )
                    }
                </ul>
            </div>

        );

    }

}