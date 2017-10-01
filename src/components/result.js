import  React  from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { green600, blue300, blue800, indigo900} from 'material-ui/styles/colors';
import { Table, Col, Tag, Row, Slider } from 'antd';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import muitheme2 from '../muistyle/secondarytheme';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import gradientImg from '../gradient.png';
import ls from 'local-storage';
import ButtonIconBackward from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';

export default class result extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            name: null,
            score1: 0,
            score2: 25,
            tier1: false,
            tier2: false,
            tier3: false,
            tier4: false,
            currentscore: 0,
            CurrDate : null,
        }

    }
    

    
    componentWillMount()
    {
        this.setState({score1 : ls.get("currentscore")});
        this.setState({ name : ls.get("name")});
        console.log(" cmp ::: " + this.state.score1);
        this.setState({ CurrDate : Date() });
        this.checkTier();
    }

    componentDidMount()
    {
        window.scrollTo(0, 0);        
    }

    checkTier()
    {
        if(this.state.score1 >= 10 || this.state.score1 <= 19 )
        {
            console.log("checking tier..");
            this.setState({ tier1 : true });
            ls.set("personality","Introvert by nature");
        }

    }


    toHome(e)
    {
      e.preventDefault();
  
      this.props.history.push('/welcome');    
    }
  
    render() 
    {

        const marks = {

            25: {
              style: {
                color: '#008000',
              },
              label: <Tag color="#2E86C1">24</Tag>,
            },

            50: 
            {
                style: { color: "#00FF00",
            }, label: <Tag color="#2E86C1">50</Tag>            
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


                <div>
                <MuiThemeProvider muiTheme={muitheme}>
                <Row>
                    <Col span={3} />
                    <Col span={18}>
                    <Card>
                        <Row>
                            <Col>
                            <Card>
                                <CardTitle titleColor={green600} style={{ background: "#ffffff" }}
                                title={this.state.name + "'s Results"} />
                                <CardText>
                                    {
                                        this.state.tier1 == true ?
                                        <div>
                                            <h2> Set point : </h2> <h2 style={{color: blue300}}> {this.state.score1} </h2>

                                            <h2> Personality : </h2> <h2 style={{color: green600}}> Introvert by nature </h2>

                                            <h2> Date : </h2> <h2 style={{color: blue800}}> {this.state.CurrDate} </h2>
                                        </div>
                                        :
                                        <div>
                                        
                                        </div>
                                    }
                                </CardText>
                            </Card>
                            </Col>
                        </Row>                        
                    </Card>
                    </Col>
                    <Col span={3}/>
                </Row>
                </MuiThemeProvider >
                </div>

                <div style={{marginTop : 15}}>
                <MuiThemeProvider muiTheme={muitheme}>
                <Row>
                    <Col span={3} />
                    <Col span={18}>
                    <Card>
                    <Row>
                            <Col span={1}/>
                            <Col span= {22}>
                            <Slider disabled={true} min={25} max={50} marks={marks} />
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
                            <Slider disabled={true} min={0} max={24}  marks={marks2} defaultValue={this.state.score1} />
                             </Col> 
                             <Col span={1}/>
                         </Row>
                    </Card>
                    </Col>
                    <Col span={3}/>
                </Row>
                </MuiThemeProvider >
                </div>
                

                <div style={{marginTop : 15}}>
                <MuiThemeProvider muiTheme={muitheme}>
                <Row>
                    <Col span={3} />
                    <Col span={18}>
                    <Card>
                        <Row>
                            <Col>
                            <Card>
                                <CardTitle titleColor={blue800} style={{ background: "#ffffff" }}
                                title={ls.get("personality")} />
                                <CardText>
                                    {
                                        this.state.tier1 == true ?
                                        <div>
                                        <p> 
                                        At the most extreme level, an introvert is drained of natural energy in the company of others. 
                                        This does not always mean that an introvert dislikes others company, it simply means you are overstimulated by it, which causes you to need time alone to regenerate that energy. 
                                        An introverted nature thrives on structure, and in-depth exploration of yourself, including why you think and feel the way you do. 
                                        When surrounded by outside stimulus, it is very hard to do this, meaning you need to move away from the stimuli to gather and restructure your thoughts. 
                                        An introvert works better in your own space, as you think constantly on many levels. 
                                        Once your set point is respected, you will be able to work and play more productively with a higher level of enjoyment.
                                        </p>

                                        <br/>

                                        </div>
                                        :
                                        <div>
                                        
                                        </div>
                                    }
                                </CardText>
                            </Card>
                            </Col>
                        </Row>                        
                    </Card>
                    </Col>
                    <Col span={3}/>
                </Row>
                </MuiThemeProvider >
                </div>

                <div style={{marginTop : 15}}>
                <MuiThemeProvider muiTheme={muitheme}>
                <Row>
                    <Col span={3} />
                    <Col span={18}>
                    <Card>
                        <Row>
                            <Col>
                            <Card>
                                <CardTitle titleColor={blue300} style={{ background: "#ffffff" }}
                                title="How to respect your setpoint" />
                                <CardText>
                                    {
                                        this.state.tier1 == true ?
                                        <div>
                                            <ul>
                                                <li>
                                                Pace yourself- if you are asked to 5 events in a day, consider how you may structure them, or move them to another time/date. 
                                                How long will each of them go for? How much time have you allowed yourself to regroup in between? 
                                                Have you allowed yourself some solo time at the end of the day? Include these facts in planning.
                                                </li>
                                                <li>
                                                You can regroup anywhere that offers minimal external stimuli;
                                                -	drive to and from places to by yourself
                                                -	schedule time for a solo walk.
                                                -	Learn to say no or reschedule if need be. If you are energy depleted you are very little use to anyone if you show up!!
                                                -	Put headphones in on public transport even if not listening to anything, or pull out a book or a mind stilling game on your phone to put your thoughts back on track.
                                                -	Pre-empt and be organised. Allow an hour between each time commitment if you can, just in case you need it.
                                                -	Get creative. Anything that slows your thoughts with minimal stimulation is the goal. How you get there is whatever works best for you.                                                 
                                                </li>
                                                <li>
                                                Others advice is great to listen to, but only take on board what works best for you. 
                                                There is only one you, and one size does not fit all. 
                                                Choose the advice that respects your individual set point. 
                                                </li>
                                                <li>
                                                Jobs- you will work best in a job where there is a lot of time spent alone. 
                                                Many couriers or truck drivers are introverts. 
                                                Many accountants, statisticians or researchers are introvert. 
                                                Some jobs assumed to be extroverted are the opposite. A presenter or a dancer for example can speak/perform to the masses on a stage for half an hour easily, 
                                                but the rest includes traveling alone, staying away from home on their own, and creating and practicing the presentations/performance on their own. 
                                                </li>
                                                
                                            </ul>

                                        <br/>

                                        </div>
                                        :
                                        <div>
                                        
                                        </div>
                                    }
                                </CardText>
                            </Card>
                            </Col>
                        </Row>                        
                    </Card>
                    </Col>
                    <Col span={3}/>
                </Row>
                </MuiThemeProvider >
                </div>
                
                <div style={{textAlign: "center", marginTop : 15}}>
                <MuiThemeProvider muiTheme={muitheme2}>
                <RaisedButton style={{textAlign:"center"}} secondary={true}  label=" Back to home" primary={true} icon={<ButtonIconBackward />} onClick={this.toHome.bind(this)} />
                </MuiThemeProvider>
                </div>

              </div>
            );
    }

}
