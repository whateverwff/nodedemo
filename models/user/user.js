import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    age: Number,
    job: String,
    birthday: Date
})

userSchema.index({id:1})


const User = mongoose.model('user',userSchema)


export default User
