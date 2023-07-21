import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { IProblem } from './types/problem';

const Problem = new mongoose.Schema<IProblem>({
    problemNo: {
        type: Number,
        required: [true, 'Problem number is required'],
        unique: true,
    },
    slug: {
        type: String,
        required: [true, 'Slug is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    difficulty: {
        type: String,
        required: [true, 'Difficulty is required'],
    },
    likes: {
        type: Number,
        required: true,
        default: 0,
    },
    dislikes: {
        type: Number,
        required: true,
        default: 0,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [100, 'Description must be atleast 100 characters long'],
    },
    examples: {
        type: [
            {
                input: String,
                output: String,
                explanation: String,
            },
        ],
        required: [true, 'Examples are required'],
        minlength: [2, 'There must be atleast 2 examples'],
    },
    constraints: {
        type: [String],
        required: [true, 'Constraints are required'],
        minlength: [2, 'There must be atleast 2 constraints'],
    },
    companyTags: {
        type: [String],
        required: [true, 'Company tags are required'],
    },
    tags: {
        type: [String],
        required: [true, 'Tags are required'],
    },
    similarProblems: {
        type: [
            {
                slug: String,
                name: String,
                difficulty: String,
            },
        ],
        required: true,
        default: [],
    },
    hint: {
        type: [String],
        required: true,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    solution: {
        type: {
            cPlusPlus: String,
        },
        required: [true, 'Solution is required'],
    },
    testCases: {
        type: [String],
        required: [true, 'Test cases are required'],
    },
    exampleTestCases: {
        type: [String],
        required: [true, 'Example test cases are required'],
    },
    solutions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Solution',
        required: true,
        default: [],
    },
    discussions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Discussion',
        required: true,
        default: [],
    },
    submissions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Submission',
        required: true,
        default: [],
    },
    acceptedSubmissions: {
        type: Number,
        required: true,
        default: 0,
    },
    totalSubmissions: {
        type: Number,
        required: true,
        default: 0,
    },
});

Problem.plugin(autoIncrement.plugin, {
    model: 'Problem',
    field: 'problemNo',
    startAt: 1,
    incrementBy: 1,
});

export default mongoose.model('Problem', Problem);
