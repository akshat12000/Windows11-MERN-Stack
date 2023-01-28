const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const connectDB = require("./conn/database");
const cookieParser = require("cookie-parser");
const folderRouter = require("./routes/folderRouter");
const fileRouter = require("./routes/fileRouter");

dotenv.config({path:"config.env"});
const PORT = 4000 || process.env.PORT;

const app = express();
connectDB()

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/user",userRouter);
app.use("/folder",folderRouter);
app.use("/file",fileRouter);


app.listen(PORT,()=>{
    console.log("Server is running on port 4000")
})
