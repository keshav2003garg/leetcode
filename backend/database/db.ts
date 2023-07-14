import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/leetcode');
        console.log('Connected to MongoDB');
    } catch (error: unknown) {
        console.error('Error connecting to MongoDB', error);
    }
};

export default connectDB;
