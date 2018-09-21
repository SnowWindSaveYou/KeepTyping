import React, { Component } from 'react';
import './style.css';
import {SubBlock} from "../../layout_components";
import PrimaryButton from "../../ui_components/buttons/primary_btn";

import LoginController from "../../../scripts/controllers/login_controller"

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
            <SubBlock className="LoginPanel">
                <h3>Login</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Account</td>
                            <td><input value={this.state.accountID}
                                onChange={this.handleInputAccountOnChange.bind(this)}></input> </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input value={this.state.password}
                                onChange={this.handleInputPasswordOnChange.bind(this)}></input> </td>
                        </tr>
                        <tr><td><PrimaryButton onClick={() => this.handleLoginSubmit()}>Login</PrimaryButton></td></tr>
                    </tbody>
                </table>
            </SubBlock>
        )
    }
}
export default LoginPanel;