import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import UserInfo from '@/components/display_components/show_infos/user_info';
import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock, SubBlock} from '@layout'
import HeaderPanel from '../../components/container_components/header_panel';
import ResultPostList from '../../components/container_components/result_post_list';
import {SecondaryButton} from "@ui";
import UserController from '@controller/user_controller'
import {LoginContext} from '@/Contexts'

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      userId: this.props.match.params.name,
      user:null,
      posts:null,
    }
  }

  componentDidMount() {
    var that = this;
    if(this.state.userId){
      UserController.getUser(this.state.userId,(user)=>{
        that.setState({user:user},()=>{
            UserController.getUserPosts(this.state.userId,(posts)=>{
              that.setState({posts: posts})
            })
        })
      })
    }
  }
  handleJumpLink(my_info){
    if(my_info._id==this.props.match.params.name){
      this.props.history.push('/m')
    }
  }
  renderUserTopics(topics){
    return topics.map((topic)=>{
      return(<SecondaryButton key={topic} onClick={()=>{this.props.history.push('/t/'+topic)}}>
        {topic}
      </SecondaryButton>)
    })
  }
  render() {
    return (
      <div className="UserPage" style={{ background: global.theme.back_color}}>
      <LoginContext.Consumer>
        {value=> value.my_info?(
          this.handleJumpLink(value.my_info)
        ):null}
      </LoginContext.Consumer>
        <HeaderPanel />
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#ffbb22"}}></TopBlock>

      {this.state.user? (
        <ContainerBlock >
          {/* show page & user detail, and extentions */}
          <SideBlock style={{ marginRight: "5px" }}>
          <UserInfo user={this.state.user}/>
          </SideBlock>
          {/* mail block show posts */}
          <MainBlock>
            <SubBlock style={{background:global.theme.base_color,padding:"10px",marginBottom:"2px"}}>
              <p style={{color:global.theme.primary_color}}>His Topics</p>
              {this.renderUserTopics(this.state.user.topics)}
            </SubBlock>
        
            <ResultPostList posts={this.state.posts}/>
          </MainBlock>

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

export default UserPage;
