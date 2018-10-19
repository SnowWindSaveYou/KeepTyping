import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { SubBlock } from "../../../layout_components";
import { formateDate } from "@utils/formater";

const PRIMARY_COLOR = global.theme.primary_color;
const SECONDARY_COLOR = global.theme.secondary_color;
const BACKGROUND_COLOR = global.theme.base_color;
const BACKGROUND_COLOR_HOVER = global.theme.base_dark_color;
/**
 * A container for a single post row in the result post page.
 */
class ResultPostRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { backgroundColor: BACKGROUND_COLOR }
    };
  }
  handlerHover() {
    this.setState({ style: { backgroundColor: BACKGROUND_COLOR_HOVER } });
  }
  handlerHoverOut() {
    this.setState({ style: { backgroundColor: BACKGROUND_COLOR } });
  }
  handlerOnClick() {
    console.log("click:", this.state.post_id);
  }
  render() {
    return (
      <SubBlock
        className="ResultPostRow"
        {...this.props}
        key={this.props.post._id}
        style={this.state.style}
        onClick={() => this.handlerOnClick()}
        onMouseOver={this.handlerHover.bind(this)}
        onMouseLeave={this.handlerHoverOut.bind(this)}
      >
        <div className="to_left" style={{ width: "70%" }}>
          {/* TODO: reset the connection to post by post id */}
          <Link
            className="title"
            to={"/p/" + this.props.post._id}
            style={{ color: PRIMARY_COLOR }}
          >
            {this.props.post.post_title}
          </Link>
          <div
            className="content"
            style={{ width: "calc(100% - 30px)", wordWrap: "break-word" }}
          >
            {this.props.post.post_content}
          </div>
        </div>
        <div className="to_right">
          <Link
            to={"/u/" + this.props.post.post_author[0]._id}
            className="author"
            style={{ color: SECONDARY_COLOR }}
          >
            {this.props.post.post_author[0].name}
          </Link>
          <p className="date">{formateDate(this.props.post.updatedAt)}</p>
        </div>
        <div className="clearfix" />
        <div className="bottom">
          <span>from</span>

          <span className="click_num">
            <Link
              to={"/t/" + this.props.post.post_topic}
              style={{ color: global.theme.secondary_color }}
            >
              {this.props.post.post_topic}
            </Link>
          </span>
          <span>see</span>
          <span className="click_num">{this.props.post.post_clicked}</span>
          <span>reply</span>
          <span className="reply_num">{this.props.post.post_reply_count}</span>
          <div className="clearfix" />
        </div>
      </SubBlock>
    );
  }
}

export default ResultPostRow;
