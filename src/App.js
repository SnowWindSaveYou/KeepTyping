import React, { Component } from 'react';
//import logo from './img/icons/logo.svg';
import './styles/App.css';

import BgImage from '@/asset/bg_res/zhihubg.png';

/** Components of page */
import {TopBlock,HeaderBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock,CoverBlock} from './components/layout_components/page_blocks'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <CoverBlock>
          <div>
            Hellow Keyborad Man
          </div>
        </CoverBlock>
      </div>
    );
  }
}

export default App;
