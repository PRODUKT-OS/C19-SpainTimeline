import Casino from '../models/Casino';
import * as constructor from '../config/constructors'
import { Request, Response } from 'express';

import crypto from 'crypto';
import bcrypt from 'bcrypt';
import bcryptConfig from '../config/bcrypt';
import { Model } from 'mongoose';

export function sendCasinosInfo(connection: any) {
    Casino.find({}).exec(function (err: any, casinos: any) {
        var msg = constructor.msgObj("casinosResponse", casinos, "1234");
        console.log("SENDING:\n");
        console.log(msg);
        connection.send(JSON.stringify(msg));
    });
}

const casinosController = {
    create: async (req: Request, res: Response) => {
        console.log(req.body);
        try {
            const { inputName, inputParticipationRate, inputCompany, inputCountry, inputCity, inputAddress, inputHACI, inputComments, inputClickedCasinoID } = req.body;
            //console.log(inputMachineID);
            if (!inputName || !inputParticipationRate || !inputCompany || !inputCountry || !inputCity || !inputAddress || !inputHACI || !inputComments) return res.status(400).json({ message: "Missing data" });

            const casinoWithSameID = await Casino.findOne({ _id: inputName }).exec();
            if (casinoWithSameID && inputName != inputClickedCasinoID) return res.status(400).json({ message: "ID taken" });

            if (inputClickedCasinoID) {
                const CasinoExists = await Casino.findOne({ _id: inputClickedCasinoID }).exec();
                const dateOfCreation = inputClickedCasinoID.createdAt;
                console.log(CasinoExists)
                if (CasinoExists) {
                    var updateInfo = {
                        _id: inputName,
                        participationRate: inputParticipationRate,
                        company: inputCompany,
                        country: inputCountry,
                        city: inputCity,
                        address: inputAddress,
                        HACI: inputHACI,
                        comments: inputComments
                    }

                    const objectArray = Object.entries(updateInfo);
                    const updateInfoAsArray: Array<string> = [];
                    objectArray.forEach(([key, value]) => {
                        updateInfoAsArray.push(value)

                    });
                    await Casino.findByIdAndRemove({ _id: inputClickedCasinoID }).exec();
                    await new Casino(updateInfo).save();
                    //BUSCAR FIX PARA UPDATEAR FECHAS DE CREACION
                    //await Casino.findOneAndUpdate(inputName , { createdAt: dateOfCreation }).exec();
                    //await Casino.findOneAndUpdate({ machineId: inputClickedCasinoID }, updateInfo); //Search for inputClickedMachineID as user could have changed the real machineID

                    return res.status(201).json({ message: "Successful Update", updatedInfo: updateInfoAsArray })

                }
            } else {
                var nInfo = {
                    _id: inputName,
                    participationRate: inputParticipationRate,
                    company: inputCompany,
                    country: inputCountry,
                    city: inputCity,
                    address: inputAddress,
                    HACI: inputHACI,
                    comments: inputComments
                }

                const newCasino = await new Casino(nInfo).save();
                return res.status(201).json({ message: "Successful", newInfo: nInfo });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error", err });
        }
    },
    delete: async (req: Request, res: Response) => {
        console.log(req.body);

        try {
            const { inputCasinoId } = req.body;
            //console.log(inputCasinoID);
            if (!inputCasinoId) return res.status(400).json({ message: "Missing data" });

            Casino.findOne({ _id: inputCasinoId }, function (err: any, casino: any) {
                if (err) return res.status(500).json({ message: "Internal Server Error", err });
                console.log("deleting casino " + inputCasinoId);
                casino.remove()
                return res.status(201).json({ message: "Successful" });

            })


        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error", err });
        }

    }

};
export default casinosController;