import React, { Component } from "react";
import './style.css';

import {HeaderBlock} from '../../layout_components'
import PrimaryButton from "../../ui_components/buttons/primary_btn";
import SecondaryButton from "../../ui_components/buttons/secondary_btn";
import {LoginShow} from '@controller/dialog_controller';
import {Link} from 'react-router-dom';

import {LoginContext} from '@/Contexts'
import LoginController from '@controller/login_controller'

class HeaderPanel extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }
  
    render() {
      return (
        <HeaderBlock>
            <div className="HeaderPanel">
                <div className="to_left" style={{color:global.theme.primary_color,marginLeft:"10px"}}>
                <Link to="/">Week9</Link> 
                </div>
                <LoginContext.Consumer>
                  {value=>(!value.login ? (
                    <ul className="to_right">
                    <li><PrimaryButton onClick={()=>LoginShow()}> Login</PrimaryButton></li>
                    <li><Link to="/registe"><SecondaryButton>Regist</SecondaryButton></Link> </li>
                  </ul>
                  ):
                  (<ul className="to_right" style={{color:"#555"}}>
                    <li><SecondaryButton onClick={()=>LoginController.userLogout()}> Logout</SecondaryButton></li>
                    <li>More</li>
                    <li>Notice</li>
                    <li>My Profile</li>
                  </ul>) )}
                </LoginContext.Consumer>
            </div>
            
        </HeaderBlock>
      );
    }
  }
export default HeaderPanel;