//

import mongoose from "mongoose";

// mongodb+srv://chandru:chandru123@ecom.wgdzfwj.mongodb.net/Ecom

const connectDB = async () =>{

    try{
        
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log("MongoDB Connected Successfully")
    }catch(err) {

        console.log(`Error Message : ${err.message}`)

        process.exit(1);

    }
}

export default connectDB;