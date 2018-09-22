import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Page404 extends Component {
    render() {
      return (
        <div className="Page404" style={{margin:"auto",width:"600px",color:'#CCC'}}>
          <h1 style={{fontSize:"108px"}}>The Page <br/>Not Found <br/>404</h1>
          <Link to='/'
          style={{fontSize:"25px",background:"#999",color:"#fff",padding:"20px",width:"180px"}}>
            Return Home
          </Link>
        </div>
      );
    }
  }
  
export default Page404;
  