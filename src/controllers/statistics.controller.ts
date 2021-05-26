import Slot from '../models/Slot';
import * as constructor from '../config/constructors'
import { NextFunction, Request, Response } from 'express';


var todayDate;
var defaultDateFrom;
var defaultDateTo;

export function sendStatisticsInfo(connection: any) {
    /* Slot.find({}) //TO_DO: initial default filter by currentDate minus some days in order to get a bit less initial data
        //.sort({datefield: 1})
        .exec(function (err: any, slots: any) {
        var msg = constructor.msgObj("statisticsResponse", slots, "1234");
        console.log("SENDING:\n");
        console.log(msg);
        connection.send(JSON.stringify(msg));
    }); */
};

const getAllSlots = (req: Request, res : Response, next: NextFunction) => {
    Slot.find({})
        //.sort({datefield: 1})
        .exec()
        .then((results: any) => {
            return res.status(200).json({
                slots: results,
                count: results.length
            });
        })
        .catch((error: any) => {
            return res.status(500).json({
                message: error.message,
                error                
            });
        });
};

const statisticsController = {
    select: async (req: Request, res: Response) => {        
        try 
        {
            const 
            {
                MachineId, 
                Country,
                City,
                Client, 
                Casino, 
                ThemeId,
                Model, 
                DateFrom,
                DateTo
            } = req.body;   

            todayDate = Date.now();

            defaultDateFrom = new Date(todayDate);
            defaultDateFrom.setDate(defaultDateFrom.getDate() - 60);

            defaultDateTo = new Date(todayDate);
            defaultDateTo.setDate(defaultDateTo.getDate() + 60);   

            const results = await Slot.aggregate(
            [    
                {
                    $match: 
                    {
                        $and: 
                        [
                            { 
                                "machineId": ( MachineId != "" ? MachineId : /./ )  
                            },
                            {
                                "country": ( Country != "" ? Country : /./ )
                            },
                            {
                                "city": ( City != "" ? City : /./ ) 
                            },
                            {
                                "client": ( Client != "" ? Client : /./ ) 
                            },
                            {
                                "casino": ( Casino != "" ? Casino : /./ )  
                            },
                            {
                                "models": ( Model != "" ? Model : /./ )
                            },
                            {
                                "perfMeters.themeID": ( ThemeId != "" ? ThemeId : /./ ) 
                            }
                        ]
                    }
                },
                { 
                    $project: 
                    {
                        "machineId": 1,
                        "country": 1,
                        "city": 1,
                        "client": 1,
                        "casino": 1,
                        "models": 1,
                        "shareRevenuesTerms": 1,
                        "perfMeters":
                        {
                            $filter: 
                            {
                                input: "$perfMeters",
                                as: "perfMeters",
                                cond: 
                                {
                                    $and:
                                    [ 							
                                        { 
                                            $lte: 
                                            [
                                                "$$perfMeters.meterDate", ( DateTo != "" ? new Date(DateTo) : new Date(defaultDateTo.toISOString()) ) 
                                            ]
                                        },
                                        { 
                                            $gte: 
                                            [
                                                "$$perfMeters.meterDate", ( DateFrom != "" ? new Date(DateFrom) : new Date(defaultDateFrom.toISOString()) )
                                            ]
                                        }
                                    ]
                                }
                            }			
                        },
                        "transMeters":
                        {
                            $filter: 
                            {
                                input: "$transMeters",
                                as: "transMeters",
                                cond: 
                                {
                                    $and:
                                    [ 							
                                        { 
                                            $lte: 
                                            [
                                                "$$transMeters.meterDate", ( DateTo != "" ? new Date(DateTo) : new Date(defaultDateTo.toISOString()) ) 
                                            ]
                                        },
                                        { 
                                            $gte: 
                                            [
                                                "$$transMeters.meterDate", ( DateFrom != "" ? new Date(DateFrom) : new Date(defaultDateFrom.toISOString()) )
                                            ]
                                        }
                                    ] 
                                }
                            }				
                        },
                        "curMeters":
                        {
                            $filter: 
                            {
                                input: "$curMeters",
                                as: "curMeters",
                                cond: 
                                {
                                    $and:
                                    [ 							
                                        { 
                                            $lte: 
                                            [
                                                "$$curMeters.meterDate", ( DateTo != "" ? new Date(DateTo) : new Date(defaultDateTo.toISOString()) ) 
                                            ]
                                        },
                                        { 
                                            $gte: 
                                            [
                                                "$$curMeters.meterDate", ( DateFrom != "" ? new Date(DateFrom) : new Date(defaultDateFrom.toISOString()) )
                                            ]
                                        }
                                    ] 
                                }
                            }				
                        },
                        "cabMeters":
                        {
                            $filter: 
                            {
                                input: "$cabMeters",
                                as: "cabMeters",
                                cond: 
                                {
                                    $and:
                                    [ 							
                                        { 
                                            $lte: 
                                            [
                                                "$$cabMeters.meterDate", ( DateTo != "" ? new Date(DateTo) : new Date(defaultDateTo.toISOString()) ) 
                                            ]
                                        },
                                        { 
                                            $gte: 
                                            [
                                                "$$cabMeters.meterDate", ( DateFrom != "" ? new Date(DateFrom) : new Date(defaultDateFrom.toISOString()) )
                                            ]
                                        }
                                    ] 
                                }
                            }				
                        }			
                    }
                }
            ])
            //.sort({datefield: 1})
            .exec()
            .then((results: any) => {                
                return res.status(200).json({
                    message: "Successful",
                    slots: results,
                    count: results.length
                });                
            })
            .catch((error: any) => {
                return res.status(500).json({
                    message: error.message,
                    error                
                });
            }); 
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error", err });
        }
    },
};

export default statisticsController;

//export default { getAllSlots, statisticsController };