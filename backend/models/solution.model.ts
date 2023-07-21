import mongoose from 'mongoose';
import { ISolution } from './types/solution';

const Comment = new mongoose.Schema({
    byUsername: {
        type: String,
        required: [true, 'Username is required'],
    },
    comment: {
        type: String,
        required: [true, 'Comment is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    upvotes: {
        type: Number,
        default: 0,
        required: true,
    },
    replies: {
        type: [this],
        default: [],
        required: true,
    },
});

const Solution = new mongoose.Schema<ISolution>({
    problemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: [true, 'Problem id is required'],
    },
    approach: {
        type: [
            {
                name: String,
                intuition: String,
                algorithm: String,
                code: {
                    cPlusPlus: String,
                },
                complexity: String,
            },
        ],
        required: [true, 'Approach is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    upvotes: {
        type: Number,
        default: 0,
        required: true,
    },
    downvotes: {
        type: Number,
        default: 0,
        required: true,
    },
    avgRating: {
        type: Number,
        default: 0,
        required: true,
    },
    comments: {
        type: [Comment],
        default: [],
        required: true,
    },
});

export default mongoose.model<ISolution>('Solution', Solution);
