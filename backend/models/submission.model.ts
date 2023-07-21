import mongoose from 'mongoose';
import { ISubmission } from './types/submission';

const submissionSchema = new mongoose.Schema<ISubmission>({
    problemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem',
        required: [true, 'Problem id is required'],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User id is required'],
    },
    submittedAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    status: {
        type: String,
        required: [true, 'Status is required'],
    },
    runtime: {
        type: Number,
        required: [true, 'Runtime is required'],
    },
    memory: {
        type: Number,
        required: [true, 'Memory is required'],
    },
    language: {
        type: String,
        required: [true, 'Language is required'],
    },
    testCasesPassed: {
        type: Number,
        required: [true, 'Test cases passed is required'],
    },
    totalTestCases: {
        type: Number,
        required: [true, 'Total test cases is required'],
    },
    code: {
        type: String,
        required: [true, 'Code is required'],
    },
});

export default mongoose.model<ISubmission>('Submission', submissionSchema);
