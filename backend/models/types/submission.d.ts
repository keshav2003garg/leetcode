import mongoose, { Document } from 'mongoose';

export interface ISubmission extends Document {
    problemId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    submittedAt: Date;
    status: string;
    runtime: number;
    memory: number;
    language: string;
    testCasesPassed: number;
    totalTestCases: number;
    code: string;
}
