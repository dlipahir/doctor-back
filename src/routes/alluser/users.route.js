const {Router} = require("express")
//const {getFarmerById,postFarmer,getAllFarmers,getNofarmers,httpgetMobileById} =require('./alldata.controller')
const {HttpGetAllUser,HttpAddUser} =require('./users.controller')
const userRouter = Router();

// farmerRouter.get('/getfarmer/:id',getFarmerById);
// farmerRouter.post('/postfarmer',postFarmer)
// farmerRouter.get('/getallfarmers',getAllFarmers)
// farmerRouter.get('/getregno/:state/:dist',getNofarmers)
// farmerRouter.get('/getregno/:state/:dist',getNofarmers)
// farmerRouter.get('/getmobilebyid/:id',httpgetMobileById)
userRouter.get('/getalluser',HttpGetAllUser);
userRouter.post('/adduser',HttpAddUser);



module.exports = {
    userRouter     
}