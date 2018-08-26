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

/** Page Templates */
import App from './App';
import Page404 from './page_templates/static_page/page_404';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>   
        <Route path="*" component={Page404}/> {/* the undefinded url will go to 404 page*/}
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
