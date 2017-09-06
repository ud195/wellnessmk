import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBbdLyutPD86ytb8x5IVjm0F3heOPk7kes",
    authDomain: "wellnessmk-813cf.firebaseapp.com",
    databaseURL: "https://wellnessmk-813cf.firebaseio.com",
    projectId: "wellnessmk-813cf",
    storageBucket: "wellnessmk-813cf.appspot.com",
    messagingSenderId: "857040046078"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
