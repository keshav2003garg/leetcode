import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        autoIncrement.initialize(mongoose.connection);
    } catch (error: unknown) {
        console.error('Error connecting to MongoDB', error);
    }
};

export default connectDB;
