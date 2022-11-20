const userDB = require('./users.mongo');

// const getfarmer = async(userId)=>{
//     console.log(userId);
// const result = await farmerdb.findOne({userId:userId},{"__v":0,"_id":0});
// return result;
// }
// const getallfarmer = async()=>{
// const result = await farmerdb.find({},{__v:0,_id:0});
// return result;
// }
// const createfarmer= async(farmerInfo)=>{
//     console.log("creating farmer");
//     const result = await farmerdb.updateOne({userId:farmerInfo.userId},farmerInfo,{upsert:true});
//      return result;
// }

// const findregfarmer=async(state,dist)=>{
//     const result = await farmerdb.find({},{__v:0,_id:0}).count();
//     return result;
// }

// const getMobileById=async(id)=>{
//     const result = await farmerdb.findOne({farmId:id},{__v:0,_id:0});
//     return result.userId;
// }
const getAllUser =async()=>{
    const result = await userDB.find({},{__v:0,_id:0});
    return result;
}
const addUser =async(data)=>{
        const result = await userDB.updateOne({id:data.id},data,{upsert:true});
        return result;
}
const getNumberUser =async()=>{
        const result = await userDB.find({},{__v:0,_id:0}).count();
        return result;
}

module.exports = {getAllUser,addUser,getNumberUser}
