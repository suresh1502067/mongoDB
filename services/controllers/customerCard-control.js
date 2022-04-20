const customerCardModel = require('../model/customerCard');

module.exports = {
  addNewCard: function ({cardID,customerId}, res) {
    console.log("object",cardID,customerId)
    customerCardModel({cardId:cardID,customer:customerId}).save(function (err,result) {
      // if(err){
      //   res.send(err)
      // }
      // res.send(result)
    })
  }
}