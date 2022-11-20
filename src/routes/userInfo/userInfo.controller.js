  const {getUserDetails,postUserDetails,getAllUser,getNumberUser}=require('../../model/userInfo/userInfo.model')
  
// const httpGetLandDetails =async (req,res)=>{
//     const body=req.body;
//     const upin =req.params.upin;
//    //  const userId = req.body.userId;
//      const result = await getLandDetails(upin);
//      res.status(200).json(result);
// }

// const httpPostLandDetails=async (req,res)=>{
//   const data = req.body;
//   console.log(data);
//   const result = await postLandDetails(data);
//   res.status(201).json(result);
 
// }

// const httpGetLandByNameDetails=async (req,res)=>{
//   const data = req.body;
//   const result = await getLandByNameDetails(data);
//   res.status(201).json(result);
 
// }
const httpGetUserById =async (req,res)=>{
  //const body=req.body;
  const id =req.params.id;
 //  const userId = req.body.userId;
   const result = await getUserDetails(id);
   res.status(200).json(result);
}

const httpPostUserDetails =async (req,res)=>{
  
  const noofuser=await getNumberUser();
   const data = {...req.body,id:noofuser+1};
   const result = await postUserDetails(data);
   res.status(200).json(result);
}

const HttpGetAllUser = async(req,res)=>{
  const result=await getAllUser();
  res.status(200).json(result);
}




module.exports={
  httpGetUserById,httpPostUserDetails,HttpGetAllUser
}