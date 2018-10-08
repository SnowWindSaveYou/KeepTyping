import React, { Component } from "react";
import './style.css';

import {HeaderBlock} from '../../layout_components'
import SearchBar from '../../display_components/for_header/search_bar'
import {PrimaryButton,SecondaryButton,UserAvater,DropMenu} from '@ui'

import {LoginShow} from '@controller/dialog_controller';
import {Link} from 'react-router-dom';

import {LoginContext} from '@/Contexts'
import LoginController from '@controller/login_controller'

class HeaderPanel extends Component {
  
    render() {
      return (
        <HeaderBlock>
            <div className="HeaderPanel">
                <div className="to_left" style={{color:global.theme.primary_color,marginLeft:"10px"}}>
                <Link to="/" style={{color:global.theme.primary_color}}>KeepTyping!</Link> 
                </div>

                <LoginContext.Consumer>
                  {value=>(!value.my_info|| !value.login ? (
                    <ul className="to_right">
                    <li><PrimaryButton onClick={()=>LoginShow()}> Login</PrimaryButton></li>
                    <li><Link to="/registe"><SecondaryButton>Regist</SecondaryButton></Link> </li>
                  </ul>
                  ):
                  (<ul className="to_right" style={{color:"#555"}}>

                    <li><UserAvater className="user_head" radiu="20" uid={value.my_info._id} src={value.my_info.avater} 
                        style={{border:"0.1px solid "+global.theme.secondary_color}}/></li>
                    <li style={{color: global.theme.secondary_color,textAlign:"center"}}>
                      <DropMenu menu={[
                        {name:"My Account",func:function(){console.log("test")}},
                        {name:"My Collection",func:function(){console.log("test")}},
                        {name:"Logout",func: ()=>LoginController.userLogout()}
                      ]}>
                        {value.my_info.name}
                      </DropMenu>
                      </li>
                      <li><SearchBar/></li>
                  </ul>) )}
                </LoginContext.Consumer>
            </div>
            
        </HeaderBlock>
      );
    }
  }
export default HeaderPanel;