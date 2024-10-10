import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Database nosql connected");
    } catch (error) {
        console.log(error.message || error);
        process.exit(1);
    }
}

export default connectDB