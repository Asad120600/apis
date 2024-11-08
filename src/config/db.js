import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "invenflow",        // Your database name
      useNewUrlParser: true,      // New URL parser (for backward compatibility)
      useUnifiedTopology: true,  // Use the new Server Discover and Monitoring engine
      useFindAndModify: false,   // Disable the legacy findAndModify() function
      useCreateIndex: true,      // Ensure indexes are created automatically
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);  // Exit process if MongoDB connection fails
  }
};
