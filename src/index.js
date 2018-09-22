/**
 * Entrace Page
 * the visit request of user will go through this page 
 * and distribute to each router
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

/** FOR TEST ONLY */
//import './styles/show_location.css';
/** Page Templates */
import App from './App';
import Page404 from './page_templates/static_page/page_404';
import TestPage from './page_templates/static_page/page_test';
import TopicPage from './page_templates/topic_page';
import RegistePagePage from './page_templates/registe_page';


global.setTitle = (title)=>{
    document.title = title;
}

ReactDOM.render(
    <BrowserRouter basename="/">
    <Switch>
        <Route exact path="/" component={RegistePagePage} />   
        <Route path="/topic/:name" component={TopicPage} />   
        <Route path="/test" component={TestPage} />   
        <Route path="/registe" component={RegistePagePage} />   
        <Route path="/*" component={Page404}/>   
    </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
