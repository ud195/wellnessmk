import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Question from './components/question';
import Cardtest from './components/cardTest';
import QuestionAPI from './components/questionapi';
import Result from './components/result';
import {hashHistory} from 'react-history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muitheme from './muistyle/maintheme';

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
      <Route  path='/' component={App} />
      <Route   path='/test' component={Question}/>
      <Route path='/card' component={Cardtest } />
      <Route path='/result' component={Result} />
      <Route  path='/admin' component={QuestionAPI}/>
    </div>
  </Router>
    
  , document.getElementById('root'));

registerServiceWorker();
