const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
//const logger = require('./middleware/logger')
const morgan = require("morgan"); // logger
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
// Lode env variables
dotenv.config({ path: "./config/config.env" });
//coonect to database
connectDB();
//Route files
const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");

const app = express();

//Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount Routes
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);
app.use(errorHandler);

<<<<<<< HEAD
const PORT = process.env.PORT || 7450;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
=======

const PORT = process.env.PORT || 7455;
const server = 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
>>>>>>> b0988a0650e7afe20fa6ef69a250765ee31e8c34

//Handle unhadled promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

<<<<<<< HEAD
  //close server and exit process
  server.close(() => {
    process.exit(1);
  });
});
=======
    //close server and exit process
    server.close(()=>{
        process.exit(1)
    })
    
})
>>>>>>> b0988a0650e7afe20fa6ef69a250765ee31e8c34
