import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import { PrimaryButton, SecondaryButton, SingleLineEditText } from '@ui'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            keyword:""
        }
    }
    handleKeywordChange(e){
        this.setState({keyword:e.target.value})
    }
    handleSubmit(){
        document.location.href = "/search/"+this.state.keyword;
    }
    render(){
        return (

            <form style={{position:"relative"}}  action={"/search/"+this.state.keyword} method="get">
                <ReactSVG className="to_left"
                    svgStyle={{
                        width: 15, height: 15, fill: global.theme.secondary_color,
                        position: "absolute", top: 0, bottom: 0,right:5,zIndex:10, margin: "auto", marginLeft: 15
                    }}
                    src='/svg/search.svg'
                    onClick={this.handleSubmit.bind(this)}
                ></ReactSVG>
                <SingleLineEditText style={{minWidth:"150px"}}
                    onSubmit={this.handleSubmit.bind(this)}
                    onChange={this.handleKeywordChange.bind(this)}
                    value={this.state.keyword}>
    
                </SingleLineEditText>
            </form>
    
        )
    }
}

export default SearchBar;