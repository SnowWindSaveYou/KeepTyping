import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import {formateDate,formateDoc} from '@utils/formater'

import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock, SubBlock, CircleBlock} from '@/components/layout_components'
import HeaderPanel from '@/components/container_components/header_panel';
import ReplyList from '@/components/container_components/reply_list';
import UserInfo from '@/components/display_components/show_infos/user_info';
import PostInfo from '@/components/display_components/show_infos/post_info';
import LoginPanel from '@/components/container_components/login_panel';

import PostController from "@/scripts/controllers/post_controller";
import UserController from '@/scripts/controllers/user_controller';
import defaultHead from '@/asset/default_head.png'
import MultiLinePublishPanel from '@/components/display_components/publish_panels/reply_publish_panel'
import {UserAvater,PageNavigator} from '@ui';
import {getQuerys} from '@utils/url';
import {LoginContext} from '@/Contexts'

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      topic:null,
      postId:this.props.match.params.name,
      post:null,
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
          post:data
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

    /** handle the page swape */
    refreshPage(){
      if(this.state.topic){
        let that = this;
        PostController.getReplys(this.state.postId,this.state.page,(data)=>{
          that.setState({
            replys: data.post_replys
          })
      })
      }
    }
    handleLastPage(){
      let that = this;
      if(this.state.page>0){
        this.setState({page:this.state.page-1},()=>{
          that.refreshPage()
        })
      }
    }
    handleNextPage(){
      let that = this;
      if(this.state.page+1 < (this.state.post.post_reply_count /global.setting.page_row)){
        this.setState({page:this.state.page+1},()=>{
          that.refreshPage()
        })
      }
    }
    handleChangePage(pageNum){
      let that = this;
      this.setState({page:pageNum},()=>{
        that.refreshPage()
      })
    }

  render() {
    return (
      <div className="PostPage" style={{ background: "#f2f2f2"}}>
        <HeaderPanel />
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#fb2" }}></TopBlock>
        

          {this.state.post?(
            <ContainerBlock >
        <Link to={"/t/"+this.state.post.post_topic}>
          <SubBlock className="topic_title" style={{background:global.theme.primary_color,color:global.theme.base_color}}>
            {this.state.post.post_topic}
          </SubBlock>
          </Link>

          <MainBlock style={{ marginRight: "5px" }}>
            <SubBlock style={{ height: "auto",marginBottom: "5px",background: "#fff" }}>
                <div className="to_left " style={{width:"100px",padding:"10px",boxSizing:"border-box"}}>
                  <UserAvater className="user_head" 
                    uid={this.state.post.post_author._id}
                    src={this.state.post.post_author.avater}/>
                </div>

                <div className="to_left" style={{boxSizing:"border-box",width:"calc(100% - 130px)"}}>
                  <div className="post_title" style={{ marginLeft:"10px",fontSize:"24px",lineHeight:"36px",color:global.theme.primary_color }}>
                  `{this.state.post.post_title}</div>
                  <div>
                    <div className="post_author to_left" 
                        style={{ marginLeft:"10px",fontSize:"16px",
                        lineHeight:"35px",color:global.theme.secondary_color }}>
                      {this.state.post.post_author.name}
                    </div>

                    <div className="post_date to_left" 
                        style={{ marginLeft:"10px",fontSize:"12px",
                        lineHeight:"35px",color:global.theme.font_light_color }}>

                    {formateDate(this.state.post.updatedAt) }</div>

                    <div className="clearfix" ></div>
                  </div>
                  <div className="manage_panel" style={{color:global.theme.font_light_color}}>
                    <a>delete</a>
                  </div>

                  <div className="post_content" 
                        style={{ padding:"10px",fontSize:"16px",width:"100%",wordWrap:"break-word",color:global.theme.font_color }}>
                          {formateDoc(this.state.post.post_content)}
                    
                  </div>
                </div>
                <div className="clearfix" ></div>
            </SubBlock>

            <ReplyList post={this.state.post} replys={this.state.replys}/>
            <PageNavigator page={this.state.page}
              style={{marginBottom: "5px"}}
              count={this.state.post.post_reply_count}
              onLastPage={this.handleLastPage.bind(this)}
              onNextPage={this.handleNextPage.bind(this)}
              onChangePage={this.handleChangePage.bind(this)}/>

            <MultiLinePublishPanel value={this.state.reply_content}
                onChange={this.handleOnChangeContent.bind(this)}
                onSubmit={()=>this.handleSubmitPost.bind(this)} />
          </MainBlock>

        {/* show page & user detail, and extentions */}
        <SideBlock >
          <UserInfo user={this.state.post.post_author}/>
            <PostInfo post={this.state.post}></PostInfo>
        </SideBlock>
        </ContainerBlock>
          ):null}

     

        <FooterBlock style={{ background: "#555", marginTop: "-20px" }}>
        </FooterBlock>
      </div>
    );
  }
}

export default PostPage;
