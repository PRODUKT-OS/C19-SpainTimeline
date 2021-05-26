import Slot from '../models/Slot';
import Slotmodel from '../models/Model';
import * as constructor from '../config/constructors'
import { Request, Response } from 'express';

import crypto from 'crypto';
import bcrypt from 'bcrypt';
import bcryptConfig from '../config/bcrypt';
import { Model } from 'mongoose';

export function sendSlotsInfo(connection: any) {
    Slot.find({}).exec(function (err: any, slots: any) {
        var msg = constructor.msgObj("tableResponse", slots, "1234");
        console.log("SENDING:\n");
        console.log(msg);
        connection.send(JSON.stringify(msg));
    });
}

export function sendModelsInfo(connection: any) {
    Slotmodel.find({}).exec(function (err: any, models: any) {
        var msg = constructor.msgObj("modelsResponse", models, "1234");
        console.log("SENDING:\n (slots)");
        //console.log(msg);
        connection.send(JSON.stringify(msg));
    });
}

// export function sendCasinosInfo(connection: any) {
//     Slotmodel.find({}).exec(function (err: any, models: any) {
//         var msg = constructor.msgObj("modelsResponse", models, "1234");
//         console.log("SENDING:\n (slots)");
//         //console.log(msg);
//         connection.send(JSON.stringify(msg));
//     });
// }

function populateDBslot() {
    const newSlot = new Slot({
        machineId: "1234",
        lastConnection: "yesterday",
        country: "spain",
        city: "barcelona",
        casino: "grandCasino",
        client: "pepeCasinos",
        status: "working",
        models: "1",
        invoice: "a",
        date: "today",
        licence: "1234",
        installationDate: "today",
        winCompany: "Slots",
        hwInvoice: "a",
        swInvoice: "a",
        swInvoiceDate: "a",
        dealType: "a",
        EOT: "a",
        shareRevenuesTerms: "a",
        purchasePrice: "a",
        contractDate: "today",
        access_token: "1234"
    }).save();
}


const slotsController = {
    create: async (req: Request, res: Response) => {
        console.log(req.body);
        try {
            const { inputMachineID, inputCountry, inputCity, inputCasino, inputModels, inputLastConnection, inputClient, inputStatus, inputInvoice, inputDate, inputLicence, inputInstallationDate, inputWinCompany, inputHWinvoice, inputSWinvoice, inputSWinvoiceDate, inputDealType, inputEOT, inputShareRevenuesTerms, inputPurchasePrice, inputContractDate, inputClickedMachineID } = req.body;
            //console.log(inputMachineID);
            if (!inputCountry || !inputCity || !inputCasino || !inputModels || !inputLastConnection || !inputClient || !inputStatus || !inputInvoice || !inputDate || !inputLicence || !inputInstallationDate || !inputWinCompany || !inputHWinvoice || !inputSWinvoice || !inputSWinvoiceDate || !inputDealType || !(inputEOT || inputShareRevenuesTerms || inputPurchasePrice) || !inputContractDate) return res.status(400).json({ message: "Missing data" });
            const slotWithSameID = await Slot.findOne({ machineId: inputMachineID }).exec();
            if (slotWithSameID && inputMachineID != inputClickedMachineID) return res.status(400).json({ message: "ID taken" });

            if (inputClickedMachineID) {
                const SlotExists = await Slot.findOne({ machineId: inputClickedMachineID }).exec();

                if (SlotExists) {
                    var updateInfo = {
                        machineId: inputMachineID,
                        country: inputCountry,
                        city: inputCity,
                        casino: inputCasino,
                        models: inputModels,
                        lastConnection: inputLastConnection,
                        dealType: inputDealType,
                        client: inputClient,
                        status: inputStatus,
                        invoice: inputInvoice,
                        date: inputDate,
                        licence: inputLicence,
                        installationDate: inputInstallationDate,
                        winCompany: inputWinCompany,
                        hwInvoice: inputHWinvoice,
                        swInvoice: inputSWinvoice,
                        swInvoiceDate: inputSWinvoiceDate,
                        EOT: inputEOT,
                        shareRevenuesTerms: inputShareRevenuesTerms,
                        purchasePrice: inputPurchasePrice,
                        contractDate: inputContractDate
                    }



                    const objectArray = Object.entries(updateInfo);
                    const updateInfoAsArray: Array<string> = [];
                    objectArray.forEach(([key, value]) => {
                        updateInfoAsArray.push(value)

                    });

                    await Slot.findOneAndUpdate({ machineId: inputClickedMachineID }, updateInfo); //Search for inputClickedMachineID as user could have changed the real machineID

                    return res.status(201).json({ message: "Successful Update", updatedInfo: updateInfoAsArray })

                }
            } else {
                var nInfo = {
                    machineId: inputMachineID,
                    country: inputCountry,
                    city: inputCity,
                    casino: inputCasino,
                    models: inputModels,
                    lastConnection: inputLastConnection,
                    client: inputClient,
                    status: inputStatus,
                    invoice: inputInvoice,
                    date: inputDate,
                    licence: inputLicence,
                    installationDate: inputInstallationDate,
                    winCompany: inputWinCompany,
                    hwInvoice: inputHWinvoice,
                    swInvoice: inputSWinvoice,
                    swInvoiceDate: inputSWinvoiceDate,
                    dealType: inputDealType,
                    EOT: inputEOT,
                    shareRevenuesTerms: inputShareRevenuesTerms,
                    purchasePrice: inputPurchasePrice,
                    contractDate: inputContractDate

                }
                const newSlot = await new Slot(nInfo).save();
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
            const { inputMachineId } = req.body;
            //console.log(inputMachineID);
            if (!inputMachineId) return res.status(400).json({ message: "Missing data" });

            Slot.findOne({ machineId: inputMachineId }, function (err: any, slot: any) {
                if (err) return res.status(500).json({ message: "Internal Server Error", err });
                console.log("deleting slot " + inputMachineId);
                slot.remove()
                return res.status(201).json({ message: "Successful" });

            })


        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error", err });
        }

    }

};
export default slotsController;