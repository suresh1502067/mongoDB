
const {developerTable,ProjectTable}= require('../model/projectAndDevloperModel')

module.exports={
  cretaeProject:async function(req,res){
    try{
      let  project=await ProjectTable(req.body.data).save();
      res.send(project)
    }catch(err){
      console.log("object",err)
    }
  },
  createDeveloper:async function(req,res){
    try{
      const {tutorialId='',...rest}=req.body.data
      let  developer=await developerTable(rest).save();
      if(developer){
        await screenY.findByIdAndUpdate(tutorialId,{
          $push:{
            tags:developer._id
          }
        })

        await developer.findByIdAndUpdate(developer._id,{
          $push:{
            tutorials:tutorialId
          }
        })
      }
      res.send(developer)
    }catch(err){
      console.log("object",err)
    }
  }
}
