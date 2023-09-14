import User from "../models/Users.js"

export const emailExists = async (req, res, next) => {

    const exist = await User.findOne({ email: req.body.email })
    if (!exist) {
        return next()
    }

    return res.status(400).json({
        success: false,
        message: 'This email is already in use'
    })
}