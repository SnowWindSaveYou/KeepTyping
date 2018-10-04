import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock, SubBlock} from '../../components/layout_components/page_blocks'
import HeaderPanel from '../../components/container_components/header_panel';
import PostList from '../../components/container_components/post_list';
import PublishPanel from '../../components/display_components/publish_panels/post_publish_panel';
import TopicInfo from '../../components/display_components/show_infos/topic_info';

import TopicController from "@/scripts/controllers/topic_controller";
import {LoginContext} from '@/Contexts'
import PageNavigator from '../../components/display_components/navigators/page_navigator';
import MenuNavigator from '../../components/display_components/navigators/menu_navigator';

class TopicPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      topic:null,
      page:0,
      posts:null,
      post_title:"",
      post_content:"",
    }
  }

  componentDidMount() {
    console.log('ss')
    let that = this;
    TopicController.getTopic(this.props.match.params.name,(topic)=>{
      that.setState({topic:topic})
      that.refreshPage()
    })
  }
  refreshPage(){
    if(this.state.topic){
      let that = this;
      TopicController.getPosts(this.state.topic.title, this.state.page,(posts)=>{
          console.log(this.state.page)
          that.setState({ posts: posts })
      })
    }
  }

  /** handle the submision of post */
  handleOnChangeTitle(e){this.setState({post_title:e.target.value})}
  handleOnChangeContent(e){this.setState({post_content:e.target.value})}
  handleSubmitPost(){
      TopicController.postPost(this.state.topic.title, this.state.post_title, this.state.post_content)
  }
  /** handle the page swape */
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
    this.setState({page:this.state.page+1},()=>{
      that.refreshPage()
    })
  }
  handleChangePage(pageNum){
    let that = this;
    this.setState({page:pageNum},()=>{
      that.refreshPage()
    })
  }
  
  render() {
    return (
      <div className="TopicPage" style={{ background: global.theme.back_color}}>
        <HeaderPanel />
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#ffbb22"}}></TopBlock>

      {this.state.topic? (
        <ContainerBlock >
          {/* mail block show posts */}
          <MainBlock>
            <MenuNavigator menu={["Main"]}>
              
            </MenuNavigator>

            <PostList topic={this.state.topic.title||null} posts={this.state.posts}/>
            <PageNavigator
              page={this.state.page}
              style={{marginBottom: "5px"}}
              onLastPage={this.handleLastPage.bind(this)}
              onNextPage={this.handleNextPage.bind(this)}
              onChangePage={this.handleChangePage.bind(this)}
            />
            <PublishPanel 
              title={this.state.post_title} content={this.state.content}
              onTitleChange={this.handleOnChangeTitle.bind(this)}
              onContentChange={this.handleOnChangeContent.bind(this)}
              onSubmit={()=>this.handleSubmitPost.bind(this)}/>

          </MainBlock>
          {/* show page & user detail, and extentions */}
          <SideBlock style={{ marginLeft: "5px" }}>
          <TopicInfo topic={this.state.topic}/>
          

          </SideBlock>
        </ContainerBlock>):
        <ContainerBlock >
          <SubBlock style={{background:"#fff",height:"256px",textAlign:"center",padding:"30px"}} > 
            <p>─=≡Σ(((つ•̀ω•́)つ))</p>
            <p>I'm Loading...</p>
            <Link to='/' style={{position:"absolute", bottom:"25px",right:"30px"}}>
              Back Home(〒︿〒)
            </Link>
          </SubBlock>
        </ContainerBlock>}

        <FooterBlock style={{ background: "#555", marginTop: "-20px" }}>
        </FooterBlock>
      </div>
    );
  }
}

export default TopicPage;
