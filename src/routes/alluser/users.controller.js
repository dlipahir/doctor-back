  const {getAllUser,addUser,getNumberUser} = require('../../model/allData/users.model');

 const HttpGetAllUser = async(req,res)=>{
     const result=await getAllUser();
     res.status(200).json(result);
 }
 const HttpAddUser = async(req,res)=>{
   // const data=req.body;
    const noofuser=await getNumberUser();
    const data={name:req.body.name,id:noofuser+1};
     const result=await addUser(data);
     res.status(200).json(result);
 }
  
  
//   const getFarmerById =async (req,res)=>{
//       const userId=req.params.id;
//      //  const userId = req.body.userId;
//        const result = await getfarmer(userId);
//        res.status(200).json(result);
//   }
//   const getAllFarmers =async (req,res)=>{
//        const result = await getallfarmer();
//        res.status(200).json(result);
//   }

//  const postFarmer=async (req,res)=>{
//     const data = req.body;
//     console.log(data);
//     const result = await createfarmer(data);
//     res.status(201).json(result);
   
//   }

//   const getNofarmers= async(req,res)=>{
//     const state=req.params.state;
//     const dist=req.params.dist;
//     const result = await findregfarmer(state,dist);
//     res.status(201).json(result);
//   }
//   const httpgetMobileById= async(req,res)=>{
//     const id=req.params.id;
//     const result = await getMobileById(id);
//     res.status(201).json(result);
//   }
  


  module.exports={
    HttpGetAllUser,HttpAddUser
  }