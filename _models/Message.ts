import  mongoose, { Schema, model } from  "mongoose";

export interface MessageDocument {
    _id: string;
    context: string;
    sender: object;
    senderType: string;
    receiver: object;
    keyWords: Array<string>;
    createdAt: Date;
    messageType: 'bot' | 'user';
}

const MessageSchema = new Schema<MessageDocument>({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'messageType'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'messageType'
    },
    context: {
        type: String,
        required: [true, "Context is required"]
    },
    keyWords: {
        type: [String],
    },
    messageType: {
        type: String,
        required: true,
        enum: ['User', 'Sensei']
    },
}, {
    timestamps: true,
});

export const  Message  =  mongoose.models?.Message  ||  model<MessageDocument>('Message', MessageSchema);