import React, { Component } from "react";
import './style.css';
import {LoginContext} from '@/Contexts'
import {SubBlock} from "../../layout_components";
import {MultiLineEditText,PrimaryButton} from "../../ui_components"
import {notificationShow} from '@/scripts/controllers/dialog_controller'

class ReplyPublishPanel extends Component {
  render() {
    return (
      <SubBlock className="ReplyPublishPanel" style={{background:global.theme.base_color}}>
        <div className="top">
        </div>
        <div className="middle" >
          <MultiLineEditText  className="PostContent" 
                              value={this.props.value}
                              onChange={this.props.onChange?this.props.onChange:null }>say some thing</MultiLineEditText>
        </div>
        <div className="bottom">
          <LoginContext.Consumer>
            {value=>( value.login ? 
              (<PrimaryButton id="submit_post" onClick={this.props.onSubmit?this.props.onSubmit():null} >Post</PrimaryButton>):
              (<div>
                <PrimaryButton id="submit_post" >Login</PrimaryButton>
                <p className="notice">Please Login to Join Us</p>
              </div>)
              )}
          </LoginContext.Consumer>
        </div>
      </SubBlock>
    );
  }
}
export default ReplyPublishPanel;