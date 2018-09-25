import React, { Component } from "react";
import './style.css';

import {SubBlock} from "../../layout_components";
import {MultiLineEditText,SingleLineEditText,PrimaryButton} from "../../ui_components"
import {notificationShow} from '@/scripts/controllers/dialog_controller'
import PostController from '../../../scripts/controllers/post_controller'

class PostPublishPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post_title:"",
      post_content:""
    }
  }
  handleOnChangeTitle(e){
    this.setState({post_title:e.target.value})
  }
  handleOnChangeContent(e){
    this.setState({post_content:e.target.value})
  }

  handleSubmitPost() {
    if(this.props.token){
      PostController.postPost(this.props.token,
                              this.props.topic, 
                              this.state.post_title, 
                              this.state.post_content)
    }else{
      notificationShow("Please Login First","warn")
      return
    }
  }

  switchLoginState(){
    if(this.props.token){
      console.log("yes login",this.props.token)
      return(
        <PrimaryButton id="submit_post" onClick={() => this.handleSubmitPost()} >Post</PrimaryButton>
      )
    }else{
      console.log("un login",this.props.token)
      return(
        <div>
          <PrimaryButton id="submit_post" onClick={() => this.handleSubmitPost()} >Login</PrimaryButton>
          <p className="notice">Please Login to Join Us</p>
        </div>
       )
    }
  }

  render() {
    return (
      <SubBlock className="PostPublishPanel" >
        <div className="top">
          <SingleLineEditText className="PostTitle" 
                              value={this.state.post_title}
                              onChange={this.handleOnChangeTitle.bind(this)}>
                              What you want to say?</SingleLineEditText>
        </div>
        <div className="middle">
          <MultiLineEditText  className="PostContent" 
                              value={this.state.post_content}
                              onChange={this.handleOnChangeContent.bind(this)}>
                              some details...</MultiLineEditText>
        </div>
        <div className="bottom">
          {this.switchLoginState()}
        </div>
        
      </SubBlock>
    );
  }
}
export default PostPublishPanel;