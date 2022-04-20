const sha256 = require('js-sha256')

const UserModal = require("../../model/userModal");


module.exports = {
  login:async function (req, res) {
    try {
     let alluser=await UserModal.UserListTable.find({}).populate("projectDetail");
     res.send(alluser)
    } catch (err) {
      console.log("err", err);
    }
  },
  createCustomer: function (req, res) {
    try{
      const {name,email,password}=req.body
      const reqex=/[@gmail.com|@yahoo.com|@hotmail.com|@live.com]$/;
      if(!reqex.test(email)){
        throw "Email is not supported from your domain"
      } 
      if(password.length<6){
        throw "password Atleast 5 charachtar"
      }
      UserModal.UserListTable({name,email,password:sha256(password + process.env.SALT)}).save(function (err, result) {
        if (err) throw err;
        if (result) {
          return res.send("user register successfully");
        }
      });
    }catch(err){
      console.log("err",err)
    }
  },
}