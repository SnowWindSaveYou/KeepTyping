import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import ReactSVG from "react-svg";
import { PrimaryButton, SecondaryButton, SingleLineEditText } from "@ui";
/**
 * A search bar component.
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  handleKeywordChange(e) {
    this.setState({ keyword: e.target.value });
  }
  handleSubmit() {
    document.location.href = "/search/" + this.state.keyword;
  }
  render() {
    return (
      <form
        style={{ position: "relative", ...this.props.style }}
        onSubmit={e => {
          e.preventDefault();
          this.props.history.push("/search/" + this.state.keyword);
        }}
        method="get"
      >
        <Link to={"/search/" + this.state.keyword}>
          <ReactSVG
            className="to_left"
            svgStyle={{
              width: 15,
              height: 15,
              fill: global.theme.secondary_color,
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 5,
              zIndex: 10,
              margin: "auto",
              marginLeft: 15
            }}
            src="/svg/search.svg"
          />
        </Link>

        <SingleLineEditText
          style={{ minWidth: "150px", width: "100%" }}
          placeholder="Search..."
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleKeywordChange.bind(this)}
          value={this.state.keyword}
        />
      </form>
    );
  }
}

export default withRouter(SearchBar);
