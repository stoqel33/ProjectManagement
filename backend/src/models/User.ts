import mongoose, { Schema } from 'mongoose'
import { IUser } from '../interfaces'

const UserSchema = new Schema({
    email: { type: String, required: [true, 'Email is required'], unique: true, immutable: true },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [8, 'Password must have minimum 8 characters']
    },
    avatar: { type: String }
})

const User = mongoose.model<IUser>('User', UserSchema)

export default User
