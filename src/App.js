import React, { Component } from 'react';
//import logo from './img/icons/logo.svg';
import './styles/App.css';

/** Components of page */
import HeaderBlock from './components/layout_components/header_block.js';
import TopBlock from './components/layout_components/top_block.js';
import MainBlock from './components/layout_components/main_block.js';
import SideBlock from './components/layout_components/side_block.js';
import ContainerBlock from './components/layout_components/container_block.js';
import FooterBlock from './components/layout_components/footer_block.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mainBlockStyle:{
        color:'#000'
      }
    }
  }
  render() {
    return (
      <div className="App">
        <HeaderBlock>
          HeaderBlock
        </HeaderBlock>
        <TopBlock>
          
        </TopBlock>

        <ContainerBlock >
          <SideBlock>
            SideBlock
          </SideBlock>
          <MainBlock >
            MainBlock
          </MainBlock>
          ContainerBlock
        </ContainerBlock>
        <FooterBlock>
          FooterBlock
        </FooterBlock>

      </div>
    );
  }
}

export default App;
