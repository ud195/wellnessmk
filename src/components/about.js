import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import muitheme2 from '../muistyle/secondarytheme';
import { withRouter } from "react-router-dom";
import { Table, Col, Tag, Row, Slider } from 'antd';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { green600, blue300, blue800, indigo900, red900, grey50 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import ButtonIconPhone from 'material-ui/svg-icons/communication/phone';
import ButtonIconEmail from 'material-ui/svg-icons/communication/contact-mail';
import ButtonIconLocation from 'material-ui/svg-icons/communication/business';

class about extends Component {

    componentWillMount()
    {
        window.scrollTo(0, 0);                
    }

    render() {
        return (

            <div style={{ marginTop: 15 }}>
                <div style={{ marginTop: 15 }}>
                    <MuiThemeProvider muiTheme={muitheme}>
                        <Row>
                            <Col span={3} />
                            <Col span={18}>
                                <Row>
                                    <Col>
                                        <Card>
                                            <CardTitle titleStyle={{ textAlign : "center" ,background: blue800 , color: grey50}}  title="MasterKeys Creators" />
                                            <CardText>
                                                <Card>
                                                    <CardHeader title="Natalie Wild"
                                                        subtitle="CEO Redefine Life"
                                                        avatar={"http://www.wellnessmasterkeys.com.au/wp-content/uploads/2015/10/Natalie-web_0006-238x300.jpg"} />
                                                    <CardText>
                                                        CEO of Redefine Life Counselling and Support Services, practicing Counsellor, and founder and co-developer of Wellness Masterkeys.

                                                        Natalie has over 10 years’ experience in mental health services, as a practitioner, trainer and counselling supervisor, with a background in both counselling and psychology.

                                                        With experience, Natalie discovered that the same 7 challenges present themselves over and over in all people, despite each individual story being unique to the person living it. These challenges, when understood, managed and adapted to each person’s own style, became a great asset to ongoing mental wellness in her individual clients, yet are rarely discussed and commonly misunderstood in society overall.

                                                        These individual tools and practices have now extended beyond the success at a one on one level, through our Wellness Masterkeys Professional Development Programs.
                                                    </CardText>
                                                    <CardActions style={{textAlign: "center"}} >
                                                    <div>
                                                    <FlatButton icon={<ButtonIconPhone />}  label="0415 544 325" secondary = {true} />
                                                    </div>
                                                    <div style={{marginTop: 15}}>
                                                    <FlatButton style={{textAlign:"center"}} labelStyle={{textTransform: "lowercase"}}  label="info@wellnessmasterkeys.com.au" primary={true} icon={<ButtonIconEmail />} />
                                                    </div>
                                                </CardActions>
                                                </Card>
                                                <div style={{ marginTop: 15 }}>
                                                    <Card>
                                                        <CardHeader title="Mithzay Pomenta"
                                                            subtitle="Co-developer Wellness Masterkeys"
                                                            avatar={"http://www.wellnessmasterkeys.com.au/wp-content/uploads/2015/10/Mitzi-Dubai-Shoot-Profile-1-244x300.jpg"} />
                                                        <CardText>
                                                            Applied and Clinical Sociologist with a background in Audio-visual Communication and Semiotics. Independent Consultant and Co-developer of Wellness Masterkeys.

                                                            Mithzay has over 12 years combined experience developing effective communication strategies based on understanding social dynamics and culture. Her training in Sociology, Community Development and Semiotics has been instrumental in developing and applying techniques to change, adapt and improve human and social behaviour at an individual and group level.

                                                            She is the director of Fossickpoint, a consultancy practice for personal development, culture change strategy and communications. Supporting businesses to strengthen their corporate identity, foster employee engagement and implement strategies to facilitate change.
                                                        </CardText>
                                                        <CardActions style={{textAlign: "center"}} >
                                                        <div>
                                                        <FlatButton icon={<ButtonIconPhone />}  label="0417 003 505" secondary = {true}/>
                                                        </div>
                                                        <div style={{marginTop: 15}}>
                                                        <FlatButton  labelStyle={{textTransform: "lowercase"}}  label="info@wellnessmasterkeys.com.au" primary={true} icon={<ButtonIconEmail />} />
                                                        </div>
                                                    </CardActions>
                                                    </Card>
                                                </div>
                                            </CardText>
                                            <CardActions style={{textAlign: "center"}}>
                                            <FlatButton label="Visit us at : Suite 6/171 Boronia Road Boronia, Victoria 3155" secondary={true} icon={<ButtonIconLocation />}/>
                                            </CardActions> 
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={3} />
                        </Row>
                    </MuiThemeProvider >
                </div>
            </div>
        );
    }
}

export default withRouter(about);
