const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require("./models/User")
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
const cors = require('cors');

//app.use(cors());

const app=express()
app.use(express.json())
const PORT = 3000

// Connect to MongoDB (replace with your MongoDB URL)
// mongoose.connect('process.env.MONGO', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a User Schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: { type: String, unique: true },
//   password: String,
// });



mongoose.connect(process.env.MONGO). then(
  ()=>console.log("DB Connected Succesfully")
).catch(
  (err)=>console.log(err)
)

app.get('/',async(req,res)=>{
 try{
   res.send("<h2 align=center>Welcome To The Backend</h2>")
 }catch(err)
 {
   console.log
 }

})


//const User = mongoose.model('User', userSchema);

// Register Page API 
app.post('/Register',async(req,res)=>{
  const{user,email,password} = req.body
  try{
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({user,email,password:hashedPassword})
    await newUser.save() 
    console.log("New User Is Register")
    res.json({message:'User Created'})
    
  }catch(err)
  {
   console.log(err)
  }

}
)
 
// Login Page API

app.post('/Login',async(req,res)=>{
  const{email,password} = req.body;
  try{
    
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user .password)))
    {
      return res.status(400).json({message:"Invalid Credentials"});
    }
    res.json({message:"Successful Login",username: user.username})
     }
  catch(err)
  {
   console.log(err)
  }

  // const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', {
  //   expiresIn: '1h',
  // });

}
)




app.listen(PORT, (err)=>{
  if(err){
      console.log(err)
  }
  console.log("server is running | Aashi "+PORT)
})