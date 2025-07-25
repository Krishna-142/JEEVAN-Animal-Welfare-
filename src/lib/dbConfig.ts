import mongoose from 'mongoose';

type ConnectionObject ={
    isConnected?:number;
}

const connection : ConnectionObject ={}

async function dbConnect()
{
    if(connection.isConnected)
    {
        console.log("Already connected to the database");
        return;
    }

   try {
     const db = await mongoose.connect(process.env.MONGO_URI || "")
     connection.isConnected = db.connections[0].readyState;
     console.log("Connected to the database");
   } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
   }
}

export default dbConnect;   