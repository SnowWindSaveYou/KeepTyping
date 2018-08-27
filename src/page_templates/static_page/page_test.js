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
import Announcement from '../../components/display_components/for_side_block/announcement';
import UserInfo from '../../components/display_components/for_side_block/user_info'

class TestPage extends Component {

    readJson(){

        //return String(ThemeData.bilibili_theme);
    }

    render() {
      return (
        <div className="TestPage" style={{background:"#f7f7f7"}}>
            <HeaderPanel/>

            <TopBlock style={{height:"300px",marginBottom:"-100px",background:"#fb2"}}>
                TopBlock
            </TopBlock>
            <ContainerBlock style={{background:"#fff"}}>
                <SideBlock style={{background:"#123"}}>
                    SideBlock
                    <UserInfo/>
                    <Announcement/>
                </SideBlock>
                <MainBlock style={{background:"#321"}}>
                    MainBlock
                    <TopBlock style={{background:"#fff"}}>
                        <PrimaryButton onClick={()=>{alert("testing")}}> Primary </PrimaryButton>
                        <SecondaryButton>Secondary</SecondaryButton>
                    </TopBlock>
                    <PostList>

                    </PostList>
                    <FooterBlock style={{background:"#233"}}>
                        FooterBlock
                    </FooterBlock>
                </MainBlock>
            </ContainerBlock>
            <FooterBlock style={{background:"#555",marginTop:"-20px"}}>
                FooterBlock
            </FooterBlock>

        </div>
      );
    }
  }
  
export default TestPage;
  