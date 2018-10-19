import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CoverBlock } from "@/components/layout_components";
/**
 * The 'page not found' page.
 */
class Page404 extends Component {
  render() {
    return (
      <CoverBlock>
        <h1 className="Page404" style={{ fontSize: "108px" }}>
          We are looking for your page,
          <br /> but we can't find it
        </h1>
        <Link
          to="/"
          style={{
            fontSize: "25px",
            background: "#999",
            color: "#fff",
            padding: "20px",
            width: "180px"
          }}
        >
          Return Home
        </Link>
      </CoverBlock>
    );
  }
}

export default Page404;
