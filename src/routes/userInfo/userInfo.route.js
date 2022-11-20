const {Router} = require("express")
const {httpGetUserById,httpPostUserDetails,HttpGetAllUser} =require('./userInfo.controller')
const UserInfoRouter = Router();

UserInfoRouter.get('/getuserinfo/:id',httpGetUserById);

UserInfoRouter.post('/postuserinfo',httpPostUserDetails);

UserInfoRouter.get('/getalluser',HttpGetAllUser);



module.exports = {
    UserInfoRouter     
}