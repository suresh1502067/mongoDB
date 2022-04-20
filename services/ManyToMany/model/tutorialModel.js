const mongoose = require("mongoose");

const TutorialSchema=new mongoose.Schema({
  name:String,
  age:String,
  author:String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag"
    }
  ]
});
const TagSchema=new mongoose.Schema({
  name:String,
  tutorials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tutorial"
    }
  ]
})

const TutorialTable=new mongoose.model('Tutorial',TutorialSchema);
const TagTable=new mongoose.model('Tag',TagSchema);


module.exports={TutorialTable,TagTable}