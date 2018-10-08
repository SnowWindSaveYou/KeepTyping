import axios from 'axios';
// import {notificationShow} from './dialog_controller'

var SearchController = {
    getTopics(keyword,callback){
        axios.get('/api/m/search/getTopics/'+keyword)
        .then(function(res){
            console.log(res.data)
            if(res.data.success){
                callback(res.data.data)
            }else{

            }
        }).catch(function(err){
            console.log(err);
        })
    },
    getPosts(keyword,callback){
        axios.get('/api/m/search/getPosts/'+keyword)
        .then(function(res){
            console.log(res.data)
            if(res.data.success){
                callback(res.data.data)
            }else{

            }
        }).catch(function(err){
            console.log(err);
        })
    },
    getUsers(keyword,callback){
        axios.get('/api/m/search/getUsers/'+keyword)
        .then(function(res){
            console.log(res.data)
            if(res.data.success){
                callback(res.data.data)
            }else{

            }
        }).catch(function(err){
            console.log(err);
        })
    }
}

export default SearchController;