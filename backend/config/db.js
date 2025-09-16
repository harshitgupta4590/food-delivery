// import mongoose from "mongoose";

// export const  connectDB = async () =>{

//     await mongoose.connect('{ mongodb+srv://harshitgkp04_db_user:9555734925@cluster0.hyt7ehu.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
// }


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI; // Load from .env
    if (!mongoURI) {
      throw new Error("❌ MONGO_URI is missing in .env file");
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

