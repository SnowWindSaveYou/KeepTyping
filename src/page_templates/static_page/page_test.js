import React, { Component } from 'react';
/** Components of page */
import {TopBlock,MainBlock,SideBlock,ContainerBlock,FooterBlock} from '../../components/layout_components/page_blocks'
import CircleBlock from '../../components/layout_components/poly_blocks/circle_block'

import SingleLineEditText from '../../components/ui_components/textareas/singleline_edit_text';

import PrimaryButton from '../../components/ui_components/buttons/primary_btn';
import SecondaryButton from '../../components/ui_components/buttons/secondary_btn';

import HeaderPanel from '../../components/container_components/header_panel';
import PostList from '../../components/container_components/post_list';
import PublishPanel from '../../components/container_components/publish_panel';
import Announcement from '../../components/display_components/for_side_block/announcement';
import UserInfo from '../../components/display_components/for_side_block/user_info'
import LoginPanel from '../../components/container_components/login_panel'
import RegistePanel from '../../components/container_components/registe_panel'

import SecureTransfer from '../../scripts/utils/secure_transfer'
import LoginConroller from '../../scripts/controllers/login_controller'

import NotificationDialog from '../../components/dialog_components/notification_dialog'

class TestPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            topic:'TEST',
            token:null
        }
    }
    componentDidMount(){
        this.setState({
            token:SecureTransfer.getToken()
        })
    }

    handleTestDialog(){
        NotificationDialog.show()
    }
    handleTestToken(){
        console.log(global.token)
    }

    handleSubmitPost(e){
        console.log(e.target.value)
    }

    render() {
      return (
        <div className="TestPage" style={{background:"#aaa"}}>
            <HeaderPanel/>

            <TopBlock style={{height:"300px",marginBottom:"-100px",background:"#fb2"}}>
                <PrimaryButton onClick={()=>this.handleTestDialog()}> Dialog </PrimaryButton>
                <PrimaryButton onClick={()=>this.handleTestToken()}> Token </PrimaryButton>
                <SecondaryButton onClick={()=>LoginConroller.userLogout()}>Logout</SecondaryButton>
                <CircleBlock radiu="30"/>
            </TopBlock>
            <ContainerBlock style={{background:"#222"}}>
                <SideBlock style={{background:"#123"}}>
                    <LoginPanel style={{background:"#fff"}}/>
                    <RegistePanel style={{background:"#fff"}}/>
                    <UserInfo 
                        user_name="Akalin"
                        user_bias="you can't see me"
                        user_folloer="0"
                        user_folloing="0"
                    
                    />
                    <Announcement/>
                    

                </SideBlock>
                <MainBlock style={{background:"#321"}}>

                    {/* test the topic page */}
                    <PostList topic={this.state.topic}/>
                    <PublishPanel topic={this.state.topic} token={this.state.token}/>

                </MainBlock>
            </ContainerBlock>
            <FooterBlock style={{background:"#555",marginTop:"-20px"}}>

            </FooterBlock>

        </div>
      );
    }
  }
  
export default TestPage;
  