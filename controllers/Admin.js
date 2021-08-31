const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../models/Admin.js')

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // validate
        if(!email || !password )
        return res.status(400).json({message: "Please fill all the required feild."})


        const existingUser = await Admin.findOne({ email })

        if(!existingUser) return res.status(404).json({ message: "Inavaild Credentials."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({ message: "Inavaild Credentials."});

        // Generate JWT token
        const token = jwt.sign({id: existingUser._id}, "chomkedin" , { expiresIn: "1h" })

        // send the token in a HTTP-only cookie
            // res.cookie("token", token, {
            // httpOnly: true,
            // secure: false,  
            // })
            // res.status(200).json({ token})
        // send result & token    
         res.status(200).json({ token, message: "Logged In successfully."})
    } catch (error) {
        res.status(500).json({ message: 'Something went worng.'})
    }
}

module.exports = {signin};