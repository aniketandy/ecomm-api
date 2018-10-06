const User = require('../models/User');
//const bcrypt = require('bcrypt');
const salt = 10;
let UserService = function () { }

UserService.prototype.addUser = function (userPayload) {
   // const hasCode = bcrypt.hashSync(userPayload.password, salt)
    //userPayload.password = hasCode;
    return new Promise((resolve, reject) => {        
            User.create(userPayload).then(result => {
                resolve(result);
            }, err => {
                reject(err);
            })
    });
}

UserService.prototype.login = function (userPayload) {
    return new Promise((resolve, reject) => {        
            User.findOne({
                where : { email : userPayload.email}
            }).then(result =>{
                if(result){
                    //if(bcrypt.compareSync(userPayload.password, result.password)) {
                        if(userPayload.password === result.password){
                        resolve(result);
                       } else {
                        resolve("wrong password");
                       }
                }else{
                    resolve("email not registered")
                }                
            },err =>{
                reject(err);
            });
    });
}

module.exports = new UserService();