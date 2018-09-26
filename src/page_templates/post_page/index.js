import React, { Component } from 'react';
import {formateDate,formateDoc} from '@utils/formater'

import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock, SubBlock, CircleBlock} from '@/components/layout_components'
import HeaderPanel from '@/components/container_components/header_panel';
import ReplyList from '@/components/container_components/reply_list';
import UserInfo from '@/components/display_components/user_info';
import LoginPanel from '@/components/container_components/login_panel';

import PostController from "@/scripts/controllers/post_controller";
import UserController from '@/scripts/controllers/user_controller';
import defaultHead from '@/asset/default_head.png'
import MultiLinePublishPanel from '@/components/container_components/reply_publish_panel'

import {getQuerys} from '@utils/url';
import {LoginContext} from '@/Contexts'

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      topic:null,
      postId:this.props.match.params.name,
      postTitle:null,
      postAuthor:null,
      postContent:null,
      page:getQuerys(this.props).page ?getQuerys(this.props).page:0,
      replys:null,
      reply_content:""
    }
  }

  componentDidMount() {
    console.log(this.props)
    let that = this;
    PostController.getPost(this.state.postId,(data)=>{
        that.setState({ 
          postTitle: data.post_title,
          postContent:data.post_content,
          postAuthor:data.post_author.name,
          postDate: data.updatedAt,
          // replys: data.post_replys
        })
    })
    PostController.getReplys(this.state.postId,0,(data)=>{
        that.setState({
          replys: data.post_replys
        })
    })
  }

    /**  */
    handleOnChangeContent(e){this.setState({reply_content:e.target.value})}
    handleSubmitPost(){
        PostController.postReply(this.state.postId, this.state.reply_content)
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

                <div className="to_left" style={{boxSizing:"border-box",width:"calc(100% - 130px)"}}>
                  <div className="post_title" 
                      style={{ marginLeft:"10px",fontSize:"24px",lineHeight:"36px",color:global.theme.primary_color }}>
                  {this.state.postTitle}</div>
                  <div>
                    <div className="post_author to_left" 
                        style={{ marginLeft:"10px",fontSize:"16px",
                        lineHeight:"35px",color:global.theme.secondary_color }}>
                    {this.state.postAuthor}</div>

                    <div className="post_date to_left" 
                        style={{ marginLeft:"10px",fontSize:"12px",
                        lineHeight:"35px",color:global.theme.font_light_color }}>
                    {formateDate(this.state.postDate)}</div>
                    <div className="clearfix" ></div>
                  </div>
                  <div className="post_content" 
                        style={{ padding:"10px",fontSize:"16px",width:"100%",wordWrap:"break-word",color:global.theme.font_color }}>
                          {this.state.page===0 && this.state.postContent? formateDoc(this.state.postContent) :null}
                    
                  </div>
                </div>
                <div className="clearfix" ></div>
            </SubBlock>

            <ReplyList post={this.state.post} replys={this.state.replys}/>

            <MultiLinePublishPanel value={this.state.reply_content}
                onChange={this.handleOnChangeContent.bind(this)}
                onSubmit={()=>this.handleSubmitPost.bind(this)} />
          </MainBlock>

        {/* show page & user detail, and extentions */}
        <SideBlock >
          <LoginContext.Consumer>
            {value=>( value.login ? (<UserInfo />):(<LoginPanel/>))}
          </LoginContext.Consumer>

        </SideBlock>
        </ContainerBlock>

        <FooterBlock style={{ background: "#555", marginTop: "-20px" }}>
        </FooterBlock>
      </div>
    );
  }
}

export default PostPage;
