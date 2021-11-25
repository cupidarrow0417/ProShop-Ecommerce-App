import asyncHandle from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'




//@dec       auth user & get token
//@route     POST /api/users/login
//@access    Public

const authUsers = asyncHandle(async(req,res)=>{

    const {email , password} = req.body
    // res.send({ email , password })

    const user = await User.findOne({ email})
    if (user && (await user.matchPassword(password))) {
        
        res.json({ 
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error("Invaild email and password")
    }
})


//@dec       Register User a new
//@route     POST /api/users
//@access    Public

const  registerUser = asyncHandle(async(req,res)=>{

     const { name  ,email , password} = req.body

    const userExists = await User.findOne({ email})
    if (userExists){

        res.status(400)
        throw new Error("User Already exists")
    }
   const user = await User.create({ name, email, password})
   if (user){
       res.status(201).json({ 

        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)

       })

   } else{
       res.status(400)
       throw new Error("Invaild user Data")
   }
})




//@dec       auth user & profile
//@route     POST /api/users/profile
//@access    Private

const getUserProfile = asyncHandle(async(req,res)=>{
 
    // res.send("Succes")
    const user = await User.findById(req.user._id)

    if (user) {
        
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error("User Not Found")
    }
})
export  {authUsers , registerUser ,getUserProfile,}