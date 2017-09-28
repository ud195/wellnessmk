import  React  from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { green600, blue300} from 'material-ui/styles/colors';
import { Table, Col, Row } from 'antd';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {withRouter} from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';


class cardtest extends React.Component {

    toResults(e)
    {
      e.preventDefault();
  
      this.props.history.push('/result');    
    }

    render() 
    {
    
        return (
            <div>
                <MuiThemeProvider muiTheme={muitheme}>
                <Row>
                    <Col span={6} />
                    <Col span={12}>
                    <Card style={{  color: blue300}}>
                        <CardTitle  title="How often do you think you should have been to this event when this... ?" subtitle="Reaction to stimuli" />
                        <CardText>
                            <Row>
                                <Col> 
                                <Toggle       labelPosition="right"

                                 label="asd sadas d sad as das das dasd as das das dasd as dasd as das das as das dsad as dsa dasd  ?"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col> 
                                <Toggle       labelPosition="right"
                                label="asd sadas d sad as das das dasd as das das dasd as dasd as das das as das dsad as dsa dasd  ?"/>
                                </Col>
                            </Row>
                        </CardText>
                    </Card>
                    <RaisedButton  label="card test" secondary = {true} onClick={this.toResults.bind(this)}/>

                    </Col>
                    <Col span={6}/>
                </Row>


                </MuiThemeProvider >
              </div>
            );
    }

}

export default withRouter(cardtest);