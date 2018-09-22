import React, { Component } from 'react';
import BgImage from '@/img/bg_res/zhihubg.png'
import {ContainerBlock} from '@/components/layout_components'
import {PrimaryButton} from '@/components/ui_components'

import RegistePanel from '@/components/container_components/registe_panel'
import ThemeConfig from '@/configs/theme_config';
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
            <ContainerBlock >
                <div className="RegistePanel" >
                  <RegistePanel   title="Keep Typing" 
                                  titleStyle={{color:ThemeConfig.primary_color, fontSize:"45px"}}
                                  sloganStyle={{color:ThemeConfig.font_color}}
                                  tableStyle={{color:ThemeConfig.font_color,fontSize:"19px"}}
                                  style={{background:"#fff"}}>
                                <div style={{color:"#666",marginBottom:"10px"}}>
                                  Join us,improve your typing speed,<br/> Become a super Keyboard Man
                                </div>     
                  </RegistePanel>
                  <PrimaryButton className="toLogin" color1={ThemeConfig.secondary_light_color} color2={ThemeConfig.secondary_color}>
                    Already Have Account? Go Login!
                  </PrimaryButton>
                </div>
            </ContainerBlock>
        </div>
      );
    }
  }
  
  export default RegistePage;
  