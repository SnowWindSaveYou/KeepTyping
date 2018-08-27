import React, { Component } from "react";
import './style.css';
import SubBlock from "../../../layout_components/sub_block";

const AnnouncementData = "The website is building, Nice to meet you 0v0, this also is a test for SubBlock for SideBlock"

class Announcement extends Component {
    constructor(props){
      super(props);
      this.state = {
        style:this.props.style ? this.props.style: {
        },
      }
    }
  
    render() {
      return (
          <div className="Announcement">
            <SubBlock style={this.state.style}>
                <div className="title">
                    <h3>Announcement</h3>
                </div>
                <div className="content">
                    {AnnouncementData}

                    <br/><br/>
                </div>
            </SubBlock>
          </div>
        
      );
    }
  }
  export default Announcement;