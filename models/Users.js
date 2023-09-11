import { Schema, model } from "mongoose";

const userSchema = Schema({
        email:{type: String, required: true},
        password:{type: String, required: true},
        name:{type: String, required: true},
        photo:{type: String, default:'https://image.pngaaa.com/569/2189569-middle.png' },
        birth_date: {type: Date},
        age: {type: Number},
        phone: {type: Number},
        verified: {type: Boolean, default: false}
},
{
        timestamps: true
})

const User = model('user', userSchema)

export default User