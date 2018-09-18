/**
 * Publich Panel
 * this is a common input panel for publish the post on topic
 *
 */
import React, { Component } from "react";
import "./index.css";
import SubBlock from "../../layout_components/sub_block";
import MultiLineEditText from "../../ui_components/textareas/multiline_edit_text";
import PrimaryButton from "../../ui_components/buttons/primary_btn";

class PublishPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style ? null : {}
    };
  }
  render() {
    return (
      <SubBlock className="PublishPanel" style={this.state.style}>
        <div className="top">
          <MultiLineEditText hint="what you want to say?" />
        </div>
        <div className="bottom">
          {/* TODO: link to logic function allow user post  */}
          <PrimaryButton id="submit_post">Post</PrimaryButton>
        </div>
      </SubBlock>
    );
  }
}
export default PublishPanel;
