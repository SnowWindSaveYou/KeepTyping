import React, { Component } from "react";
import axios from "axios";
import { UnderLineEditText, PrimaryButton } from "@ui";
import { LoginContext } from "../../Contexts";
/**
 * A test page.
 */
class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "TEST",
      token: null,
      content: ""
    };
  }
  componentDidMount() {
    let loginCtx = LoginContext.Consumer._currentValue;
    console.log(loginCtx.my_info);
  }

  render() {
    return (
      <div className="TestPage">
        <PrimaryButton onClick={() => {}} />
      </div>
    );
  }
}

export default TestPage;
