import React, { Component } from 'react';
import './style.css'
import HeaderPanel from '@/components/container_components/header_panel';
import {TopBlock, MainBlock,SideBlock,ContainerBlock,FooterBlock, SubBlock, CircleBlock} from '@/components/layout_components'
import UserInfo from '@/components/display_components/show_infos/user_info';
import ResultPostList from '../../components/container_components/result_post_list';
import {LoginContext} from '../../Contexts'
import {PrimaryButton,SecondaryButton,VerticalMenuNavigator,SideLineButton,UnderLineEditText} from '@ui'
import UserController from '@controller/user_controller'

class MyPage extends Component {

    constructor(props){
        super(props);
        this.state = {
          selection:"My Posts",
          posts:null,
        }
    }
    componentDidMount(){
      this.handleMenuSelectionChange("My Posts")
    }

    renderMyTopics(topics){
      return topics.map((topic)=>{
        return(<SecondaryButton key={topic} onClick={()=>{this.props.history.push('/t/'+topic)}}>
          {topic}
        </SecondaryButton>)
      })
    }

    handleMenuSelectionChange(selection){
      this.setState({selection:selection},()=>{
        switch(selection){
          case "Activity":
            break;
          case "My Account":
            break;
          case "My Posts":
            UserController.getMyPosts((data)=>{
              console.log('posts')
              this.setState({posts:data})
            })
            break;
          case "My Collection":
            break;
          default:
            break;
        }
      })
    }

    render() {
      return (
        <div className="MyPage" style={{ background: global.theme.back_color}}>
        <HeaderPanel />
        <TopBlock style={{ height: "300px", marginBottom: "-100px", background: "#fb2" }}></TopBlock>
        
        <LoginContext.Consumer>
          {value=> value.login?(
            value.my_info?(
            <ContainerBlock >
              <SideBlock style={{ marginRight: "5px" }}>
                <UserInfo user={value.my_info}/>
                <VerticalMenuNavigator 
                  menu={["My Account","My Posts"]}
                  onChangeSelection={this.handleMenuSelectionChange.bind(this)}
                  selection={this.state.selection}/>
              </SideBlock>
              <MainBlock >
                <SubBlock className="my_topics" style={{background:global.theme.base_color }}>
                  <p style={{color:global.theme.primary_color }}>My Topics</p>
                  {this.renderMyTopics(value.my_info.topics)}
                </SubBlock>
                <SubBlock className="main" style={{background:global.theme.base_color }}>
                {this.state.selection==="My Account"?(
                  <SubBlock style={{padding:"10px"}}>
                    My Name <UnderLineEditText ></UnderLineEditText>
                    <br/>
                    My Bias <UnderLineEditText ></UnderLineEditText>
                    <br/>
                    <PrimaryButton>Update</PrimaryButton>
                  </SubBlock>
                ):null}
                {this.state.selection==="My Posts"?(
                  <ResultPostList posts={this.state.posts}/>
                ):null}
            

                </SubBlock>
              </MainBlock>
            </ContainerBlock>
            ):null
          ):(this.props.history.push('/'))}
        </LoginContext.Consumer>
        <FooterBlock style={{ background: "#555", marginTop: "-20px" }}/>
        </div>
      );
    }
  }
  
export default MyPage;
  