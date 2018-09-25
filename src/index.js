/**
 * Entrace Page
 * the visit request of user will go through this page 
 * and distribute to each router
 */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import '@/configs/theme'
import './index.css';

/** FOR TEST ONLY */
//import './styles/show_location.css';
/** Page Templates */
import App from './App';
import Page404 from './page_templates/404_page/page_404';
import TestPage from './page_templates/static_page/page_test';
import TopicPage from './page_templates/topic_page';
import PostPage from './page_templates/post_page';
import RegistePagePage from './page_templates/registe_page';


global.setTitle = (title)=>{
    document.title = title;
}

ReactDOM.render(
    <BrowserRouter basename="/">
    <Switch>
        <Route exact path="/" component={App} />   
        <Route path="/t/:name" component={TopicPage} />   
        <Route path="/p/:name" component={PostPage} />   
        <Route path="/test" component={TestPage} />   
        <Route path="/registe" component={RegistePagePage} />   
        <Route path="/*" component={Page404}/>   
    </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
