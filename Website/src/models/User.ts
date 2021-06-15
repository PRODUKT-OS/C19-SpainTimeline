import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    _id: string;
    username: string;
    password: string;
    role:string;
};

const User: Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
    }, {
    timestamps: true,
    });

export default mongoose.model<IUser>('User', User, 'users');