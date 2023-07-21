import mongoose, { Document } from 'mongoose';

declare type Info = {
    profilePicture: string;
    name: string;
    gender: string;
    location: string;
    bithday: Date;
    summary: string;
    website: string;
    github: string;
    linkedin: string;
    twitter: string;
    work: string;
    education: string;
    technicalSkills: string[];
};
declare type FavoritesList = {
    slug: string;
    name: string;
    difficulty: string;
};
declare type ProblemCount = {
    easy: number;
    medium: number;
    hard: number;
};
declare type Skills = {
    advanced: {
        tags: string;
        count: number;
    }[];
    intermediate: {
        tags: string;
        count: number;
    }[];
    fundamental: {
        tags: string;
        count: number;
    }[];
};

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    info: Info;
    isAdmin: boolean;
    favoritesList: FavoritesList[];
    createdAt: Date;
    submissions: mongoose.Types.ObjectId[];
    lastYearSubmmisionCount: number;
    points: mongoose.Types.ObjectId[];
    pointCount: number;
    problemsSolved: number;
    problemsAttempted: number;
    problemsCount: ProblemCount;
    skills: Skills;
    rank: number;
    recentSubmissions: mongoose.Types.ObjectId[];
    batches: string[];
    reputation: number;
}
