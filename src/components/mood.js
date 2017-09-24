import React from 'react';
import '../css/mood.css';
import * as firebase from 'firebase';
import { Button, Radio, Rate, Icon, Progress, Slider, Card, Tag, Spin, Table, Steps, Row, Col, Tabs } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;


export default class mood extends React.Component {


    constructor(props) {
        super(props);
        const { max, min } = props;
        const mid = ((max - min) / 2).toFixed(5);

        this.state = {
            mid,
            sliderValue: this.props.value,
            moods: [],
            score: null,
            loading: true,
            weight: null,
            category: null,
            recommendation: null,
            stresslevel: null
        }

    }

    sliderChange(v) {
        this.setState({
            sliderValue: v,
            stresslevel: this.state.sliderValue
        });
        console.log("Stress Level : " + this.state.stresslevel);
    }

    radiochanged(event) {
        console.log(`radio checked:${event.target.value}`);
    }

    

    componentWillMount() {
        let DBRef = firebase.database().ref('mood').orderByKey().limitToLast(100);

        DBRef.on('child_added', snapshot => {
            let mood = {
                weight: snapshot.val().weight, id: snapshot.key, recommendation: snapshot.val().recommendation,
            };
            this.setState({ moods: [mood].concat(this.state.moods) });
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
                <h1 className='text-mood'>  Feelings Level Test  </h1>
                <div style={{ marginTop: 10, marginBottom: 15 }}>
                    <Spin size="large" spinning={this.state.loading} />
                </div>
                <div style={{ marginTop: 30 }}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <div style={{ marginBottom: 15 }}>
                                <h3> How are you feeling today ? </h3>
                                <Rate character={<Icon type="smile-o" />} allowHalf defaultValue={1.5} style={{ fontSize: 36 }} />
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
                <div style={{ marginTop: 30 }}>
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <div style={{ marginBottom: 15 }}>
                                <h3> How agitated or stressed are you?  </h3>

                                <Rate character={<Icon type="frown-o" />} allowHalf defaultValue={1.5} style={{ fontSize: 36 }} />
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
                <ul>
                    {
                        this.state.moods.map(mood =>
                            <div key={mood.id}>

                            </div>
                        )
                    }
                </ul>
            </div>
        );

    }

}