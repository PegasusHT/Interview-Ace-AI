import  mongoose, { Schema, model } from  "mongoose";

export interface SenseiDocument {
    _id: string;
    name: string;
    field: string;
    description: string;
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

export const  Sensei  =  mongoose.models?.Sensei  ||  model<SenseiDocument>('Sensei', SenseiSchema);