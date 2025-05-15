import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env file from the backend directory
dotenv.config({ path: path.join(__dirname, '../.env') });

const connectToMongoDB = async () => {
	try {
		if (!process.env.MONGODB_URI) {
			throw new Error("MONGODB_URI is not defined in environment variables");
		}
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
		process.exit(1);
	}
};

export default connectToMongoDB;
