import React, { Component } from "react";
import './style.css';



import HeaderBlock from "../../layout_components/header_block"
import PrimaryButton from "../../ui_components/buttons/primary_btn";
import SecondaryButton from "../../ui_components/buttons/secondary_btn";
//import SubBlock from "../../../layout_components/sub_block";

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
                <p className="to_left" style={{color:"#555"}}>Keep Typing</p>

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