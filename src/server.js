const express= require('express');
const mongoose = require('mongoose')
  const fs = require('fs');
  const path = require('path');
const cors= require("cors")
require("dotenv").config();
const {userRouter} =require('./routes/alluser/users.route')
const {UserInfoRouter} =require('./routes/userInfo/userInfo.route');
const userInfoMongo = require('./model/userInfo/userInfo.mongo');
// const {farmerRouter} =require('./routes/alldata/alldata.route')
// const {landRouter} = require('./routes/land/land.route')
// const{marketRouter} =require('./routes/market/market.route')
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    console.log(__dirname)

  res.send("hii there");
});

app.get('/a', async (req, res) => {
  console.log(__dirname)

  const dirPath = path.join(__dirname, '/pictures');

   fs.mkdirSync(dirPath);
  res.send("CREATED");
});



//app.use(userRouter)
app.use(UserInfoRouter)

const MONGO_URL = process.env.MONGODB_URI || "mongodb+srv://dilip:12345@cluster0.jdaqbjk.mongodb.net/?retryWrites=true&w=majority";


mongoose.connection.once('open',()=>{
   console.log('mongoDB connection ready!')
 })
 mongoose.connection.on('error',(err)=>{
 console.error(err);
 })

async function StartServer(){
   await mongoose.connect(MONGO_URL,{
     useNewUrlParser:true,
    //useFindAndModify:false,
   //  useCreateIndex:true,
     useUnifiedTopology:true,
   });  
   app.listen(PORT,()=>{
      console.log(`listening ar port ${PORT}`);
     })
   
 }
 
 StartServer();



