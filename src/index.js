import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Question from './components/question';
import Cardtest from './components/cardTest';
import QuestionAPI from './components/questionapi';
import About from './components/about';
import Help from './components/help';
import Footer from './components/footer';
import Result from './components/result';
import Welcome from './components/welcome';
import Disclaimer from './components/disclaimer';
import {hashHistory} from 'react-history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from './muistyle/maintheme';

class FadeIn extends Component {
  
    componentDidMount() {
      var that = this;
      var elem = ReactDOM.findDOMNode(that);
      elem.style.opacity = 0;
  
      window.requestAnimationFrame(function () {
        elem.style.transition = that.props.transition || "opacity 5000ms";
        elem.style.opacity = 1;
      });
    }
  
    render() {
  
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  
  }
  
  const MatchWIthFade = ( { component: Component, transition, ...rest}) =>
  (
    <Route {...rest} render={
  (matchProps) => ( 
    <FadeIn transition={transition}>
      <Component {...matchProps}/>
    </FadeIn>
    )}/>
  )
  

  var config = {
    apiKey: "AIzaSyBbdLyutPD86ytb8x5IVjm0F3heOPk7kes",
    authDomain: "wellnessmk-813cf.firebaseapp.com",
    databaseURL: "https://wellnessmk-813cf.firebaseio.com",
    projectId: "wellnessmk-813cf",
    storageBucket: "wellnessmk-813cf.appspot.com",
    messagingSenderId: "857040046078"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <Router history={hashHistory}>
    <div>
      <Redirect from='/' to='/welcome'/>
      <Route  path='/'  component={App} />
      <Route  path='/welcome'  component={Welcome} />
      <MatchWIthFade  path='/test'   component={Question} transition="opacity 5000ms"/>
      <Route  path='/card' component={Cardtest } />
      <Route  path='/result' component={Result} />
      <Route  path='/admin' component={QuestionAPI}/>
      <Route  path='/about' component={About}/>
      <Route  path='/help' component={Help}/>
      <Route  path='/discl' component={Disclaimer}/>
      <Route  path='' component={Footer}/> 
    </div>
  </Router>
    
  , document.getElementById('root'));

registerServiceWorker();
