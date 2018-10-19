import React, { Component } from "react";
import "./style.css";

import { SubBlock } from "../../layout_components";
import PrimaryButton from "../../ui_components/buttons/primary_btn";
import { SingleLineEditText } from "@/components/ui_components/";

import RegisteController from "@/scripts/controllers/registe_controller";

/**
 * Display a Register panel in the centre of the register page.
 * Ask for user input.
 * @param props{  }
 */
class RegistePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountID: "",
      userName: "",
      password: ""
    };
  }
  /** Handle the component inputs */
  handleInputAccountOnChange(e) {
    this.setState({ accountID: e.target.value });
  }
  handleInputUserNameOnChange(e) {
    this.setState({ userName: e.target.value });
  }
  handleInputPasswordOnChange(e) {
    this.setState({ password: e.target.value });
  }

  handleRegisterSubmit() {
    RegisteController.userRegiste(
      this.state.accountID,
      this.state.userName,
      this.state.password
    );
  }

  render() {
    return (
      <SubBlock className="RegistePanel" style={this.props.style}>
        <div className="top">
          <h3 className="title" style={this.props.titleStyle}>
            {this.props.title ? this.props.title : "Registe User Account"}
          </h3>
          {this.props.children}
        </div>
        <table className="RegisteTable" style={this.props.tableStyle}>
          <tbody>
            <tr>
              <td> </td>
              <td style={{ width: "700px" }} />
            </tr>
            <tr>
              <td style={this.props.rowTitStyle}>Email</td>
              <td>
                <SingleLineEditText
                  value={this.state.accountID}
                  style={{ width: "100%" }}
                  onChange={this.handleInputAccountOnChange.bind(this)}
                />{" "}
              </td>
            </tr>
            <tr>
              <td style={this.props.rowTitStyle}>Username</td>
              <td>
                <SingleLineEditText
                  value={this.state.userName}
                  style={{ width: "100%" }}
                  onChange={this.handleInputUserNameOnChange.bind(this)}
                />{" "}
              </td>
            </tr>
            <tr>
              <td style={this.props.rowTitStyle}>Password</td>
              <td>
                <SingleLineEditText
                  type="password"
                  value={this.state.password}
                  style={{ width: "100%" }}
                  onChange={this.handleInputPasswordOnChange.bind(this)}
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <PrimaryButton
          className="submitBtn"
          style={this.props.submitStyle}
          onClick={() => this.handleRegisterSubmit()}
        >
          Submit
        </PrimaryButton>
      </SubBlock>
    );
  }
}
export default RegistePanel;
