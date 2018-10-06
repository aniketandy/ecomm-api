const userService = require('../services/userService');

let UserController = function(){
}

UserController.prototype.addUser = function(req,res){    
    console.log("Hello ..")
    let promise = userService.addUser(req.body);
    promise.then(result => {
        res.json(result);
    },err =>{
        res.status(err);
        res.json(err);
    });    
}


UserController.prototype.login = function(req,res){
    userService.login(req.body).then(result=>{
        if(result === "wrong password" || result === "email not registered") {
            res.status(401);
            res.json(result);
        }else{
            res.json(result);
        }        
    },err=>{
        res.status(err);
        res.json(err);
    });
}
module.exports = new UserController();