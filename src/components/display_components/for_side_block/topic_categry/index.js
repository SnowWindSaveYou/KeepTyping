import React, { Component } from "react";
import './style.css';
import {SubBlock} from "../../../layout_components";

class TopicCategory extends Component {
    /** Test Only */
    TopicCategoryData = {
      "Game":["OnlineGame","VedioGame","MobileGame"],
      "School":["HighSchool","ParimarySchool","University"],
      "Location":["Sydney","NSW","USA"],
      "Life":["Food","Photo","Travel","DIY",],
      "Novel":["Fantacy","History","Love","Moden"]
    }
    constructor(props){
      super(props);
      this.state = {
        style:this.props.style ? null: {
        }
      }
    }
  
    render() {
      return (
        <div className="TopicCategory" >
          <SubBlock style={this.state.style}>
            
          </SubBlock>
        </div>
        
      );
    }
  }
export default TopicCategory;