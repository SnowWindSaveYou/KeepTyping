import React, { Component } from "react";
import './style.css';

import {PrimaryButton,SecondaryButton} from '@ui'
import {Link} from 'react-router-dom';

class DropMenu extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
    }
    handleMouseOver(){this.setState({visible:true})}
    handleMouseLeave(){this.setState({visible:false})}
    renderMenu(){
        return this.props.menu.map((item)=>{
            return(
                <div key={item.name} onClick={item.func?()=>item.func():null} style={{color:global.theme.font_light_color}}>
                    {item.link?(
                        <Link to={item.link} 
                            style={{color:global.theme.font_color}}>
                        {item.name}
                        </Link>
                    ):(
                        item.name
                    )}
                </div>
            )
        })
    }
    render() {
      return (
        <label  className="DropMenu"
                onMouseOver={this.handleMouseOver.bind(this)} 
                onMouseLeave={this.handleMouseLeave.bind(this)}>
            {this.props.children}
            <div className="menu_list" style={{background:global.theme.base_color, 
                        visibility: this.state.visible?"visible" :"hidden", 
                        ...this.props.menustyle}}>
                {this.props.menu?this.renderMenu():null}
            </div>
        </label>
      );
    }
  }
export default DropMenu;