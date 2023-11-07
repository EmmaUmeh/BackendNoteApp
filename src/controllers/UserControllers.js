const Users = require("../models/UserModel")

const register = async (req, res) => {

    const {email, username, password} = req.body;

    try{

        const RegisterUser = new Users({
            email,
            username,
            password
        })

        const existingUser = await Users.countDocuments({email, password})

        if(existingUser === 1) {
            return res.status(400).json({ error: "User Already Exists" });
        }
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
          } else if (!username) {
            return res.status(400).json({ error: "Username is required" });
          }else if (!password) {
            return res.status(400).json({ error: "Password is required" });
          }

        await RegisterUser.save();


    res.status(201).json({ msg: "User Registered Successfully" });

    }catch(error) {
        console.error("Error while creating User", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

module.exports = {register}