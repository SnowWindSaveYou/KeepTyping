import React, { Component } from 'react';
import './style.css';
import {SubBlock} from "../../layout_components";
import PrimaryButton from "../../ui_components/buttons/primary_btn";

import LoginController from "../../../scripts/controllers/login_controller"
import {SingleLineEditText} from "@/components/ui_components"

class LoginPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountID: "",
            password: ""
        }
    }

    /** Handle the component inputs */
    handleInputAccountOnChange(e) {this.setState({ accountID: e.target.value })}
    handleInputPasswordOnChange(e) {this.setState({ password: e.target.value })}

    handleLoginSubmit() {
        LoginController.userLogin(this.state.accountID,this.state.password);
    }

    render() {
        return (
            <SubBlock className="LoginPanel" {...this.props}>
                <h3>Login</h3>
                <table>
                    <tbody>
                        <tr><td></td><td style={{width:"200px"}}></td></tr>
                        <tr>
                            <td>Account</td>
                            <td><SingleLineEditText value={this.state.accountID}
                                onChange={this.handleInputAccountOnChange.bind(this)}></SingleLineEditText> </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><SingleLineEditText value={this.state.password}
                                onChange={this.handleInputPasswordOnChange.bind(this)}></SingleLineEditText> </td>
                        </tr>
                        <tr><td><PrimaryButton onClick={() => this.handleLoginSubmit()}>Login</PrimaryButton></td></tr>
                    </tbody>
                </table>
            </SubBlock>
        )
    }
}
export default LoginPanel;