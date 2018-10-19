import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { SubBlock } from "../../layout_components";

/**
 * A container which displays a list of topics from search result.
 */
class TopicList extends Component {
  renderTopicList() {
    if (this.props.topics) {
      return this.props.topics.map(topic => {
        return (
          <SubBlock
            className="topic_row"
            key={topic.title}
            style={{ background: global.theme.base_color }}
          >
            <div className="to_left">
              <div style={{ color: global.theme.primary_color }}>
                {topic.title}
              </div>
              <div>{topic.description}</div>
            </div>
            {/* <div>{topic.tags}</div> */}
            <Link className="to_right" to={"/t/" + topic.title}>
              Go
            </Link>
            <div className="clearfix" />
          </SubBlock>
        );
      });
    }
  }
  render() {
    return (
      <SubBlock className="TopicList" {...this.props}>
        {this.renderTopicList()}
      </SubBlock>
    );
  }
}
export default TopicList;
