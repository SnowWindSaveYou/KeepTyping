/**
 * Entrace Page
 * the visit request of user will go through this page 
 * and distribute to each router
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, hashHistory} from 'react-router';

/** FOR TEST ONLY */
//import './styles/show_location.css';
/** Page Templates */
import App from './App';
import Page404 from './page_templates/static_page/page_404';
import TestPage from './page_templates/static_page/page_test';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route exact path="/" component={App}/>   
        <Route path="/TEST" component={TestPage}/>   
        <Route path="*" component={Page404}/> 
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
