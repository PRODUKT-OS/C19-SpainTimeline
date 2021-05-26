import mongoose, { Schema, Document, ObjectId } from 'mongoose';
var timestamps = require('mongoose-timestamp2');
interface IAlert extends Document {
    _id: ObjectId;
    slotId: ObjectId;
    country: string;
    casino: string;
    machineId: string;
    alertType: string;
    status: string;
};

const Alert: Schema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
    },
    slotId: {
        type: Schema.Types.ObjectId,
        required: true,
    },country: {
        type: String,
        required: true,
    },casino: {
        type: String,
        required: true,
    },machineId: {
        type: String,
        required: true,
    },
    alertType:    {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

Alert.plugin(timestamps);

export default mongoose.model<IAlert>('Alert', Alert, 'alerts');