import React, { Component } from 'react';
import * as layout from '../../components/layout_components/page_blocks'
import {Link} from 'react-router-dom';
import {LoginContext} from '@/Contexts'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }


  render() {
    return (
      <div className="HomePage" style={{ background: "#f2f2f2",color:"#fff"}}>
        <layout.CoverBlock>
          HomePage
          <div>
            <Link to="/TEST"><button>Test</button></Link>
            <Link to="/t/TEST"><button>Topic</button></Link>
            <Link to="/registe"><button>Registe</button></Link>
          </div>
          <LoginContext.Consumer>
            {value=>(<p>{value.login}</p>)}
          </LoginContext.Consumer>
          
        </layout.CoverBlock>
      </div>
    );
  }
}

export default HomePage;
