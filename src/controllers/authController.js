const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register User
exports.register = async(req , res) => {
    try{
        const {name , email , password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "Please field are required"});
        }

    }catch(error){
        console.error("Registration error:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
}