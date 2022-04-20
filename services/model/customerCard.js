const mongoose =  require("mongoose");

const customerCardModal=mongoose.Schema({
  cardId:String,
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer"
  }
});

const customerCardTable=mongoose.model('cardIdentifier',customerCardModal);

module.exports=customerCardTable;