import mongoose, { Schema, Document } from 'mongoose';

interface ISlotmodel extends Document {
    _id: string;
    slotModel: string;
    cpu: string;
    ram: string;
};

const Slotmodel: Schema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
    slotModel: {
        type: String,
        required: true,
    },
    cpu: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model<ISlotmodel>('model', Slotmodel, 'models');