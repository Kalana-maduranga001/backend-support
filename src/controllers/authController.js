const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req , res) => {
   const {email , password} = req.body;
   try{
       const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid Email."});
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid Password."});
        }

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.status(200).json({message:"Login Successful", token});
        
    }catch(error){
        res.status(500).json({message:"Server Error"});
    }
};