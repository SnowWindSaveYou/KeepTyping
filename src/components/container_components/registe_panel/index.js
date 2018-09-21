import React, { Component } from 'react';
import './style.css';

import {SubBlock} from "../../layout_components";
import PrimaryButton from "../../ui_components/buttons/primary_btn";

import RegisteController from "../../../scripts/controllers/registe_controller"

class RegistePanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountID: "",
            userName: "",
            password: "",
        }
    }
    /** Handle the component inputs */
    handleInputAccountOnChange(e) {this.setState({ accountID: e.target.value })}
    handleInputUserNameOnChange(e) {this.setState({ userName: e.target.value })}
    handleInputPasswordOnChange(e) {this.setState({ password: e.target.value })}

    handleRegisteSubmit() {
        RegisteController.userRegiste(this.state.accountID, this.state.userName, this.state.password);
    }

    render() {
        return (
            <SubBlock className="RegistePanel">
                <h3>Registe User Account</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td><input value={this.state.accountID}
                                onChange={this.handleInputAccountOnChange.bind(this)}></input> </td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td><input value={this.state.userName}
                                onChange={this.handleInputUserNameOnChange.bind(this)}></input> </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input value={this.state.password}
                                onChange={this.handleInputPasswordOnChange.bind(this)}></input> </td>
                        </tr>
                        <tr><td><PrimaryButton onClick={() => this.handleRegisteSubmit()}>Submit</PrimaryButton></td></tr>
                    </tbody>
                </table>
            </SubBlock>
        )
    }
}
export default RegistePanel;