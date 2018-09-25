import React, { Component } from 'react';
import {mongoToPost} from '@utils/date_formater'

import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock, SubBlock, CircleBlock} from '@/components/layout_components'
import HeaderPanel from '@/components/container_components/header_panel';
import ReplyList from '@/components/container_components/reply_list';
import PublishPanel from '@/components/container_components/publish_panel';
import UserInfo from '@/components/display_components/user_info';
import LoginPanel from '@/components/container_components/login_panel';

import PostController from "@/scripts/controllers/post_controller";
import UserController from '@/scripts/controllers/user_controller';
import defaultHead from '@/asset/default_head.png'

import {getQuerys} from '@utils/url';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      token:UserController.checkToken(),
      topic:null,
      postId:this.props.match.params.name,
      postTitle:null,
      postAuthor:null,
      postContent:null,
      page:getQuerys(this.props).page ?getQuerys(this.props).page:0,
      replys:null
    }
  }

  componentDidMount() {
    console.log(this.props)
    
    let that = this;
      PostController.getPost(this.state.postId,(data)=>{
      console.log("replys",data)
        that.setState({ 
          postTitle: data.post_title,
          postContent:data.post_content,
          postAuthor:data.post_author,
          postDate: data.updatedAt,
          replys: data.post_replys
        })
    })
  }
  render() {
    return (
      <div className="PostPage" style={{ background: "#f2f2f2"}}>
        <HeaderPanel />
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#fb2" }}></TopBlock>

        <ContainerBlock >
          {/* block show post self */}
          <MainBlock style={{ marginRight: "5px" }}>
            <SubBlock style={{ height: "auto",marginBottom: "5px",background: "#fff" }}>
            
                <div className="to_left " style={{width:"100px",padding:"10px",boxSizing:"border-box"}}>
                  <CircleBlock className="user_head" radiu="35" style={{background:"#fff"}}>
                          <img style={{ width: "100%", height: "100%" }}
                          src={this.props.user_pic ? this.props.user_pic : defaultHead}></img>
                  </CircleBlock>
                </div>
                <div className="to_left">
                  <div className="post_title" 
                      style={{ marginLeft:"10px",fontSize:"30px",color:global.theme.primary_color }}>
                  {this.state.postTitle}</div>
                  <div>
                    <div className="post_author to_left" 
                        style={{ marginLeft:"10px",fontSize:"18px",
                        lineHeight:"35px",color:global.theme.secondary_color }}>
                    {this.state.postAuthor}</div>

                    <div className="post_date to_left" 
                        style={{ marginLeft:"10px",fontSize:"12px",
                        lineHeight:"35px",color:global.theme.font_light_color }}>
                    {mongoToPost(this.state.postDate)}</div>
                  </div>
                  <div className="post_content" 
                        style={{ padding:"10px",fontSize:"16px",
                        lineHeight:"35px",color:global.theme.font_color }}>
                    {this.state.page===0? this.state.postContent:null}
                  </div>
                </div>
            </SubBlock>

            <ReplyList post={this.state.post} replys={this.state.replys}/>

            <PublishPanel post={this.state.postId} token={this.state.token} />
          </MainBlock>

        {/* show page & user detail, and extentions */}
        <SideBlock >
          {this.state.token ? <UserInfo />: <LoginPanel/>}
          </SideBlock>
        </ContainerBlock>

        <FooterBlock style={{ background: "#555", marginTop: "-20px" }}>
        </FooterBlock>
      </div>
    );
  }
}

export default PostPage;
