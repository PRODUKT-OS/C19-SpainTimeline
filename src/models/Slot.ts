import mongoose, { Schema, Document, Types } from 'mongoose';

// Interfaces:

interface IPerfMeter extends Types.Subdocument {
    meterName: string;
    themeID: string;
    paytableID: string;
    denomID: string;
    meterValue: string;
    meterDate: Date;
};

interface ITransMeter extends Types.Subdocument {
    meterName: string;    
    deviceClass: string;
    deciveID: string;
    meterValue: string;
    meterDate: Date;
};

interface ICurMeter extends Types.Subdocument {
    meterName: string;    
    currencyID: string;
    denomID: string;
    currencyType: string;
    meterValue: string;
    meterDate: Date;
};

interface ICabMeter extends Types.Subdocument {
    meterName: string;  
    meterValue: string;
    meterDate: Date;
};

interface ISlot extends Document {
    _id: string;
    machineId: string;
    lastConnection: string;
    country: string;
    city: string;
    casino: string;
    client: string;
    status: string;
    models: string;
    invoice: string;
    date : string;
    licence : string;
    installationDate: string;
    winCompany: string;
    hwInvoice: string;
    swInvoice: string;
    swInvoiceDate: string;
    dealType: string;
    EOT: string;
    shareRevenuesTerms: string;
    purchasePrice: string;
    contractDate: string;
    perfMeters: Types.Array<IPerfMeter>;
    transMeters: Types.Array<ITransMeter>;
    curMeters: Types.Array<ICurMeter>;
    cabMeters: Types.Array<ICabMeter>;
};


// Schemas:

const PerfMeter: Schema = new mongoose.Schema({
    meterName: {
        type: String,
        required: true,
    },
    themeID: {
        type: String,
        required: true,
    },
    paytableID: {
        type: String,
        required: true,
    },
    denomID: {
        type: String,
        required: true,
    },
    meterValue: {
        type: String,
        required: true,
    },
    meterDate: {
        type: Date,
        required: true,
    } 
}, {
    timestamps: true,
});

const TransMeter: Schema = new mongoose.Schema({    
    meterName: {
        type: String,
        required: true,
    },
    deviceClass: {
        type: String,
        required: true,
    },
    deciveID: {
        type: String,
        required: true,
    },
    meterValue: {
        type: String,
        required: true,
    },
    meterDate: {
        type: Date,
        required: true,
    } 
}, {
    timestamps: true,
});

const CurMeter: Schema = new mongoose.Schema({
    meterName: {
        type: String,
        required: true,
    },
    currencyID: {
        type: String,
        required: true,
    },
    denomID: {
        type: String,
        required: true,
    },
    currencyType: {
        type: String,
        required: true,
    },
    meterValue: {
        type: String,
        required: true,
    },
    meterDate: {
        type: Date,
        required: true,
    } 
}, {
    timestamps: true,
});

const CabMeter: Schema = new mongoose.Schema({
    meterName: {
        type: String,
        required: true,
    },
    meterValue: {
        type: String,
        required: true,
    },
    meterDate: {
        type: Date,
        required: true,
    } 
}, {
    timestamps: true,
});

const Slot: Schema = new mongoose.Schema({
    machineId: {
        type: String,
        unique: true,
        required: true,
    },
    lastConnection: {
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
    casino: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    models: {
        type: String,
        required: true,
    },
    invoice: {
        type: String,
        required: true,
    },
    date : {
        type: String,
        required: true,
    },
    licence : {
        type: String,
        required: true,
    },
    installationDate: {
        type: String,
        required: true,
    },
    winCompany: {
        type: String,
        required: true,
    },
    hwInvoice: {
        type: String,
        required: true,
    },
    swInvoice: {
        type: String,
        required: true,
    },
    swInvoiceDate: {
        type: String,
        required: true,
    },
    dealType: {
        type: String,
        required: true,
    },
    EOT: {
        type: String
    },
    shareRevenuesTerms: {
        type: String
    },
    purchasePrice: {
        type: String
    },
    contractDate: {
        type: String,
        required: true,
    },
    perfMeters: [PerfMeter],
    transMeters: [TransMeter],
    curMeters: [CurMeter],
    cabMeters: [CabMeter]
}, {
    timestamps: true,
});

export default mongoose.model<ISlot>('Slot', Slot, 'slots');