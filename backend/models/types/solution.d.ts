import mongoose, { Document } from 'mongoose';

declare type Approach = {
    name: string;
    intuition: string;
    algorithm: string;
    code: {
        cPlusPlus: string;
    };
    complexity: string;
};
declare type Comment = {
    byUsername: string;
    comment: string;
    createdAt: Date;
    upvotes: number;
    replies: Comment[];
};

export interface ISolution extends Document {
    problemId: mongoose.Types.ObjectId;
    approach: Approach[];
    createdAt: Date;
    upvotes: number;
    downvotes: number;
    avgRating: number;
    comments: Comment[];
}
