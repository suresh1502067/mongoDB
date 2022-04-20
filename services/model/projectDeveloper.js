const mongoose = require("mongoose");

const ProjectDeveloper= new mongoose.Schema({
  projectId:String,
  userId:String,
})

const ProjectDeveloperTable=mongoose.model('project-developer',ProjectDeveloper)
module.exports ={
  ProjectDeveloperTable
}