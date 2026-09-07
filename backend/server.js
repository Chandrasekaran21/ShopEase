
import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";


dotenv.config();

const app = express();
const port = 5000;

app.use(cors({

    origin:"http://localhost:5173",
    credentials: true
}));

// body-parser

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

connectDB();


app.get('/', (req, res)=>{

    res.send("Hello World!");
})

app.use("/api/product", productRoutes);
app.use("/api/users", userRoutes);


app.use(notFound);
app.use(errorHandler);


app.listen(port, ()=>{

    console.log(`server is running at ${port}`)
});

