const express=require('express')
const mongoose=require('mongoose')
const User=require("./models/User")
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config()
const authRoutes = require('./routes/authRoutes');

//app.use(cors());
const app=express();
app.use(cors({
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json())
app.use('/api/auth', authRoutes);
const PORT = 3000

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log("MongoDB Connection Error:", err));


app.get('/',async(req,res)=>{
 try{
   res.send("<h2 align=center>Welcome To The Backend</h2>")
 }catch(err)
 {
   console.log
 }

})


// Register Page API 
// app.post('/Register', async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required!' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered!' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();
//     console.log("New User Registered:", newUser);
//     res.status(201).json({ message: 'User Created Successfully' });
//   } catch (err) {
//     console.error("Registration Error:", err);
//     res.status(500).json({ message: 'Registration failed!', error: err.message });
//   }
// });


// ✅ This should match exactly with the frontend request
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log("New User Registered:", newUser);
    res.status(201).json({ message: 'User Created Successfully' });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ message: 'Registration failed!', error: err.message });
  }
});

 
// Login Page API

app.post('/login',async(req,res)=>{
  const{email,password} = req.body;
  try{
    
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user .password)))
    {
      return res.status(400).json({message:"Invalid Credentials"});
    }
   
    res.status(200).json({ message: 'Logged in successfully!' });

     }
  catch(err)
  {
   console.log(err)
  }

}
)




app.listen(PORT, (err)=>{
  if(err){
      console.log(err)
  }
  console.log("server is running | Aashi "+PORT)
})