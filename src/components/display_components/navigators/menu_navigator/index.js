import React from "react";
import './style.css';
import { SubBlock, UnderlineBlock } from "@/components/layout_components";
import UnderlineButton from "@ui/buttons/underline_btn";


const MenuNavigator = (props)=> {
  var renderMenuBtns = ()=>{
    return (props.menu.map((key)=>{
      return(<UnderlineButton className="mg_right" 
        className="menu_tab"
        key={key}
        is_select={key === props.selection}
        onClick={props.onChangeSelection?()=>props.onChangeSelection(key):null}>
        {key}
      </UnderlineButton>)
    }))
  }
  return (
    <SubBlock className={"MenuNavigator"} style={{ height: "60px",padding:"10px 10px 0 10px",
                                          marginBottom: "5px",
                                          background: global.theme.base_color }}>
        {renderMenuBtns()}
        <div className="clearfix"></div>
    </SubBlock>
  )
}

export default MenuNavigator;