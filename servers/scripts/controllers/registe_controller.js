
const secureConnection = require('../utils/secure_connection');
const UserModel = require('../../models/user');

var RegisteController ={
    registeUser(user_id, user_name, user_password,callback){

        // create salt and hash password for save storage
        var new_salt = secureConnection.getRandom()
        var hashed_pasword = secureConnection.makeHash(user_password);
        hashed_pasword = secureConnection.makeHash(hashed_pasword + new_salt);

        // 
        UserModel.create({  id:user_id,
                            name:user_name,
                            password:hashed_pasword,
                            salt:new_salt
        },(err,docs)=>{
            if(err){
                if(err.code ===11000){
                    callback({
                        success:false,
                        message:"This account already registed"
                    })
                }else{
                    callback({
                        success:false,
                        message:"registe failed"
                    })
                }
                console.log(err);
            }else{
                callback({
                    success:true,
                    message:"registe sucessful",
                    data:docs
                })
            }
        })
    }
}

module.exports = RegisteController;