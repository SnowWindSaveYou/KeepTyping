import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock, SubBlock} from '../../components/layout_components/page_blocks'
import HeaderPanel from '../../components/container_components/header_panel';
import PostList from '../../components/container_components/post_list';
import TopicController from "@/scripts/controllers/topic_controller";
import {LoginContext} from '../../Contexts'

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
    console.log('ss')
    let that = this;
    
    console.log(global.getMyInfo)
  }

  render() {
    return (
      <div className="UserPage" style={{ background: global.theme.back_color}}>
        <HeaderPanel />
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#ffbb22"}}></TopBlock>

      {this.state.user? (
        <ContainerBlock >
          {/* mail block show posts */}
          <MainBlock>
            <SubBlock menu={["Main"]}>
            </SubBlock>
            <PostList posts={this.state.posts}/>

          </MainBlock>
          {/* show page & user detail, and extentions */}
          <SideBlock style={{ marginLeft: "5px" }}>
          

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

export default UserPage;
