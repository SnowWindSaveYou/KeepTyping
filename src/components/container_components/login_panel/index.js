import React, { Component } from 'react';
import axios from 'axios';
import crypto from 'crypto';
import './style.css';

import SubBlock from "../../layout_components/sub_block";
import PrimaryButton from "../../ui_components/buttons/primary_btn";
import SecureTransfer from '../../../helper/secure_transfer'

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
        let that = this;
        /** registe the session and get AES encrypt key */
        axios.get('/api/m/login/createKey')
            .then(function (res) {
                // generate secret key
                var buffer = new Buffer.from(res.data.prime.data);
                var DH = crypto.createDiffieHellman(buffer)
                DH.generateKeys()
                var my_public = DH.getPublicKey();
                buffer = new Buffer.from(res.data.server_key.data);
                var my_secret = DH.computeSecret(buffer);
                // first hash password in client part
                const hash_password = crypto.createHash('sha256');
                hash_password.update(that.state.password)
                var row_msg = {
                    user_id:that.state.accountID,
                    user_password:hash_password.digest('hex')
                }
                // encrypt raw message by aes cbc
                var my_iv = res.data.iv;
                var cipher = crypto.createCipher('aes-128-cbc', my_secret,my_iv);
                var cipherResult = cipher.update(JSON.stringify(row_msg), 'utf8', 'hex');
                cipherResult += cipher.final('hex')
                // comform Login 
                axios.post('/api/m/login/comformLogin', {
                    cipher_msg: cipherResult,
                    client_keys: my_public
                }, {
                    headers: {'Content-Type': 'application/json'} 
                })
                .then(function (res) {
                        if(res.data.success){
                            // if login success, decode responde msg to get token
                            console.log("my_iv",my_iv)
                            var decipher = crypto.createDecipher('aes-128-cbc',my_secret,my_iv);
                            var decrypted = decipher.update(res.data.data,'hex','utf8');
                            decrypted += decipher.final('utf8')

                            console.log("successful",decrypted);
                            localStorage.setItem('token',decrypted,{path:'/'})
                            localStorage.setItem('ic',my_secret)                     
                        }else{
                            console.log(res.data.message);
                        }
                        
                    }).catch(function (err) {
                        console.log(err);
                    })

            }).catch(function (err) {
                console.log(err);
            })

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