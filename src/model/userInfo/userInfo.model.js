const userInfoDB =require('./userInfo.mongo')

//  const getLandDetails=async (UPIN)=>{
//      const result = await landDb.findOne({UPIN:UPIN},{"_id":0,"__v":0});
//     return result; 
// }

//  const getLandByNameDetails=async (data)=>{
//     const {district,taluka,village,newSurveyNumber} = data;
//      const result = await landDb.findOne({district:district,taluka:taluka,village:village,newSurveyNumber:newSurveyNumber},{"_id":0,"__v":0});
//     return result; 
     
// }

//  const postLandDetails=async(body)=>{
//     console.log("creating land");
//     const result = await landDb.updateOne(body,body,{upsert:true});
//      return result;
// }
const getAllUser =async()=>{
    const result = await userInfoDB.find({},{name:1,id:1,isGreen:1,"_id":0});
    return result;
}

const getUserDetails=async (id)=>{
    const result = await userInfoDB.findOne({id},{"_id":0,"__v":0});
   return result; 
}


 const postUserDetails=async(data)=>{
    console.log("creating user");
    const result = await userInfoDB.updateOne({id:data.id},data,{upsert:true});
     return result;
}
const getNumberUser =async()=>{
    const result = await userInfoDB.find({},{__v:0,_id:0}).count();
    return result;
}



module.exports={getUserDetails,postUserDetails,getAllUser,getNumberUser}
