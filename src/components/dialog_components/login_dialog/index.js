import React from 'react';
import BaseDialog from '../base_dialog';
import { SubBlock, CoverBlock} from '../../layout_components';
import LoginPanel from '../../container_components/login_panel'

const LoginDialog = (props) =>  {

        return(
            <CoverBlock onClick={()=>{props.onClose(); props.onClick ?props.onClick():null}} zindex="80">
                <SubBlock className="NotificationDialog" 
                        style={{minWidth:"350px",width:"250px",height:"350px",
                                backgound:global.theme.base_color,
                                lineHeight:"20px", 
                                overflow:"hidden"}}>
                        <LoginPanel onLogin={()=>props.onClose()}/>
                </SubBlock>
            </CoverBlock>
        )
}
export default BaseDialog(LoginDialog);