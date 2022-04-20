const mongoose = require("mongoose");

const UserModal= new mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const UserListTable=mongoose.model('user',UserModal)
module.exports ={
  UserListTable
}