import React, { Component } from 'react';
//import logo from './img/icons/logo.svg';
import './styles/App.css';

/** Components of page */
import {TopBlock,HeaderBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock} from './components/layout_components/page_blocks'


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
