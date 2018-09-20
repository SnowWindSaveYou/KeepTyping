/**
 * Entrace Page
 * the visit request of user will go through this page 
 * and distribute to each router
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter} from 'react-router-dom';

/** FOR TEST ONLY */
//import './styles/show_location.css';
/** Page Templates */
import App from './App';
import Page404 from './page_templates/static_page/page_404';
import TestPage from './page_templates/static_page/page_test';
import TopicPage from './page_templates/topic_page';

const setTitle = title => () => {console.log('asdfasdf ' + title); document.title = title; };

ReactDOM.render(
    <BrowserRouter basename="/">
    <div>
        <Route exact path="/" component={App} onEnter={console.log('Keep Typing!')}/>   
        <Route path="/topic/:name" component={TopicPage} />   
        <Route path="/test" component={TestPage} title="TEST" />   
        <Route path="*" component={Page404} title="404 not found" onEnter={console.log("asdf")}/> 
    </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
