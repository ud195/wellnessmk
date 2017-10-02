import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import muitheme2 from '../muistyle/secondarytheme';
import { withRouter } from "react-router-dom";
import { Table, Col, Tag, Row, Slider } from 'antd';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { green600, blue300, blue800, indigo900} from 'material-ui/styles/colors';


class help extends Component {


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
                                        <CardTitle titleColor={green600}  title="What does your score mean?"/>
                                            <CardText>
                                             Your score is your natural set point for introversion and extroversion. This is the place where you are naturally most comfortable. 
                                             In life, it is common to be in situations that sit outside of your natural set point. 
                                             Knowing your set point helps you to understand why you instinctively act and react to certain situations.  
                                             The further away from your set point, the more unsettled you may feel. 
                                            </CardText> 
                                         </Card>   
                                        <div style={{marginTop : 15}}>
                                         <Card>
                                         <CardTitle titleColor={blue800}  title="Understanding the scale"/>
                                            <CardText>
                                            As you read on, have a look at where you are naturally placed on the scale. 
                                            Take note of your surroundings when you feel any level of discontent, and observe how far away you are you from your natural set point at this time. 
                                            The further away you are, the more likely you are to feel unsettled. 
                                            Enjoyment and natural energy recharge are 2 different things, however, without awareness, can be easily confused. 
                                            </CardText> 
                                        </Card>
                                        </div>
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

export default withRouter(help);
