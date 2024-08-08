import  mongoose, { Schema, model } from  "mongoose";

export interface SenseiDocument {
    _id: string;
    name: string;
    character: Array<string>;
}

const SenseiSchema = new Schema<SenseiDocument>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    character: {
        type: [String],
        required: [true, "Character is required"]
    }
}, {
    timestamps: true,
});

const  Sensei  =  mongoose.models?.Sensei  ||  model<SenseiDocument>('Sensei', SenseiSchema);