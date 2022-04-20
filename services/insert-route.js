var express = require('express');
var router = express.Router();

var customerController= require('./controllers/customer-control');
var loginController= require('./controllers/authorization/login-controller');

// router.post('/create',customerController.createCustomer);
router.post('/createProj',customerController.createProject);
router.post('/assignProjDev',customerController.assignProjDev);

router.get('/getAllUser',customerController.getAllUser);
router.get('/getAllProject',customerController.getALLProject);


router.post("/login",loginController.login);
router.post("/register",loginController.createCustomer)

// router.get('/getSingleUSer/:id',insertController.getSingleUser);
// router.get('/deleteUser',insertController.deleteUser);
// router.post('/updateMany',insertController.updateMany);
// router.post('/insertMany',insertController.insertMany);

// // Many to Many relationShip concept //

// router.post('/insertTutorial',tutorialController.createTutorialTable);
// router.post('/createTag',tutorialController.createTag);

// router.post('/createProject',projectController.cretaeProject);
// router.post('/createDeveloper',projectController.createDeveloper);



module.exports = router;
