import mongoose from 'mongoose';
import { IDiscussion } from './types/discussion';

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

const Disscussion = new mongoose.Schema<IDiscussion>({
    problemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: [true, 'Problem id is required'],
    },
    byUsername: {
        type: String,
        required: [true, 'Username is required'],
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    tags: {
        type: [String],
        default: [],
        required: true,
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
    comments: {
        type: [Comment],
        default: [],
        required: true,
    },
});

export default mongoose.model<IDiscussion>('Discussion', Disscussion);
