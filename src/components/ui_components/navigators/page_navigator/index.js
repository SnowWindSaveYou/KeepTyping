import React from "react";
import './style.css';
import { SubBlock, UnderlineBlock } from "@/components/layout_components";
import UnderlineButton from "@ui/buttons/underline_btn";


const PageNavigator = (props)=> {
  var renderPageBtns = (page)=>{
    var totalPage = props.count/global.setting.page_row
    var pageNums = [];
    var toOrg = 10 - page 
    for(var i=0;i<10;++i){
      var pageNum = 0;
      if(toOrg>=0){
        pageNum = i
      }else{
        pageNum = -toOrg + i +5
      }
      pageNums.push(pageNum);
    }
    return (pageNums.map((p)=>{
      if(p>totalPage){
        return(
          <UnderlineButton className="mg_right" 
            key={p}>
            .
          </UnderlineButton>
        )
      }
      return(<UnderlineButton className="mg_right" 
        key={p}
        is_select={p===page}
        onClick={()=>props.onChangePage(p)}>
        {p}
      </UnderlineButton>)
    }))
  }
  return (
    <SubBlock className={"PageNavigator"} style={{width:"100%",height:"30px",
                                              background:global.theme.base_color,
                                              padding:"0 0 5 5"}} >
      <div style={{width:"500px",margin:"0 auto"}}>
        <UnderlineButton className="mg_right" 
          onClick={()=>props.onLastPage()}>
          Last</UnderlineButton>
          {renderPageBtns(props.page)}
        <UnderlineButton className="mg_right" 
          onClick={()=>props.onNextPage()}>
          Next</UnderlineButton>
        <div className="clearfix"></div>
      </div>
    </SubBlock>
  )
}

export default PageNavigator;