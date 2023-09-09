import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const complexityOptions = {
        min: 10,
        max: 30,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 2,
      };

export const signUpSchema = joi.object({
        email: joi.string().required,
        password: joiPwd(complexityOptions),
        name: joi.string().min(3).max(20),
        photo: joi.string().uri(),
        birth_date: joi.date().max(Date.now()),
        age: joi.number().min(18),
        phone: joi.number(),
        verified: joi.boolean(),
})