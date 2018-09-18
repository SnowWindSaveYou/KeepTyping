import React, { Component } from "react";
/** Components of page */
//import HeaderBlock from '../../components/layout_components/header_block.js';
import TopBlock from "../../components/layout_components/top_block.js";
import MainBlock from "../../components/layout_components/main_block.js";
import SideBlock from "../../components/layout_components/side_block.js";
import ContainerBlock from "../../components/layout_components/container_block.js";
import FooterBlock from "../../components/layout_components/footer_block.js";
import Login from "../../Login/login.js";
import UserInfo from "../../components/display_components/for_side_block/user_info/index.js";
import PostList from "../../components/container_components/post_list/index.js";
import PublishPanel from "../../components/container_components/public_panel/index.js";
import SubBlock from "../../components/layout_components/sub_block.js";
import PrimaryButton from "../../components/ui_components/buttons/primary_btn/index.js";
// import PrimaryButton from "../../components/ui_components/buttons/primary_btn";
// import SecondaryButton from "../../components/ui_components/buttons/secondary_btn";

// import HeaderPanel from "../../components/container_components/header_panel";
// import PostList from "../../components/container_components/post_list";
// import PublishPanel from "../../components/container_components/publish_panel";
// import Announcement from "../../components/display_components/for_side_block/announcement";
// import UserInfo from "../../components/display_components/for_side_block/user_info";

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wantLogin: false
    };
  }
  readJson() {
    //return String(ThemeData.bilibili_theme);
  }
  handleLoginClick() {
    this.setState({ wantLogin: true ? false : true });
  }

  render() {
    return (
      <div className="TestPage" style={{ background: "#fff" }}>
        <TopBlock
          style={{
            height: "300px",
            marginBottom: "-100px",
            background: "#fb2"
          }}
        >
          {/* Locate on Top
          TODO: put the info of this topic */}
        </TopBlock>
        <ContainerBlock style={{ background: "#222" }}>
          <SideBlock style={{ background: "#123", marginRight: "10px" }}>
            {/* 
                when user click login desplay the login panel 
            */}
            <SubBlock>
              <PrimaryButton onClick={() => this.handleLoginClick()}>
                Login
              </PrimaryButton>
            </SubBlock>
            {this.state.wantLogin ? Login : null}

            <UserInfo />
          </SideBlock>
          <MainBlock style={{ background: "#321" }}>
            {/* Main block contains the main things of this page */}
            <TopBlock style={{ background: "#ccc" }} />
            <PostList />
            <PublishPanel />
          </MainBlock>
        </ContainerBlock>
        <FooterBlock style={{ background: "#555", marginTop: "-20px" }} />
      </div>
    );
  }
}
export default TestPage;
