const express=require("express"); // starts by requiring express module

const mongoose=require("mongoose");
require("dotenv").config

const routes = require("./routes/TaskRoute")


const cors = require("cors")

const app=express()                                                                                      //created an instance for expressapp
const PORT=process.env.PORT | 5000                                                                       //set upp a port for it to listen



app.use(express.json()) 
app.use(cors())

mongoose
   .connect('mongodb+srv://Chaitanya_Ubale:chaitanya123@cluster0.nmrdohr.mongodb.net/CRUD_DB?')      //mongoDB is connected using mongoose
   .then(() => console.log("MongoDB Connected....")) //callback function for asynchronus task API call
   .catch((err) => console.log(err)); //for cathcing err

// app.get("/get",(req,res) => {
//    res.send(" Hello World")
// })


app.use("/api",routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));  //app listens at port 5000 which is assigned to it 

// CORS cross origin resource sharing http header mechanism for to indicate any origin ie domain,scheme or port 