const Product = require('../models/Product');
//const bcrypt = require('bcrypt');
const salt = 10;
let ProductService = function () { }

ProductService.prototype.addProduct = function (productPayload) {
   // const hasCode = bcrypt.hashSync(userPayload.password, salt)
    //userPayload.password = hasCode;
    return new Promise((resolve, reject) => {        
        Product.create(productPayload).then(result => {
                resolve(result);
            }, err => {
                reject(err);
            })
    });
}

ProductService.prototype.getAllProduct = function () {
     return new Promise((resolve, reject) => {        
         Product.findAll().then(result => {
                 resolve(result);
             }, err => {
                 reject(err);
             })
     });
 }

 ProductService.prototype.updateProductById = function(id , payload){
    return new Promise((resolve, reject) => {        
        Product.update(
            payload,
            {where : {productId : id} }
        ).then( result => {
            resolve(result);
        }, err => {
            reject(err);
        });
    });
 }
module.exports = new ProductService();