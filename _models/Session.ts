import  mongoose, { Schema, model } from  "mongoose";

export interface SessionDocument {
    _id: string;
    user: object;
    sensei: object;
    message: object;
    createdAt: Date;
    updatedAt: Date;
}

const SessionSchema = new Schema<SessionDocument>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sensei: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sensei'
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }
}, {
    timestamps: true,
});

export const  Session  =  mongoose.models?.Session  ||  model<SessionDocument>('Session', SessionSchema);