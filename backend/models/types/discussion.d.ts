import mongoose, { Document } from 'mongoose';

declare type Comment = {
    byUsername: string;
    comment: string;
    createdAt: Date;
    upvotes: number;
    replies: Comment[];
};

export interface IDiscussion extends Document {
    problemId: mongoose.Types.ObjectId;
    byUsername: string;
    title: string;
    description: string;
    tags: string[];
    createdAt: Date;
    upvotes: number;
    comments: Comment[];
}
