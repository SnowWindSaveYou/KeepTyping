import React, { Component } from "react";

class MoveBlock extends Component {
    constructor(props){
        super(props)
        this.state={
            top:this.props.top ?this.props.top :0 ,
            left:this.props.left ?this.props.left :0,
            anchorX:null,
            anchorY:null,
            drag:false,
            press:false,
            hover:false
        }
    }

    componentDidMount(){
        document.addEventListener('mousedown',(e)=>this.handleMouseDown(e));
        document.addEventListener('mousemove',(e)=>this.handleMouseMove(e));
        document.addEventListener('mouseup',(e)=>this.handleMouseUp(e));
    }

    handleMouseDown(e){
        if(this.state.hover){
            this.setState({
                anchorX: e.clientX - this.state.left,            
                anchorY: e.clientY - this.state.top,
                press:true,
                drag: true
            })
        }
    }
    handleMouseUp(){this.setState({press:false,drag: false})}
    handleMouseMove(e){
       if(this.state.drag){
            var new_top = e.clientY - this.state.anchorY
            var new_left = e.clientX - this.state.anchorX
            this.setState({
                top: new_top,  
                left: new_left,

            })
       }
    }
    
    handleMouseOver(){
        this.setState({hover:true})
        clearTimeout(this.continueDrag);
    }
    handleMouseOut(){
        this.setState({hover:false})
        this.continueDrag = setTimeout(()=>this.dragEnd(),500)
    }
    dragEnd(){
        if(!this.state.hover && this.state.press){
            this.setState({drag:false})
        } 
    }

    render() {
        return (
                <div {...this.props} 
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseLeave={this.handleMouseOut.bind(this)}
                style={{
                    position: "absolute",
                    top:  this.state.top+"px",
                    left: this.state.left+"px",
                    zIndex: "99"
                }}>
                
                {this.props.children} 

                </div>
        )}
}
export default MoveBlock;