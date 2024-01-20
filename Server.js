const express = require("express");
const dotenv=require("dotenv")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config()
const PORT = process.env.PORT
const productRouter=require("./Routes/blog.routes")

app.use(express.json());
app.use(cors())
app.use("/products",productRouter)
app.listen(PORT, () => {
    console.log("server connection PORT");
});

mongoose.connect("mongodb+srv://hesenovafidan0303:8138689fy@test.k3h4k0q.mongodb.net/").then(() => {
    console.log('Connected to MongoDB!');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});
