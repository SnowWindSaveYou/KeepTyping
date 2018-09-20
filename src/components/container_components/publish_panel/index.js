import React, { Component } from "react";
import './style.css';
import axios from 'axios';

import SubBlock from "../../layout_components/sub_block";
import MultiLineEditText from "../../ui_components/textareas/multiline_edit_text"
import SingleLineEditText from "../../ui_components/textareas/singleline_edit_text"
import PrimaryButton from "../../ui_components/buttons/primary_btn";

import SecureTransfer from '../../../helper/secure_transfer'

class PostPublishPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topic:this.props.topic,
      style: this.props.style ? null : {
      }
    }
  }

  handleSubmitPost() {
    if(this.props.token){
      console.log("token",this.props.token);
      var ic = this.props.token.ic;
      var token = this.props.token.token;
      console.log("my token", token)
      let that = this;
      console.log(this.refs.PostTitle.state.value)
      console.log(this.refs.PostContent.state.value)
      axios.post('/api/m/topic/post/'+this.props.topic,{
        post_title:that.refs.PostTitle.state.value,
        post_content:that.refs.PostContent.state.value

      },{
        headers: {'Token': token, 
                  'IV':SecureTransfer.getRand()} 
      }).then(function(res){

      }).catch(function(err){
        console.log(err)
      })
      
    }else{
      //TODO: notice to login
      return
    }
    
    
  }

  render() {
    return (
      <SubBlock className="PostPublishPanel" style={this.state.style}>
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
          <PrimaryButton id="submit_post" onClick={() => this.handleSubmitPost()} >Post</PrimaryButton>
        </div>

      </SubBlock>
    );
  }
}
export default PostPublishPanel;