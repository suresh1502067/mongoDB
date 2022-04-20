const UserModal = require("../model/userModal");
const ProjectModal = require("../model/projectModal");

module.exports = {
  getAllUser:async function (req, res) {
    console.log("weloem")
    try {
     let alluser=await UserModal.UserListTable.find({}).populate("projectDetail");
     res.send(alluser)
    } catch (err) {
      console.log("err", err);
    }
  },
  createCustomer: function (req, res) {
    UserModal.UserListTable(req.body).save(function (err, result) {
      if (err) throw err;
      if (result) {
        return res.send(result);
      }
    });
  },
  createProject: async function (req, res) {
    console.log("req,", req.body);
    let projectDetail=await ProjectModal.ProjectTable.find({}).populate("userDetail");
    res.send(projectDetail)
  },
  getALLProject: function (req, res) {
    ProjectModal.ProjectTable.find({}, function (err, result) {
      if (err) throw err;
      if (result) {
        return res.send(result);
      }
    });
  },
  assignProjDev: async function (req, res) {
    console.log("req,", req.body);
    const { projectId = "", userId = "" } = req.body;
    // ProjectDeveloper.ProjectDeveloperTable(req.body).save(function(err,result){
    //    if(err) throw err
    //    if(result){
    //     return res.send(result)
    //    }
    // })
    console.log("1");
    await ProjectModal.ProjectTable.findByIdAndUpdate(
      projectId,
      { $push: { userDetail: userId } },
      { new: true, useFindAndModify: false }
    );
    console.log("2");

    await UserModal.UserListTable.findByIdAndUpdate(
      userId,
      { $push: { projectDetail: projectId } },
      { new: true, useFindAndModify: false }
    );
    console.log("3");
    res.send("successfully assigned");
  },
};
