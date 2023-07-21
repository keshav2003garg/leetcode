import mongoose, { Document } from 'mongoose';

export interface IPoint extends Document {
    userId: mongoose.Types.ObjectId;
    count: number;
    receivedAt: Date;
    type: string;
}
