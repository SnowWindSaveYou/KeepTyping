import React, { Component } from 'react';
import axios from 'axios'
import UnderLineEditText from '@ui/textareas/underline_edit_text'
/** Components of page */
class TestPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            topic:'TEST',
            token:null,
            content:""
        }
    }
    // componentDidMount(){

    //     this.setState({
    //         token:SecureTransfer.getToken()
    //     })
    // }

    // handleTestDialog(){
    //     notificationShow("TEST",false,()=>{
    //         toHome(this)
    //         console.log('test')
    //     })
    //    // NotificationDialog.show()
    // }
    // handleTestToken(){
    //     console.log(global.token)
    // }

    // handleChangeTopic(e){
    //     this.setState({content:e.target.value})
    // }
    // handleSubmitTopic(e){
    //     let that = this
    //     console.log(that.state.token)
    //     axios.post('api/m/topic/createTopic/'+this.state.content,{
            
    //     },{
    //         headers:{'Content-Type': 'application/json',
    //         'token':that.state.token}
    //     })
    //     .then((data)=>{
    //         console.log(data)
    //     })
    // }

    render() {
      return (
        <div className="TestPage" >
            <UnderLineEditText></UnderLineEditText>
            {/* <HeaderPanel/>

            <TopBlock style={{height:"300px",marginBottom:"-100px"}}>
                <PrimaryButton onClick={()=>this.handleTestDialog()}> Dialog </PrimaryButton>
                <PrimaryButton onClick={()=>this.handleTestToken()}> Token </PrimaryButton>
                <SecondaryButton onClick={()=>LoginConroller.userLogout()}>Logout</SecondaryButton>
                <CircleButton>6</CircleButton>
                <div  style={{width:"300px",marginT:"100px"}}>
                    <SingleLineEditText onChange={this.handleChangeTopic.bind(this)}>
                    </SingleLineEditText>
                    <PrimaryButton onClick={()=>this.handleSubmitTopic()}> Create </PrimaryButton>
                </div>
                
            </TopBlock> */}
        </div>
      );
    }
  }
  
export default TestPage;
  