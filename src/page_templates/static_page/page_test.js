import React, { Component } from 'react';
import axios from 'axios'
import {UnderLineEditText,PrimaryButton} from '@ui'
import {LoginContext} from '../../Contexts'
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
    componentDidMount(){
        let loginCtx= LoginContext.Consumer._currentValue 
        console.log(loginCtx.my_info)
    }

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
            <PrimaryButton onClick={()=>{}}>

            </PrimaryButton>
        </div>
      );
    }
  }
  
export default TestPage;
  