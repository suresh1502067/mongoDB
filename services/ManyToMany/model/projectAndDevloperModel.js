const mongoose = require("mongoose");

const projectTable=new mongoose.Schema({
  name:String,
  developer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "developer"
    }
  ]
});
const developerSchema=new mongoose.Schema({
  name:String,
  project: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    }
  ]
})

// const projectAssignDeveloper=new mongoose.Schema({
//   projectId:[
//    { type:mongoose.Schema.Types.ObjectId,
//     ref:'Project'}
// ],
// developerId:[
//   { type:mongoose.Schema.Types.ObjectId,
//     ref:'developer'}
// ]
// })

const ProjectTable=new mongoose.model('Project',projectTable);
const developerTable=new mongoose.model('developer',developerSchema);
// const projectAssignDeveloper=new mongoose.model('projectAssignDeveloper',projectAssignDeveloper);


module.exports={ProjectTable,developerTable}