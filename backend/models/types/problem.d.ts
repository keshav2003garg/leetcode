import mongoose, { Document } from 'mongoose';

declare enum Difficulty {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard',
}
declare type Example = {
    input: string;
    output: string;
    explanation: string;
};
declare type SimilarProblem = {
    slug: string;
    name: string;
    difficulty: Difficulty;
};
declare type Solution = {
    cPlusPlus: string;
};

export interface IProblem extends Document {
    problemNo: number;
    slug: string;
    name: string;
    difficulty: Difficulty;
    likes: number;
    dislikes: number;
    description: string;
    examples: Example[];
    constraints: string[];
    companyTags: string[];
    tags: string[];
    similarProblems: SimilarProblem[];
    hint: string[];
    createdAt: Date;
    solution: Solution;
    testCases: string[];
    exampleTestCases: string[];
    solutions: mongoose.Types.ObjectId[];
    discussions: mongoose.Types.ObjectId[];
    submissions: mongoose.Types.ObjectId[];
    acceptedSubmissions: number;
    totalSubmissions: number;
}
