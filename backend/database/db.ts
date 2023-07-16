import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error: unknown) {
        console.error('Error connecting to MongoDB', error);
    }
};

export default connectDB;
