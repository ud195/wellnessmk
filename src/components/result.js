import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { green600, blue300, blue800, indigo900 } from 'material-ui/styles/colors';
import { Table, Col, Tag, Row, Slider } from 'antd';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from '../muistyle/maintheme';
import muitheme2 from '../muistyle/secondarytheme';
import Toggle from 'material-ui/Toggle';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
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
            CurrDate: null,
            getscore: 0
        }

    }



    componentWillMount() {
        this.setState({ name: ls.get("name") });
        this.setState({ CurrDate: Date() });
        this.checkTier();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    checkTier() {

        if (ls.get("currentscore") >= 1 && ls.get("currentscore") <= 19) {
            console.log("checking tier..");
            this.setState({ tier1: true });
            ls.set("personality", "Introvert by nature");
            this.setState({ score1: ls.get("currentscore") });
        }
        else if (ls.get("currentscore") >= 20 && ls.get("currentscore") <= 29) {
            console.log("checking tier..");
            this.setState({ tier2: true });
            ls.set("personality", "Moderately introverted");
            this.setState({ score1: ls.get("currentscore") });
        }
        else if (ls.get("currentscore") >= 30 && ls.get("currentscore") <= 39) {
            console.log("checking tier..");
            this.setState({ tier3: true });
            ls.set("personality", "Moderately extroverted");
            this.setState({ score2: ls.get("currentscore") });
        }
        else if (ls.get("currentscore") >= 40 && ls.get("currentscore") <= 50) {
            console.log("checking tier..");
            this.setState({ tier4: true });
            ls.set("personality", "Extroverted by nature");
            this.setState({ score2: ls.get("currentscore") });
        }
    }


    toHome(e) {
        e.preventDefault();
        this.props.history.push('/welcome');
    }

    render() {

        const rec1tier1 = [
            "Pace yourself- if you are asked to 5 events in a day, consider how you may structure them, or move them to another time/date. How long will each of them go for? How much time have you allowed yourself to regroup in between? Have you allowed yourself some solo time at the end of the day? Include these facts in planning.",
            "Others advice is great to listen to, but only take on board what works best for you. there is only one you, and one size does not fit all. Choose the advice that respects your individual set point.",
            "Jobs- you will work best in a job where there is a lot of time spent alone. Many couriers or truck drivers are introverts. Many accountants, statisticians or researchers are introvert. Some jobs assumed to be extroverted are the opposite. A presenter or a dancer for example can speak/perform to the masses on a stage for half an hour easily, but the rest includes traveling alone, staying away from home on their own, and creating and practicing the presentations/performance on their own."
        ]
        const rec2tier1 = [
            "drive to and from places to by yourself",
            "Schedule time for a solo walk.",
            "Learn to say no or reschedule if need be. If you are energy depleted you are very little use to anyone if you show up!!",
            "Put headphones in on public transport even if not listening to anything, or pull out a book or a mind stilling game on your phone to put your thoughts back on track.",
            "Pre-empt and be organised. Allow an hour between each time commitment if you can, just in case you need it.",
            "Get creative. Anything that slows your thoughts with minimal stimulation is the goal. How you get there is whatever works best for you."

        ]

        const rec1tier2 = [
            "Be mindful of your socialising capacity. With moderate introversion, it is sometimes hard to know when enough is enough until it hits you. Get familiar with what your average capacity is before you need to recharge. With continual stimulation how long is usually long enough? Do you last longer in an environment with structured stimulation or familiarity, than you do when it is unstructured or foreign?  Include these factors in planning your social calendar.",
            "Jobs- you will work best in a job where there is a moderate amount of time spent on your own. Many secretaries and PR type jobs are moderate introverts as there is a balance of solo and people activities. Many policemen, mental health care workers and caterers are moderate introverts or ambiverts. There are many jobs outside these suggested jobs that fit into this category. Most moderate extroverts also work well in these jobs which spans half of the population."
        ]
        const rec2tier2 = [
            "If you are at the low end of the moderate introversion scale you are more likely to need more recharge time in low stimulated spaces than at the higher end. For suggestion read the introverted section 20-39.",
            "At the higher end, you may be an ambivert, which is a person who has a balance of extrovert and introvert features in their personality. If this is the case it may be worth reading the 60-79 section as well as this one to see which areas might fit you best.",
            "Get creative with your downtime. Anything that slows your thoughts with minimal stimulation is the goal. How you get there is whatever works best for you.",
            "Others advice is great to listen to, but only take on board what works best for you. There is only one you, and one size does not fit all. Only choose the advice that respects your individual set point the most." 
        ]

        const rec1tier3 = [
            "Be mindful of your capacity to be in a low stimulated environment. With moderate extroversion, it is sometimes hard to know when enough is enough until it hits you. Get familiar with what your average capacity is before you need to recharge. With a continual lack of stimulation how long is usually long enough? Do you last longer in an environment where you have specific tasks to do, than you do when you have nothing in particular that needs to be done?  Include these factors when facing downtime on your own.",
            "Jobs- you will work best in a job where there is a moderate amount of time spent with others. Many secretaries and PR type jobs are moderate extroverts as there is a balance of solo and people activities. Many policemen, mental health care workers and caterers are moderate extroverts or ambiverts. There are many jobs outside these suggested jobs that fit into this category. Most moderate introverts also work well in these jobs which spans half of the population."
        ]
        const rec2tier3 = [
            "If you are at the low end of the moderate extroversion scale you will possibly need less recharge time in a highly stimulated space than at the higher end. For suggestion on stimulation ideas read the extroverted section 80-100.",
            "At the lower end, you may be an ambivert, which is a person who has a balance of extrovert and introvert features in their personality. If this is the case it may be worth reading the 40-59 section as well as this one to see which areas might fit you best.",
            "Get creative with people stimulated time. Anything that calms your agitation or restlessness with external stimulation is the goal. How you get there is whatever works best for you.",
            "Others advice is great to listen to, but only take on board what works best for you. There is only one you, and one size does not fit all. Only choose the advice that respects your individual set point the most.",
            
        ]

        const rec1tier4 = [
            "Surround yourself with spontaneous fellow extroverts. The more there are, the more likely you will be to replenish your energy reserves.",
            "Others advice is great to listen to, but only take on board what works best for you. There is only one you, and one size does not fit all. This can be challenging for an extrovert as you are driven and inspired by others, so lots of advice might entice you, but me mindful where possible to choose the advice that best respects your individual set point.",
            "Jobs- you will work best in a highly stimulating and people oriented space. Many sales reps and promoters are extroverts. Many public relations people, event managers, agents and marketing people are extroverts."
        ]
        const rec2tier4 = [
            "Car pool",
            "Join sporting clubs or group activities.",
            "Have a mental checklist of the people you can call on at a moment’s notice to hang out!!",
            "Create networking opportunities.",
            "Say yes to any social events.",
            "Get creative. Anything that offers you maximum external stimulation or conversation is the goal. How you get there is whatever works best for you."
            
        ]

        const marks = {

            25: {
                style: {
                    color: '#008000',
                },
                label: <Tag color="#2E86C1">25</Tag>,
            },

            50:
            {
                style: {
                    color: "#00FF00",
                }, label: <Tag color="#2E86C1">50</Tag>
            },
        };

        const marks2 = {
            0:
            {
                style: {
                    color: "#00FF00",
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
                                                                <h2> Set point : </h2> <h2 style={{ color: blue300 }}> {this.state.score1} </h2>

                                                                <h2> Personality : </h2> <h2 style={{ color: green600 }}> Introvert by nature </h2>

                                                                <h2> Date : </h2> <h2 style={{ color: blue800 }}> {this.state.CurrDate} </h2>
                                                            </div>
                                                            :
                                                            <div>
                                                            
                                                            {
                                                                this.state.tier2 == true ?
                                                                    <div>
                                                                        <h2> Set point : </h2> <h2 style={{ color: blue300 }}> {this.state.score1} </h2>

                                                                        <h2> Personality : </h2> <h2 style={{ color: green600 }}> Moderately introverted </h2>

                                                                        <h2> Date : </h2> <h2 style={{ color: blue800 }}> {this.state.CurrDate} </h2>
                                                                    </div>
                                                                    :
                                                                    <div>
                                                                    
                                                                        {
                                                                            this.state.tier3 == true ?
                                                                                <div>
                                                                                    <h2> Set point : </h2> <h2 style={{ color: blue300 }}> {this.state.score2} </h2>

                                                                                    <h2> Personality : </h2> <h2 style={{ color: green600 }}> Moderately Extroverted </h2>

                                                                                    <h2> Date : </h2> <h2 style={{ color: blue800 }}> {this.state.CurrDate} </h2>
                                                                                </div>
                                                                                :
                                                                                <div>
                                                                                    {
                                                                                        this.state.tier4 == true ?
                                                                                            <div>
                                                                                                <h2> Set point : </h2> <h2 style={{ color: blue300 }}> {this.state.score2} </h2>

                                                                                                <h2> Personality : </h2> <h2 style={{ color: green600 }}> Extroverted by nature </h2>

                                                                                                <h2> Date : </h2> <h2 style={{ color: blue800 }}> {this.state.CurrDate} </h2>
                                                                                            </div>
                                                                                            :
                                                                                            <div>
                                                                                            
                                                                                            </div>
                                                                                    }
                                                                                </div>
                                                                        }

                                                                    </div>
                                                            }

                                                            </div>
                                                    }
                                                </CardText>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={3} />
                        </Row>
                    </MuiThemeProvider >
                </div>

                <div style={{ marginTop: 15 }}>
                    <MuiThemeProvider muiTheme={muitheme}>
                        <Row>
                            <Col span={3} />
                            <Col span={18}>
                                <Card>
                                    <Row>
                                        <Col span={1} />
                                        <Col span={22}>
                                            <Slider disabled={true} min={25} max={50} marks={marks} defaultValue={this.state.score2} />
                                        </Col>
                                        <Col span={1} />
                                    </Row>
                                    <Row>
                                        <Col>
                                            <CardMedia>
                                                <img size="small" src={gradientImg} className="gradient" alt="logo" />
                                            </CardMedia>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={1} />
                                        <Col span={22}>
                                            <Slider disabled={true} min={0} max={24} marks={marks2} defaultValue={this.state.score1} />
                                        </Col>
                                        <Col span={1} />
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={3} />
                        </Row>
                    </MuiThemeProvider >
                </div>


                <div style={{ marginTop: 15 }}>
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

                                                                <br />

                                                            </div>
                                                            :
                                                            <div>
                                                                {
                                                                    this.state.tier2 == true ?
                                                                        <div>
                                                                            <p>
                                                                            At a moderate level of introversion, you may feel a degree of natural energy depletion in the company of others.  
                                                                            It is common to feel good at one or 2 people stimulated events, but if this atmosphere is sustained for too long with no downtime, energy will start to decline. 
                                                                            A good example might be a party, followed by a group sleepover, being fun and energy filled, but if extended over a weekend or longer, agitation will result. This does not mean with moderate introversion you begin to dislike your friends, it simply means you are overstimulated if in the environment for too long, needing time alone to regenerate your energy. A moderately introverted nature usually prefers structure, and you have a curiosity about the way you think and feel, but not as deeply as someone who scores higher on the introversion scale. When surrounded by outside stimulus, at some point you will need to move away from the stimuli to gather and restructure your thoughts. A moderate introvert works well with others, but if left to choose would prefer to occasionally working in your own space, especially if the environment you work in is without a degree of structure. 
                                                                            Once your set point is respected, you will be able to work and play more productively with a higher level of enjoyment.
                                                                            </p>

                                                                            <br />

                                                                        </div>
                                                                        :
                                                                        <div>
                                                                            {
                                                                                this.state.tier3 == true ?
                                                                                    <div>
                                                                                        <p>
                                                                                        At a moderate level of extroversion, you may feel a degree of natural energy depletion in your own company.  
                                                                                        It is common to feel good now and again in low stimulated events, but if this atmosphere is sustained for too long with interaction time, energy will start to decline. A good example might be studying alone without some social interruptions. 
                                                                                        For a while it will be productive and welcome, but if extended over a period of time, agitation will result. 
                                                                                        This does not mean with moderate extroversion you begin to dislike solo downtime, it simply means you are not stimulated if in this environment for too long, needing some people time to regenerate your energy. 
                                                                                        A moderately extroverted nature usually prefers some spontaneity, and you like to discuss and compare the way you think and feel with others, but, depending on the subject matter you may work something out by yourself. 
                                                                                        When there is limited to no external stimulus, at some point you will need to surround yourself with external people or stimuli to get back to your most comfortable set point. A moderate extrovert works well on your own, but if left to choose would prefer to be working with others, especially when a decision needs to be made. 
                                                                                        Once your set point is respected, you will be able to work and play more productively with a higher level of enjoyment.
                                                                                        </p>

                                                                                        <br />

                                                                                    </div>
                                                                                    :
                                                                                    <div>
                                                                                    {
                                                                                        this.state.tier4 == true ?
                                                                                            <div>
                                                                                                <p>
                                                                                                At the most extreme level, an extrovert is drained of natural energy in in low stimulated or people free spaces. 
                                                                                                This does not always mean that an extrovert dislikes their own company, it simply means they are not stimulated by it, which causes them to need time with others or in a high stimulated space to regenerate that energy. 
                                                                                                An extroverted nature thrives on impulsive and spontaneous adventure, looking outside of yourself for inspiration, and sharing yourself completely with others, as well as openly talking about your thoughts and feelings. 
                                                                                                When alone, it is impossible to do this, meaning you need to source social stimuli to gather momentum relax. An extrovert works better in the company of others, and often acts before they think. 
                                                                                                Once your set point is respected, you will be able to work and play more productively with a higher level of enjoyment.
                                                                                                </p>

                                                                                                <br />

                                                                                            </div>
                                                                                            :
                                                                                            <div>

                                                                                            </div>
                                                                                    }
                                                                                    </div>
                                                                            }
                                                                        </div>
                                                                }
                                                            </div>
                                                    }
                                                </CardText>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={3} />
                        </Row>
                    </MuiThemeProvider >
                </div>

                <div style={{ marginTop: 15 }}>
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
                                                                <h4>
                                                                    You now know that the best place to recharge your batteries is in your own company.
                                                                The way to respect your set point is to respect this as a part of your structure when you map out your commitments.
                                                                If your mobile phone needed charging, you would find a way to recharge as soon as possible, respecting that if you don’t it will stop working.
                                                                Treat yourself with the same respect as you would your phone!
                                                                </h4>
                                                                {
                                                                    rec1tier1.map(elems =>
                                                                        <li key={elems}>{elems}</li>
                                                                    )
                                                                }

                                                                <h4> You can regroup anywhere that offers minimal external stimuli : </h4>

                                                                {
                                                                    rec2tier1.map(elems =>
                                                                        <li key={elems}>{elems}</li>
                                                                    )
                                                                }

                                                            </div>
                                                            :
                                                            <div>
                                                                {
                                                                    this.state.tier2 == true ?
                                                                        <div>
                                                                            <h4>
                                                                                You now know that the best place to recharge your batteries is in your own company, however, you can have a moderate level of stimulation without a recharge.
                                                                            The way to respect your set point is to respect this as a part of your structure when you map out your commitments.
                                                                            If your mobile phone needed charging, you would find a way to recharge as soon as possible, respecting that if you don’t it will stop working.
                                                                            Treat yourself with the same respect as you would your phone!
                                                                            </h4>
                                                                            <br />
                                                                            {
                                                                                rec1tier2.map(elems =>
                                                                                    <li key={elems}>{elems}</li>
                                                                                )
                                                                            }

                                                                            <h4> Recharge time can vary for you depending on the stimuli and your particular level of moderate introversion : </h4>

                                                                            {
                                                                                rec2tier2.map(elems =>
                                                                                    <li key={elems}>{elems}</li>
                                                                                )
                                                                            }

                                                                        </div> :
                                                                        <div>
                                                                            {
                                                                                this.state.tier3 == true ?
                                                                                    <div>
                                                                                        <h4>
                                                                                            At a moderate level of extroversion, you may feel a degree of natural energy depletion in your own company.
                                                                                        It is common to feel good now and again in low stimulated events, but if this atmosphere is sustained for too long with interaction time, energy will start to decline.
                                                                                        A good example might be studying alone without some social interruptions.
                                                                                        For a while it will be productive and welcome, but if extended over a period of time, agitation will result.
                                                                                        This does not mean with moderate extroversion you begin to dislike solo downtime, it simply means you are not stimulated if in this environment for too long, needing some people time to regenerate your energy. A moderately extroverted nature usually prefers some spontaneity, and you like to discuss and compare the way you think and feel with others, but, depending on the subject matter you may work somethings out by yourself. When there is limited to no external stimulus, at some point you will need to surround yourself with external people or stimuli to get back to your most comfortable set point. A moderate extrovert works well on your own, but if left to choose would prefer to be working with others, especially when a decision needs to be made.
                                                                                        Once your set point is respected, you will be able to work and play more productively with a higher level of enjoyment.
                                                                                        </h4>
                                                                                        <br />
                                                                                        {
                                                                                            rec1tier3.map(elems =>
                                                                                                <li key={elems}>{elems}</li>
                                                                                            )
                                                                                        }

                                                                                        <h4> Recharge time can vary for you depending on the lack of stimuli and your particular level of moderate extroversion : </h4>

                                                                                        {
                                                                                            rec2tier3.map(elems =>
                                                                                                <li key={elems}>{elems}</li>
                                                                                            )
                                                                                        }


                                                                                    </div> :
                                                                                    <div>

                                                                                        {
                                                                                            this.state.tier4 == true ?
                                                                                                <div>
                                                                                                    <h4>
                                                                                                        You now know that the best place to recharge your batteries is in the company of others.
                                                                                                The way to respect your set point is to respect this as a part of your structure when you map out your commitments.
                                                                                                If your mobile phone needed charging, you would find a way to recharge as soon as possible, respecting that if you don’t it will stop working.
                                                                                                Treat yourself with the same respect as you would your phone!
                                                                                                </h4>
                                                                                                    <br />
                                                                                                    {
                                                                                                        rec1tier4.map(elems =>
                                                                                                            <li key={elems}>{elems}</li>
                                                                                                        )
                                                                                                    }

                                                                                                    <h4> Look for places that offer high external stimuli : </h4>

                                                                                                    {
                                                                                                        rec2tier4.map(elems =>
                                                                                                            <li key={elems}>{elems}</li>
                                                                                                        )
                                                                                                    }
                                                                                                </div>
                                                                                                :
                                                                                                <div>
                                                                                                    <h1> No Recommendations </h1>
                                                                                                </div>

                                                                                        }
                                                                                    </div>

                                                                            }
                                                                        </div>

                                                                }
                                                            </div>
                                                    }
                                                </CardText>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={3} />
                        </Row>
                    </MuiThemeProvider >
                </div>

                <div style={{ textAlign: "center", marginTop: 15 }}>
                    <MuiThemeProvider muiTheme={muitheme2}>
                        <RaisedButton style={{ textAlign: "center" }} secondary={true} label=" Back to home" primary={true} icon={<ButtonIconBackward />} onClick={this.toHome.bind(this)} />
                    </MuiThemeProvider>
                </div>

            </div>
        );
    }

}
