import React, { Component } from 'react';
import axios from 'axios';
import crypto from 'crypto';
import './style.css';

import SubBlock from "../../layout_components/sub_block";
import PrimaryButton from "../../ui_components/buttons/primary_btn";

class RegistePanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountID: "",
            userName: "",
            password: "",
            my_key: null,
            my_secret: null,
            my_iv: null,
        }
    }

    componentDidMount() {
        let that = this;
        /** registe the session and get AES encrypt key */
        axios.get('/api/m/registe/createKey')
            .then(function (res) {
                var buffer = new Buffer.from(res.data.prime.data);
                var DH = crypto.createDiffieHellman(buffer)
                DH.generateKeys()
                var my_public = DH.getPublicKey();
                that.setState({ my_key: my_public });
                buffer = new Buffer.from(res.data.server_key.data);
                var secret = DH.computeSecret(buffer);
                that.setState({ my_secret: secret });
                that.setState({ my_iv: res.data.iv });
            }).catch(function (err) {
                console.log(err);
            })
    }

    /** Handle the component inputs */
    handleInputAccountOnChange(e) {this.setState({ accountID: e.target.value })}
    handleInputUserNameOnChange(e) {this.setState({ userName: e.target.value })}
    handleInputPasswordOnChange(e) {this.setState({ password: e.target.value })}

    handleRegisteSubmit() {
        let that = this;
        const hash_password = crypto.createHash('sha256');
        hash_password.update(this.state.password)
        var row_msg = {
            user_id:this.state.accountID,
            user_name:this.state.userName,
            user_password:hash_password.digest('hex')
        }
        var cipher = crypto.createCipher('aes-128-cbc', this.state.my_secret, this.state.my_iv);
        var cipherResult = cipher.update(JSON.stringify(row_msg), 'utf8', 'hex');
        cipherResult += cipher.final('hex')

        axios.post('/api/m/registe/registeUser', {
            cipher_msg: cipherResult,
            client_keys:this.state.my_key
        }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                if (res) {
                    console.log(res)
                }
            }).catch(function (err) {
                console.log(err);
            })
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