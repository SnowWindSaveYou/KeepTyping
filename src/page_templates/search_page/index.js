import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  TopBlock,
  MainBlock,
  SideBlock,
  ContainerBlock,
  FooterBlock,
  SubBlock
} from "../../components/layout_components/page_blocks";
import HeaderPanel from "../../components/container_components/header_panel";
import TopicList from "../../components/container_components/topic_list";
import ResultPostList from "../../components/container_components/result_post_list";
import UserList from "../../components/container_components/user_list";

import TopicController from "@/scripts/controllers/topic_controller";
import SearchController from "@/scripts/controllers/search_controller";
import { LoginContext } from "@/Contexts";
import { PrimaryButton, MenuNavigator, PageNavigator } from "@ui";

/**
 * The search page template.
 */
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      keyword: this.props.match.params.keyword,
      fillter: "Topic",
      topic_creator: false,
      topics: [],
      posts: [],
      users: []
    };
  }

  componentDidMount() {
    var that = this;
    SearchController.getTopics(this.state.keyword, results => {
      if (results.length === 0) {
        that.setState({ topic_creator: true });
      } else {
        that.setState({ topics: results });
      }
    });
  }
  componentDidUpdate() {
    console.log(this.props.match.params.keyword);
    var that = this;
    if (this.props.match.params.keyword != this.state.keyword) {
      this.setState({ keyword: this.props.match.params.keyword });
      SearchController.getTopics(this.state.keyword, results => {
        if (results.length === 0) {
          that.setState({ topic_creator: true });
        } else {
          that.setState({ topics: results });
        }
      });
    }
  }
  createTopic(topic) {
    TopicController.createTopic(topic, () => {});
  }
  /** handle the filter swape */
  handleChangeFilter(selection) {
    let that = this;
    this.setState({ fillter: selection }, () => {
      switch (selection) {
        case "Topic":
          SearchController.getTopics(this.state.keyword, results => {
            if (results.length === 0) {
              that.setState({ topic_creator: true });
            } else {
              that.setState({ topics: results });
            }
          });
          break;
        case "Post":
          SearchController.getPosts(this.state.keyword, results => {
            that.setState({ posts: results });
          });
          break;
        case "User":
          SearchController.getUsers(this.state.keyword, results => {
            that.setState({ users: results });
          });
          break;
        default:
          break;
      }
    });
  }

  /** handle the page swape */
  handleLastPage() {
    let that = this;
    if (this.state.page > 0) {
      this.setState({ page: this.state.page - 1 }, () => {
        that.refreshPage();
      });
    }
  }
  handleNextPage() {
    let that = this;
    this.setState({ page: this.state.page + 1 }, () => {
      that.refreshPage();
    });
  }
  handleChangePage(pageNum) {
    let that = this;
    this.setState({ page: pageNum }, () => {
      that.refreshPage();
    });
  }

  render() {
    return (
      <div
        className="SearchPage"
        style={{ background: global.theme.back_color }}
      >
        <HeaderPanel />
        <TopBlock
          style={{
            height: "300px",
            marginBottom: "-100px",
            background: "#ffbb22"
          }}
        />

        <ContainerBlock>
          {/* mail block show posts */}
          <MainBlock>
            <MenuNavigator
              menu={["Topic", "Post", "User"]}
              selection={this.state.fillter}
              onChangeSelection={this.handleChangeFilter.bind(this)}
            />
            {this.state.topic_creator && this.state.fillter === "Topic" ? (
              <SubBlock
                className="TopicCreator"
                style={{ background: global.theme.base_color }}
              >
                <p>
                  Topic{" "}
                  <span style={{ color: global.theme.secondary_color }}>
                    {this.state.keyword}
                  </span>{" "}
                  is not Exist
                  <br />
                  You want to Create it?
                </p>
                <PrimaryButton
                  onClick={() => this.createTopic(this.state.keyword)}
                >
                  Create Topic
                </PrimaryButton>
              </SubBlock>
            ) : null}

            <SubBlock
              style={{
                background: global.theme.base_color,
                minHeight: "600px"
              }}
            >
              {this.state.fillter === "Topic" ? (
                <TopicList topics={this.state.topics} />
              ) : null}
              {this.state.fillter === "Post" ? (
                <ResultPostList posts={this.state.posts} />
              ) : null}
              {this.state.fillter === "User" ? (
                <UserList users={this.state.users} />
              ) : null}
            </SubBlock>
          </MainBlock>

          {/* show page & user detail, and extentions */}
          <SideBlock style={{ marginLeft: "5px" }}>
            <SubBlock
              style={{ background: global.theme.base_color, height: "200px" }}
            >
              Search History
            </SubBlock>
          </SideBlock>
        </ContainerBlock>

        <FooterBlock style={{ background: "#555", marginTop: "-20px" }} />
      </div>
    );
  }
}

export default SearchPage;
