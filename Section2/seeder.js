const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

//Load env var
dotenv.config({ path: "./config/config.env" });

//Load models
const Bootcamp = require("./models/Bootcamp");
const Course = require("./models/Course");

//Coonect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

//Read Json file
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/courses.json`, "utf-8")
);

//Imports into db

const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Bootcamp.create(courses);
    console.log(`data imported....`.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

//Delete the data

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Course.deleteMany();
    console.log(`data Destroyed....`.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
