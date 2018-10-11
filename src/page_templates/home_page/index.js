import React, { Component } from 'react';
import BgImage from '@/asset/bg_res/cityshadow.jpg'
import ReactSVG from 'react-svg';
import SearchBar from '@display/for_header/search_bar'
import HeaderPanel from '@/components/container_components/header_panel';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }


  render() {
    return (
      <div className="HomePage" style={{ background: "#f2f2f2",color:"#fff"}}>
        <HeaderPanel/>
        <img className="backgroundImage" src={BgImage}></img>
        <div className="to_center">
            <ReactSVG className="web_logo" src="/logo.svg" 
              svgStyle={{position:"relative"}}/>
            <SearchBar style={{width:"300px"}}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
