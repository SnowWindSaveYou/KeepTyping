import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Page404 from './page_templates/404_page/page_404';
import TestPage from './page_templates/static_page/page_test';
import TopicPage from './page_templates/topic_page';
import PostPage from './page_templates/post_page';
import HomePage from './page_templates/home_page';
import SearchPage from './page_templates/search_page'
import RegistePagePage from './page_templates/registe_page';

import {LoginContext} from './Contexts'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        login:localStorage.getItem('token') ? true:false,
        my_name:null,
        my_topic:[],
        my_following:[],
    }
  }

  componentDidMount(){
    let that = this;
    global.setLogin = (state)=>{
      that.setState({login:state})
    };
  }
  render() {
    return (
      <LoginContext.Provider value={this.state}>
      <BrowserRouter basename="/">
        <Switch>
            <Route exact path="/" component={HomePage}   />   
            <Route exact path="/t" component={HomePage} />   
            <Route exact path="/p" component={HomePage} />  
            <Route exact path="/search" component={HomePage} />   
            <Route path="/t/:name" component={TopicPage} />   
            <Route path="/p/:name" component={PostPage} />   
            <Route path="/search/:keyword" component={SearchPage} />  

            <Route path="/test" component={TestPage} />
            <Route path="/registe" component={RegistePagePage} />   
            <Route path="/*" component={Page404}/>   
        </Switch>
      </BrowserRouter>
      </LoginContext.Provider>
    );
  }
}

export default App;
