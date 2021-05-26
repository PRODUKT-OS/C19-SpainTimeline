import Alert from '../models/Alert';
import * as constructor from '../config/constructors'
import { Request, Response } from 'express';
var ObjectId = require('mongoose').Types.ObjectId;
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import bcryptConfig from '../config/bcrypt';
import { Model } from 'mongoose';

function formatDatetime(time:any){
    // var res = time.split("T")
    // console.log(res[0])
    return((time.getMonth()+1)+ "/" + time.getDate() + "/" + time.getFullYear()  );
}

export function sendAlertsInfo(connection: any) {
    Alert.find({}).exec(function (err: any, alerts: any) {
        var msg = constructor.msgObj("alertsResponse", alerts, "1234");
        console.log("SENDING:\n");
        console.log(msg);
        connection.send(JSON.stringify(msg));
    });
}
export function populateDBalert() {
    const newAlert = new Alert({
        _id: ObjectId(),
        slotId: ObjectId(),
        country: "A",
        casino: "D",
        machineId: "GST84765",
        alertType: "Type4",
        status: "Closed"
    }).save();
}
const alertsController = {
    update: async (req: Request, res: Response) => {
        console.log(req.body);
        try {
            const { inputAlertId, inputStatus } = req.body;
            console.log(ObjectId(inputAlertId))
            //console.log(inputMachineID);
            if (!inputAlertId || !inputStatus) return res.status(400).json({ message: "Missing data" });

            const alert = await Alert.findOne({ _id: ObjectId(inputAlertId) }).exec();
            if (alert) {

                var updateInfo = {
                    _id: ObjectId(alert._id),
                    slotId: ObjectId(alert.slotId),
                    country: alert.country,
                    casino: alert.casino,
                    machineId: alert.machineId,
                    alertType: alert.alertType,
                    status: inputStatus
                }

                const objectArray = Object.entries(updateInfo);
                const updateInfoAsArray: Array<string> = [];
                objectArray.forEach(([key, value]) => {
                    updateInfoAsArray.push(value)

                });
                await Alert.findByIdAndRemove({ _id: inputAlertId }).exec();
                await new Alert(updateInfo).save();
                formatDatetime(ObjectId(alert._id).getTimestamp())
                updateInfoAsArray.push(formatDatetime(ObjectId(alert._id).getTimestamp()))
                return res.status(201).json({ message: "Successful Update "+inputStatus, updatedInfo: updateInfoAsArray })
            } else {
                return res.status(400).json({ message: "ID taken" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error", err });
        }
    },
    delete: async (req: Request, res: Response) => {
    }

};
export default alertsController;