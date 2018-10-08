import React, { Component } from 'react';
import './style.css';
import {SubBlock} from "../../layout_components";
import PrimaryButton from "../../ui_components/buttons/primary_btn";
import {LoginContext} from '@/Contexts'
import LoginController from "../../../scripts/controllers/login_controller"
import {UnderLineEditText} from "@/components/ui_components"

class LoginPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountID: "",
            password: "",
        }
    }

    /** Handle the component inputs */
    handleInputAccountOnChange(e) {this.setState({ accountID: e.target.value })}
    handleInputPasswordOnChange(e) {this.setState({ password: e.target.value })}

    handleLoginSubmit() {
        LoginController.userLogin(this.state.accountID,this.state.password,()=>{
            this.props.onLogin()
        });
    }

    render() {
        return (
            <LoginContext.Consumer>
            {value=>(!value.my_info|| !value.login ? (
                <SubBlock className="LoginPanel" style={{background:global.theme.base_color}}>
                    <h1 className="login_title" style={{color:global.theme.primary_color}}>Login to KeepTyping!</h1>
                        <UnderLineEditText className="account_input" placeholder="Your Account"
                            value={this.state.accountID}onChange={this.handleInputAccountOnChange.bind(this)}/>
                        <br/>
                        <UnderLineEditText  className="password_input" placeholder="Your Password" type="password"
                        value={this.state.password} onChange={this.handleInputPasswordOnChange.bind(this)}/>
                        <br/>
                        <PrimaryButton className="login_submit" onClick={() => this.handleLoginSubmit()}>Login</PrimaryButton>
                </SubBlock>
            ):(
            <SubBlock className="LoginPanel" style={{background:global.theme.base_color}}>
                <h1 className="login_title" style={{color:global.theme.primary_color}}>
                WelCome to KeepTyping!
                </h1>
            </SubBlock>
            ))}</LoginContext.Consumer>

        )
    }
}
export default LoginPanel;