import React, { Component } from 'react';
import BaseDialog from '../base_dialog';
import CoverBlock from '@/components/layout_components/page_blocks/cover_block';
import { SubBlock } from '../../layout_components';
import ThemeConfig from '@/configs/theme_config';

class NotificationDialog extends Component {
    componentDidMount(){
        console.log("testdia")
    }
    render(){
        return(
            <CoverBlock onClick={()=>{this.props.onClose()}}>
                <SubBlock className="NotificationDialog" 
                        style={{minWidth:"220px",width:"auto",height:"70px",background:"#fff",lineHeight:"70px", overflow:"hidden"}}>
                        <div className="to_left" 
                                style={{background:ThemeConfig.false_color, width:"50px",padding:"0 0 5px 5px",boxSizing:"border-box"}}> Opps </div>
                        <div className="to_left" style={{padding:"0 0 5px 5px"}}>this is a message</div>
                        <div className="clearfix"/>
                </SubBlock>
            </CoverBlock>
        )
    }
}
export default BaseDialog(NotificationDialog);