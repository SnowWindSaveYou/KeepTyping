import React from 'react';
import ReactSVG from 'react-svg'
import BaseDialog from '../base_dialog';
import CoverBlock from '@/components/layout_components/page_blocks/cover_block';
import { SubBlock } from '../../layout_components';
// import NOTICE_ICON from '@/asset/svg/information.svg'
// import WARN_ICON from '@/asset/svg/warning.svg'
// import ERROR_ICON from '@/asset/svg/wrong.svg'
// import SUCCESS_ICON from '@/asset/svg/success.svg'

const NotificationDialog = (props) =>  {

        return(
            <CoverBlock onClick={()=>{props.onClose()}}>
                <SubBlock className="NotificationDialog" 
                        onClick={()=>{console.log(props)}}
                        style={{minWidth:"250px",width:"auto",height:"70px",
                                background:(()=>{
                                        switch(props.type){
                                                case true: return global.theme.true_color;
                                                case false: return global.theme.false_color;
                                                case "warn": return global.theme.warn_color;
                                                case "notice": return global.theme.notice_color;
                                                default: return global.theme.notice_color;
                                        }
                                })(),
                                lineHeight:"70px", 
                                overflow:"hidden"}}>

                        <ReactSVG className="to_left" 
                                svgStyle={{ width: 35, height: 35, fill:"#fff",
                                                position:"absolute",top:0, bottom:0,margin:"auto",marginLeft:15 }}
                                src={(()=>{
                                        switch(props.type){
                                                case true: return "svg/success.svg";
                                                case false: return "svg/wrong.svg";
                                                case "warn": return "svg/warning.svg";
                                                case "notice": return "svg/information.svg";
                                                default: return "logo.svg";
                                        }
                                })()} ></ReactSVG>

                        <div className="to_left" style={{padding:"0 0 5px 65px",color:"#fff"}}>
                                {props.message}
                        </div>
                </SubBlock>
            </CoverBlock>
        )
}
export default BaseDialog(NotificationDialog);