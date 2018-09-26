import React, { Component } from 'react';
import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock} from '../../components/layout_components/page_blocks'
import HeaderPanel from '../../components/container_components/header_panel';
import PostList from '../../components/container_components/post_list';
import PublishPanel from '../../components/container_components/post_publish_panel';
import UserInfo from '@/components/display_components/user_info';
import LoginPanel from '@/components/container_components/login_panel';

import TopicController from "@/scripts/controllers/topic_controller";
import {LoginContext} from '@/Contexts'

class TopicPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      topic:this.props.match.params.name,
      posts:null,
      post_title:"",
      post_content:"",
    }
  }

  componentDidMount() {
    let that = this;
    global.setTitle(this.state.topic+" discover your friend")
    TopicController.getPosts(this.state.topic, (posts)=>{
        that.setState({ posts: posts })
    })
  }

  /**  */
  handleOnChangeTitle(e){this.setState({post_title:e.target.value})}
  handleOnChangeContent(e){this.setState({post_content:e.target.value})}
  handleSubmitPost(){
      TopicController.postPost(this.state.topic, this.state.post_title, this.state.post_content)
  }

  render() {
    return (
      <div className="TopicPage" style={{ background: "#f2f2f2"}}>
        <HeaderPanel />


        
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#fb2" }}></TopBlock>


        <ContainerBlock >
          {/* show page & user detail, and extentions */}
          <SideBlock style={{ marginRight: "5px" }}>

          <LoginContext.Consumer>
            {value=>( value.login ? (<UserInfo />):(<LoginPanel/>))}
          </LoginContext.Consumer>

          </SideBlock>
          {/* mail block show posts */}
          <MainBlock>
            <TopBlock style={{ height: "60px",marginBottom: "5px",background: "#fff" }}></TopBlock>

            <PostList topic={this.state.topic} posts={this.state.posts}/>
            <PublishPanel 
              title={this.state.post_title} content={this.state.content}
              onTitleChange={this.handleOnChangeTitle.bind(this)}
              onContentChange={this.handleOnChangeContent.bind(this)}
              onSubmit={()=>this.handleSubmitPost.bind(this)}/>

          </MainBlock>
        </ContainerBlock>

        <FooterBlock style={{ background: "#555", marginTop: "-20px" }}>
        </FooterBlock>
      </div>
    );
  }
}

export default TopicPage;
