
import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";


dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

// body-parser

app.use(express.json());

app.use(express.urlencoded({extended:true}));

connectDB();


app.get('/', (req, res)=>{

    res.send("Hello World!");
})

app.use("/api/product", productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, ()=>{

    console.log(`server is running at ${port}`)
});

