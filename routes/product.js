const { Router } = require('express');
const express = require('express');
const router = express.Router();

//import quotes schema
const productSchema = require("../model/productModel");

router.post('/add',function(req,res){
    console.log(req.body);
    //pass the data to productModel(schema)
    let product =  new productSchema(req.body);
    product.save(function(err,result){
        if(err){
            console.log("no any quote");
        }else{
            console.log(result);
            res.send({result:"success"});
        }
    });
});

router.get('/getAll',function(req,res){
   productSchema.find({}, {_id: 0 , __v: 0}, function(err,data){
       if(err){
           console.log("error ocurred",err);
       }else{
           console.log("data from product collection",data);
           res.send(data);
       }

   });
});

module.exports = router;