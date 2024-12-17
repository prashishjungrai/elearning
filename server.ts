import { app } from "./app";
import connectDB from "./utils/db";
import dotenv from "dotenv";

dotenv.config({ path: "./server/.env" });


// Create server
app.listen(process.env.PORT, () => {
    console.log(`PORT from .env: ${process.env.PORT}`);
    console.log(`Server is connected with port ${process.env.PORT}`);
    connectDB();
});
