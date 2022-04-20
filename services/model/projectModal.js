const mongoose = require("mongoose");

const ProjectModal= new mongoose.Schema({
  projectname:String,
  clientname:String,
  projectdescription:String,
  userDetail: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ]
})

const ProjectTable=mongoose.model('project',ProjectModal)
module.exports ={
  ProjectTable
}