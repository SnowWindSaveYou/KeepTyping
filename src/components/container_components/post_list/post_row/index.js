import React, { Component } from "react";
import './style.css';
import {SubBlock} from "../../../layout_components";
import {mongoToPost} from '@utils/date_formater'

const PRIMARY_COLOR = global.theme.primary_color;
const SECONDARY_COLOR = global.theme.secondary_color
const BACKGROUND_COLOR = global.theme.base_color;
const BACKGROUND_COLOR_HOVER = global.theme.base_dark_color;

class PostRow extends Component {
    constructor(props){
        super(props);
        this.state={
            style:{backgroundColor:BACKGROUND_COLOR}
        }
    }
    handlerHover(){
        this.setState({style:{backgroundColor:BACKGROUND_COLOR_HOVER}});
    }
    handlerHoverOut(){
        this.setState({style:{backgroundColor:BACKGROUND_COLOR}})
    }
    handlerOnClick(){
        console.log('click:',this.state.post_id)
    }
    render(){
        return (
            <SubBlock className="PostRow" 
                {...this.props}
                key={this.props.postId} 
                style={this.state.style}
                onClick={()=>this.handlerOnClick()}
                onMouseOver={this.handlerHover.bind(this)}
                onMouseLeave={this.handlerHoverOut.bind(this)}>
                <div className="left">
                    {/* TODO: reset the connection to post by post id */}
                    <a className="title" href={'/p/'+this.props.post_id} 
                        style={{color:PRIMARY_COLOR}}>
                        <span className="reply_num">{this.props.reply_num}</span>
                        {this.props.title}</a>
                    <div className="content">{this.props.content}</div>
                </div>
                <div className="right">
                    <a className="author" style={{color:SECONDARY_COLOR}} >{this.props.author}</a>
                    <p className="date">{mongoToPost(this.props.date)}</p>
                </div>
            </SubBlock>
        );
    }
}

export default PostRow;