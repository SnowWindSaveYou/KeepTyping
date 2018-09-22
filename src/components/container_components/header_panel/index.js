import React, { Component } from "react";
import './style.css';

import {HeaderBlock} from '../../layout_components'
import PrimaryButton from "../../ui_components/buttons/primary_btn";
import SecondaryButton from "../../ui_components/buttons/secondary_btn";
import ThemeConifg from "@/configs/theme_config";

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
                <div className="to_left" style={{color:ThemeConifg.primary_color,marginLeft:"10px"}}>
                 KeepTyping
                </div>

                <ul className="to_right" style={{color:"#555"}}>
                    <li><PrimaryButton> Login</PrimaryButton></li>
                    <li><SecondaryButton>Regist</SecondaryButton></li>
                    <li>More</li>
                    <li>Notice</li>
                    <li>User</li>
                    <li>Home</li>
                </ul>
            </div>
            
        </HeaderBlock>
      );
    }
  }
export default HeaderPanel;