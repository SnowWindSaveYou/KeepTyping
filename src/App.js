import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Page404 from './page_templates/404_page/page_404';
import TestPage from './page_templates/static_page/page_test';
import TopicPage from './page_templates/topic_page';
import PostPage from './page_templates/post_page';
import HomePage from './page_templates/home_page';
import SearchPage from './page_templates/search_page'
import UserPage from './page_templates/user_page'
import RegistePagePage from './page_templates/registe_page';

import LoginController from './scripts/controllers/login_controller';

import {LoginContext} from './Contexts'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        login:localStorage.getItem('token') ? true:false,
        my_info:null,
        check_login:true
    }

  }

  componentDidMount(){
    if(this.state.check_login &&this.state.login){
      LoginController.checkLoginState((data)=>{
        this.setState({my_info:data})
      })
      this.setState({check_login:false})
    }
    global.setLogin = (state)=>{
      this.setState({login:state})
    };
    global.getMyInfo = ()=>{
      LoginController.checkLoginState((data)=>{
        this.setState({my_info:data})
      })
    };
    global.pushTopic = (topic)=>{
      console.log(topic)
      console.log(this.state.my_info)
      this.state.my_info.topics.push(topic)
      this.setState({})
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
            <Route path="/u/:name" component={UserPage} />   
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
