import React from "react";
import './style.css';
import { SubBlock } from "@/components/layout_components";
import {SideLineButton} from "@ui";

/**
 * 
 * @param {menu,selection,onChangeSelection} props 
 */
const VerticalMenuNavigator = (props)=> {
  var renderMenuBtns = ()=>{
    return (props.menu.map((key)=>{
      return(<SideLineButton 
        className="menu_tab"
        key={key}
        is_select={key === props.selection}
        onClick={props.onChangeSelection?()=>props.onChangeSelection(key):null}>
        {key}
      </SideLineButton>)
    }))
  }
  return (
    <SubBlock className={"VerticalMenuNavigator"} 
        style={{ background: global.theme.base_color }}>
        {renderMenuBtns()}
        <div className="clearfix"></div>
    </SubBlock>
  )
}

export default VerticalMenuNavigator;