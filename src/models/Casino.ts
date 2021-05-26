import mongoose, { Schema, Document } from 'mongoose';
var timestamps = require('mongoose-timestamp2');
interface ICasino extends Document {
    _id: string;
    participationRate: string;
    company: string;
    country: string;
    city: string;
    address: string;
    HACI: string;
    comments: string;
};

const Casino: Schema = new mongoose.Schema({    
    _id: {
        type: String,
        required: true,
    },
    participationRate: {
        type: String,
        required: true,
    },
    company:    {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
   
    address: {
        type: String,
        required: true,
    },
    HACI: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    }
});

Casino.plugin(timestamps);

export default mongoose.model<ICasino>('Casino', Casino, 'casinos');