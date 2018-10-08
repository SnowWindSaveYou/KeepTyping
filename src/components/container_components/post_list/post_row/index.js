import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';
import {SubBlock} from "../../../layout_components";
import {formateDate} from '@utils/formater'

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
                <div className="to_left" style={{width:"70%"}}>
                    {/* TODO: reset the connection to post by post id */}
                    <Link className="title" to={'/p/'+this.props.post_id} 
                        style={{color:PRIMARY_COLOR}}>
                        <span className="reply_num">{this.props.reply_num}</span>
                        {this.props.title}</Link>
                    <div className="content" style={{width:"calc(100% - 30px)",wordWrap:"break-word"}}>{this.props.content}</div>
                </div>
                <div className="to_right">
                    <Link to={'/u/'+this.props.author._id} className="author" style={{color:SECONDARY_COLOR}} >{this.props.author.name}</Link>
                    <p className="date">{formateDate(this.props.date)}</p>
                </div>
            </SubBlock>
        );
    }
}

export default PostRow;