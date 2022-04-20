const {TagTable,TutorialTable}= require('../model/tutorialModel')

module.exports={
  createTutorialTable:async function(req,res){
    console.log("object--req",req.body)
    try{

      let  tutorialTable=await TutorialTable(req.body.data).save();
      res.send(tutorialTable)
    }catch(err){
      console.log("object",err)
    }
  },
  createTag:async function(req,res){
    console.log("object--req",req.body)
    try{
      const {tutorialId='',...rest}=req.body.data
      let  tagTable=await TagTable(rest).save();
      if(tagTable){
        await TutorialTable.findByIdAndUpdate(tutorialId,{
          $push:{
            tags:tagTable._id
          }
        })

        await TagTable.findByIdAndUpdate(tagTable._id,{
          $push:{
            tutorials:tutorialId
          }
        })
      }
      res.send(tagTable)
    }catch(err){
      console.log("object",err)
    }
  }
}
