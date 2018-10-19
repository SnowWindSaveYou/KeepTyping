import React, { Component } from "react";
import "./style.css";
import { LoginContext } from "@/Contexts";

import { SubBlock } from "@layout";
import { MultiLineEditText, SingleLineEditText, PrimaryButton } from "@ui";
/**
 * A panel component used to take user input and publish the new post.
 */
class PostPublishPanel extends Component {
  render() {
    return (
      <SubBlock className="PostPublishPanel">
        <div className="top">
          <SingleLineEditText
            className="PostTitle"
            placeholder="what do you want to say?"
            value={this.props.title}
            onChange={this.props.onTitleChange}
          />
        </div>
        <div className="middle">
          <MultiLineEditText
            className="PostContent"
            placeholder="some details..."
            value={this.props.content}
            onChange={this.props.onContentChange}
          >
            some details...
          </MultiLineEditText>
        </div>
        <div className="bottom">
          <LoginContext.Consumer>
            {value =>
              value.login ? (
                <PrimaryButton
                  id="submit_post"
                  onClick={this.props.onSubmit ? this.props.onSubmit() : null}
                >
                  Post
                </PrimaryButton>
              ) : (
                <div>
                  <PrimaryButton id="submit_post">Login</PrimaryButton>
                  <p className="notice">Please Login to Join Us</p>
                </div>
              )
            }
          </LoginContext.Consumer>
        </div>
      </SubBlock>
    );
  }
}
export default PostPublishPanel;
