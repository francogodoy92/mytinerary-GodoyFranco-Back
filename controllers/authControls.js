import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authController = {
  signUp: async (req, res, next) => {
    try {
      const passwordHash = bcrypt.hashSync(req.body.password, 10);
      let body = { ...req.body };
      body.password = passwordHash;

      const newUser = await User.create(body);



      const token = jwt.sign(
        { email: newUser.email, photo: newUser.photo },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      return res.status(201).json({
        success: true,
        userData: newUser,
        token: token,
        message: "Sign up successfully!",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  signIn: async (req, res, next) => {
    try {

      let { email:emailBody, password } = req.body

      const userInDB = await User.findOne( {email:emailBody} )

      if( !userInDB ){
          throw new Error( "User Not Found" )
      }

      let passwordValidated = bcrypt.compareSync( password, userInDB.password )

      if( !passwordValidated ){
          throw new Error( "Incorrect email address or password" )
      }

      let { email, photo, name } = userInDB
      const token = jwt.sign( { email, photo, name }, process.env.SECRET_KEY, { expiresIn:'1h' } )
      return res.status(200).json({
          success: true,
          userData: { email, photo, name },
          token: token,
          message: "You're logged!"
      })

  } catch (error) {
      console.log(error);
      next(error)
  }
},
loginWithToken : (req, res) => {
  const { email, photo, name} = req.user
  res.status(200).json({
      success: true,
      userData: { email, photo, name },
      message: "You're still logged",

  })
}

}


export default authController;
