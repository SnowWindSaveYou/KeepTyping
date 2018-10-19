import React, { Component } from "react";
import "./style.css";

import { SubBlock } from "../../layout_components";
import ResultPostRow from "./result_post_row";

/**
 * A container for a list of post in the search result page.
 */

class ResultPostList extends Component {
  renderPost(item) {
    return <ResultPostRow key={item._id} post={item} />;
  }
  renderPostList() {
    var post_list = [];
    for (var i in this.props.posts) {
      post_list.push(this.renderPost(this.props.posts[i]));
    }
    if (post_list.length === 0) {
      return (
        <SubBlock
          style={{
            background: global.theme.base_color,
            color: global.theme.font_color,
            padding: "20px",
            textAlign: "center",
            height: "120px"
          }}
        >
          Noting In Here (oﾟ▽ﾟ)o
        </SubBlock>
      );
    }
    return post_list;
  }
  render() {
    return (
      <SubBlock className="ResultPostList" {...this.props}>
        {this.renderPostList()}
      </SubBlock>
    );
  }
}
export default ResultPostList;
