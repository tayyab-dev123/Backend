require("dotenv").config();
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT;
app.use(express.json());

const student = {
  student: {
    id: "12345",
    firstName: "John",
    lastName: "Doe",
    age: 20,
    gender: "Male",
    address: {
      street: "123 Main St",
      city: "Cityville",
      state: "State",
      zipCode: "12345",
    },
    contact: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    courses: [
      {
        courseId: "CS101",
        courseName: "Introduction to Computer Science",
        instructor: "Prof. Smith",
        grade: "A",
      },
      {
        courseId: "ENG201",
        courseName: "English Literature",
        instructor: "Prof. Johnson",
        grade: "B+",
      },
    ],
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/student", (req, res) => {
  res.json(student);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
