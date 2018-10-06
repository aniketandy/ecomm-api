const productService = require('../services/productService');

let ProductController = function(){
    
}

ProductController.prototype.corsResolver = function(res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    return res;
}



ProductController.prototype.addProduct = function(req,res){    
    let promise = productService.addProduct(req.body);
    promise.then(result => {
       // res = this.corsResolver(res);
        
        res.json(result);
    },err =>{
        
        res.status(err);
        res.json(err);
    });    
}

ProductController.prototype.getAllProduct = function(req,res){    
    let promise = productService.getAllProduct();
    promise.then(result => {
        res.json(result);
    },err =>{
        res.status(err);
        res.json(err);
    });    
}

ProductController.prototype.updateProductById = function(req,res){
    productService.updateProductById(req.params['productId'],req.body).then( result => {
        res.json(result);
    },err => {
        res.status(err);
        res.json(err);
    });
}

module.exports = new ProductController();