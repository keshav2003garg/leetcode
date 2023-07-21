import mongoose from "mongoose";
import { IPoint } from "./types/point";

const Point = new mongoose.Schema<IPoint>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User id is required'],
    },
    count: {
        type: Number,
        required: [true, 'Count is required'],
    },
    receivedAt: {
        type: Date,
        required: [true, 'Received Time is required'],
    },
    type: {
        type: String,
        required: [true, 'PointType is required'],
    },
});

export default mongoose.model<IPoint>('Point', Point);