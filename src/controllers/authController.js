const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register User
exports.register = async(req , res) => {
    try{
        const {name , email , password} = req.body;
        //validation
        if(!name || !email || !password){
            return res.status(400).json({message: "Please field are required"});
        }
        //check esisting user
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({message: "User alredy exsists"});
        }
        //hash password
        const salt = await bcrypt.getSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);
        //create user
    }catch(error){
        console.error("Registration error:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
}