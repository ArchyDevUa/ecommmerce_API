const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRout = require("./routes/user")

dotenv.config();

app.use(express.json())
app.use("/api/user",UserRout  )

mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connection Success"))
    .catch((err) => console.log(err));
app.listen(process.env.PORT || 5000,()=>{
    console.log("Server is running")
});