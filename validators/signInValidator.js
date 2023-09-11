import joi from 'joi'
import joiPwd from 'joi-password-complexity'
const complexityOptions = {
        min: 8,
        max: 20,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 2,
};

export const signInSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty": "The email can't be empty!",
        "any.required": "The email is required!",
        "string.email": "This don't be a correct email direction."
    }),
    password: joiPwd(complexityOptions).messages({
        
    })
})