import React, { Component } from 'react';
/** Components of page */
//import HeaderBlock from '../../components/layout_components/header_block.js';
import TopBlock from '../../components/layout_components/top_block.js';
import MainBlock from '../../components/layout_components/main_block.js';
import SideBlock from '../../components/layout_components/side_block.js';
import ContainerBlock from '../../components/layout_components/container_block.js';
import FooterBlock from '../../components/layout_components/footer_block.js';
import PrimaryButton from '../../components/ui_components/buttons/primary_btn';
import SecondaryButton from '../../components/ui_components/buttons/secondary_btn';

import HeaderPanel from '../../components/container_components/header_panel';
import PostList from '../../components/container_components/post_list';
import PublishPanel from '../../components/container_components/publish_panel';
import Announcement from '../../components/display_components/for_side_block/announcement';
import UserInfo from '../../components/display_components/for_side_block/user_info'
import LoginPanel from '../../components/container_components/login_panel'
import RegistePanel from '../../components/container_components/registe_panel'


import SecureTransfer from '../../helper/secure_transfer'

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

    handleSubmitPost(e){
        console.log(e.target.value)
    }

    render() {
      return (
        <div className="TestPage" style={{background:"#aaa"}}>
            <HeaderPanel/>

            <TopBlock style={{height:"300px",marginBottom:"-100px",background:"#fb2"}}>
            </TopBlock>
            <ContainerBlock style={{background:"#222"}}>
                <SideBlock style={{background:"#123"}}>
                    <LoginPanel/>
                    <RegistePanel/>
                    <UserInfo/>
                    <Announcement/>
                    

                </SideBlock>
                <MainBlock style={{background:"#321"}}>
                    <TopBlock style={{background:"#ccc"}}>
                        <PrimaryButton onClick={()=>{alert("testing")}}> Primary </PrimaryButton>
                        <SecondaryButton>Secondary</SecondaryButton>
                    </TopBlock>

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
  