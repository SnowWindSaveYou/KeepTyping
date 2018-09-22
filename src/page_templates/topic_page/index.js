import React, { Component } from 'react';
import {TopBlock,HeaderBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock} from '../../components/layout_components/page_blocks'
import HeaderPanel from '../../components/container_components/header_panel';
import PostList from '../../components/container_components/post_list';
import PublishPanel from '../../components/container_components/publish_panel';
import Announcement from '../../components/display_components/for_side_block/announcement';
import UserInfo from '@/components/display_components/user_info';
import LoginPanel from '@/components/container_components/login_panel';


import SecureTransfer from '@/scripts/utils/secure_transfer';
import UserController from '@/scripts/controllers/user_controller';

class TopicPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      token:UserController.checkToken(),
      topic:this.props.match.params.name
    }

  }

  componentDidMount() {
    this.setState({
      token:SecureTransfer.getToken()
    })
    //console.log("param", this.props.match.params.name)
  }
  render() {
    return (
      <div className="TopicPage" style={{ background: "#f2f2f2"}}>
        <HeaderPanel />
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#fb2" }}></TopBlock>

        <ContainerBlock >
          {/* show page & user detail, and extentions */}
          <SideBlock style={{ marginRight: "5px" }}>
          {
            this.state.token ? <UserInfo />: <LoginPanel/>
          }
            
          </SideBlock>
          {/* mail block show posts */}
          <MainBlock>
            <TopBlock style={{ height: "60px",marginBottom: "5px",background: "#fff" }}></TopBlock>

            <PostList topic={this.state.topic} />
            <PublishPanel topic={this.state.topic} token={this.state.token} />

          </MainBlock>
        </ContainerBlock>

        <FooterBlock style={{ background: "#555", marginTop: "-20px" }}>
        </FooterBlock>
      </div>
    );
  }
}

export default TopicPage;
