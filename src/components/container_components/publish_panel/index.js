import React, { Component } from "react";
import './style.css';
import axios from 'axios';

import {SubBlock} from "../../layout_components";
import MultiLineEditText from "../../ui_components/textareas/multiline_edit_text"
import SingleLineEditText from "../../ui_components/textareas/singleline_edit_text"
import PrimaryButton from "../../ui_components/buttons/primary_btn";

import PostController from '../../../scripts/controllers/post_controller'

class PostPublishPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topic:this.props.topic,
      notice:""
    }
  }

  handleSubmitPost() {
    if(this.props.token){
      PostController.postPost(this.props.token,
                              this.props.topic, 
                              this.refs.PostTitle.state.value, 
                              this.refs.PostContent.state.value)
    }else{
      //TODO: notice to login
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
                              hint="What you want to say?"
                              ref="PostTitle"/>
        </div>
        <div className="middle">
          <MultiLineEditText  className="PostContent" 
                              hint="some details..."
                              ref="PostContent"/>
        </div>
        <div className="bottom">
          {this.switchLoginState()}
        </div>
        
      </SubBlock>
    );
  }
}
export default PostPublishPanel;