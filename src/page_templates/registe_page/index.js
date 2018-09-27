import React, { Component } from 'react';
import BgImage from '@/asset/bg_res/zhihubg.png'
import {LoginContext} from '@/Contexts'
import {PrimaryButton} from '@/components/ui_components'

import RegistePanel from '@/components/container_components/registe_panel'
import './style.css'

class RegistePage extends Component {
    constructor(props) {
      super(props);
      this.state={

      }
  
    }
    componentDidMount() {
      global.setTitle("Registe to Global Keyborad Man Center!");
    }
    render() {
      return (
        <div className="RegistePage">
            <img className="backgroundImage" src={BgImage}></img>
              <LoginContext.Consumer>
              { (value)=>( 
                !value.login ? 
                (<div className="to_center ">
                    <RegistePanel   title="Keep Typing" 
                    titleStyle={{color:global.theme.primary_color, fontSize:"45px"}}
                    sloganStyle={{color:global.theme.font_color}}
                    tableStyle={{color:global.theme.font_color,fontSize:"19px"}}
                    style={{background:"#fff"}}>
                    <div style={{color:"#666",marginBottom:"10px"}}>
                    Join us,improve your typing speed,<br/> Become a super Keyboard Man
                    </div>     
                    </RegistePanel>
                    <PrimaryButton className="toLogin" color1={global.theme.secondary_light_color} color2={global.theme.secondary_color}>
                    Already Have Account? Go Login!
                    </PrimaryButton>
                    </div>)
                 :(<div className="to_center">
                          <PrimaryButton 
                          color1={global.theme.secondary_light_color} 
                          onClick={()=>{this.props.history.push('/')}}>You Are Login Now! Press Me To Start</PrimaryButton>
                   </div>)
              )}
              </LoginContext.Consumer> 
        </div>
      );
    }
  }
  
  export default RegistePage;
  