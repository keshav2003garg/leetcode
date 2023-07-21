import mongoose from 'mongoose';
import yup from 'yup';
import { IUser } from './types/user';

const User = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        validate: {
            validator: (username: string) =>
                yup
                    .string()
                    .trim()
                    .min(3, 'Username must be at least 3 characters')
                    .max(30, 'Username cannot exceed 30 characters')
                    .matches(
                        /^\w+$/,
                        'Username must only contain letters, numbers, and underscores',
                    )
                    .isValidSync(username),
            message: (props) => `${props.value} is not a valid username`,
        },
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: (email: string) =>
                yup.string().email().isValidSync(email),
            message: (props) => `${props.value} is not a valid email`,
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: (password: string) =>
                yup
                    .string()
                    .min(8, 'Password must be at least 8 characters')
                    .max(30, 'Password cannot exceed 30 characters')
                    .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@ $ ! % * ? &)',
                    )
                    .isValidSync(password),
            message: (props) => `${props.value} is not a valid password`,
        },
    },
    info: {
        type: {
            profilePicture: {
                type: String,
                default: '',
            },
            name: {
                type: String,
                default: '',
            },
            gender: {
                type: String,
                default: '',
            },
            location: {
                type: String,
                default: '',
            },
            bithday: {
                type: Date,
                default: Date.now,
            },
            summary: {
                type: String,
                default: '',
            },
            website: {
                type: String,
                default: '',
            },
            github: {
                type: String,
                default: '',
            },
            linkedin: {
                type: String,
                default: '',
            },
            twitter: {
                type: String,
                default: '',
            },
            work: {
                type: String,
                default: '',
            },
            education: {
                type: String,
                default: '',
            },
            technicalSkills: {
                type: [String],
                default: [],
            },
        },
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    favoritesList: {
        type: [
            {
                slug: String,
                name: String,
                difficulty: String,
            },
        ],
        default: [],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    submissions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Submission',
        default: [],
        required: true,
    },
    lastYearSubmmisionCount: {
        type: Number,
        default: 0,
        required: true,
    },
    points: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Point',
        default: [],
        required: true,
    },
    pointCount: {
        type: Number,
        default: 0,
        required: true,
    },
    problemsSolved: {
        type: Number,
        default: 0,
        required: true,
    },
    problemsAttempted: {
        type: Number,
        default: 0,
        required: true,
    },
    problemsCount: {
        type: {
            easy: {
                type: Number,
                default: 0,
            },
            medium: {
                type: Number,
                default: 0,
            },
            hard: {
                type: Number,
                default: 0,
            },
        },
        required: true,
    },
    skills: {
        type: {
            advanced: {
                type: [
                    {
                        tags: String,
                        count: Number,
                    },
                ],
                default: [],
            },
            intermediate: {
                type: [
                    {
                        tags: String,
                        count: Number,
                    },
                ],
                default: [],
            },
            fundamental: {
                type: [
                    {
                        tags: String,
                        count: Number,
                    },
                ],
                default: [],
            },
        },
        required: true,
    },
    rank: {
        type: Number,
        default: 0,
        required: true,
    },
    recentSubmissions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Submission',
        default: [],
        required: true,
    },
    batches: {
        type: [String],
        default: [],
        required: true,
    },
    reputation: {
        type: Number,
        default: 0,
        required: true,
    },
});

export default mongoose.model<IUser>('User', User);
