import React, { Component } from 'react';
import logo from './img/icons/logo.svg';
import './styles/App.css';

/** Components of page */
import HeaderBlock from './components/main_block_components/header_block';
import TopBlock from './components/main_block_components/top_block';
import MainBlock from './components/main_block_components/main_block';
import SideBlock from './components/main_block_components/side_block';



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
          <p>TopBlock</p>
        </TopBlock>

        <MainBlock style={this.state.mainBlockStyle}>
          <p>MainBlock</p>
          <SideBlock>
            SideBlock
          </SideBlock>
          <MainBlock>
            MainBlock
          </MainBlock>
            
        </MainBlock>
      </div>
    );
  }
}

export default App;
