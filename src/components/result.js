import  React  from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { green600, blue300} from 'material-ui/styles/colors';
import { Table, Col, Tag, Row, Slider } from 'antd';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import gradientImg from '../gradient.png';

export default class result extends React.Component {


    state = {
        disabled: false,
      };
    

    render() 
    {
        const marks = {
            0: 
            {
                style: { color: "#00FF00",
            }, label: <Tag color="#2E86C1">0</Tag>            
            },
            24: {
              style: {
                color: '#008000',
              },
              label: <Tag color="#2E86C1">24</Tag>,
            },
        };

        const marks2 = {
            0: 
            {
                style: { color: "#00FF00",
            }, label: <Tag color="#28B463">0</Tag>            
            },
            24: {
              style: {
                color: '#008000',
              },
              label: <Tag color="#28B463">24</Tag>,
            },
        };

        const { disabled } = this.state;
        return (
            <div>
                <MuiThemeProvider muiTheme={muitheme}>
                <Row>
                    <Col span={6} />
                    <Col span={12}>
                    <Card>
                        <Row>
                            <Col span={1}/>
                            <Col span= {22}>
                            <Slider disabled={true} min={24} max={0} marks={marks} />
                            </Col>
                            <Col span={1}/>
                        </Row>
                        <Row>
                            <Col>
                            <CardMedia>
                                <img  size="small" src={gradientImg} className="gradient" alt="logo" />
                            </CardMedia>
                            </Col>
                        </Row>                        
                        <Row>
                            <Col span={1}/>
                            <Col span= {22}>
                            <Slider disabled={true} min={0} max={24}  marks={marks2} defaultValue={15} />
                            </Col> 
                             <Col span={1}/>
                         </Row>
                    </Card>
                    </Col>
                    <Col span={6}/>
                </Row>
                </MuiThemeProvider >
              </div>
            );
    }

}
