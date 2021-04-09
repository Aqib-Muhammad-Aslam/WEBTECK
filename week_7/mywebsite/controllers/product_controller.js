const Product=require('../models/product_model')

//http://localhost/products/test
exports.test=(req,res)=>{
    res.send('Greetings from Test Controller')
}

exports.product_create=(req,res)=>{
    let product=new Product({
        name:req.body.name, //Product is model coming from model
        price:req.body.price // may use name:req.param.price
    });//Product is model coming from model
//The Model has to start captial letter Product
//Export the model

    product.save((err)=>{
        if (err){
            return next(err);
        }
        res.redirect('/list');
    });
        
}
// Product.findById(req.params.id,()=>{}) is a mongodb function
exports.product_details=(req,res)=>{
    Product.findById(req.params.id, (err,product)=>{
        if (err) return next(err);
        res.send(product);
    })
}
 //note $set: req.body is updating the information
 // if wanted you update one row use req.body.price 
exports.product_updateform=(req,res)=>{
    Product.findById(req.params.id,(err,product)=>{
        if (err) return next(err);
        res.render('updateform',{page:'UPDATE PRODUCT', menuId:'updateform',product:product});
    });
}

exports.product_delete=(req,res)=>{
    Product.findByIdAndRemove(req.params.id,(err)=>{
        if (err) return next(err);
        res.redirect('/list');
    })
}
exports.list=(req,res)=>{
    Product.find((err,product)=>{
        if(!err){res.render('list',{page:'products list',menuId:'list',product:product})}
        else{
            console.log('error'+JSON.stringify(err,undefined,2));
        }
    })
}
exports.product_formcreate=(req,res)=>{
    res.render('createform',{page:'New Product', menuId:'createform'})
}
//method to update product by ID
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        //res.send('Product udpated.');
        res.redirect('/list');
    });
};