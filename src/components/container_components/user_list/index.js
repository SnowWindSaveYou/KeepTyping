import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { SubBlock } from "../../layout_components";
import { UserAvater } from "@ui";
/**
 * Display a container which includes a list of user from search result.
 */
class UserList extends Component {
  renderUserList() {
    if (this.props.users) {
      return this.props.users.map(user => {
        return (
          <SubBlock
            className="user_row"
            key={user._id}
            style={{ background: global.theme.base_color }}
          >
            <div className="user_head">
              <UserAvater src={user.avater} />
            </div>
            <div className="to_left middle">
              <div style={{ color: global.theme.primary_color }}>
                {user.name}
              </div>
              <div>{user.bias}</div>
            </div>
            <Link className="to_right" to={"/u/" + user._id}>
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
      <SubBlock className="UserList" {...this.props}>
        {this.renderUserList()}
      </SubBlock>
    );
  }
}
export default UserList;
