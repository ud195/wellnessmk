import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Home from './components/home';
import Mood from './components/mood';
import Question from './components/question';
import QuestionAPI from './components/questionapi';

const routes =
  <Route path="/" component={App}>
    <Route exactpath= "/home" component={Home}/>
    <Route path="/mood" component={Mood}/>
    <Route path="/question" component={Question}/>
    <Route path="/questionapi" component={QuestionAPI}/>
  </Route>;

export default routes;