//step 1: import schema from mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//step2 : writing a schema
const productSchema = new Schema(
  {
    productName:String,
    price:String
  },
  {
    collection: "productdetails"
  }
 );

 //step3: export the schema
 module.exports = mongoose.model("productdetails", productSchema);

