const express = require("express");
const app = express();
const port = 3000;
const user = [];
const questions = [
  {
    title: "two Sum",
    description: " given two digits return  the sum of them",
    testcases: [
      {
        input: "A = 4 B = 6",
        output: "10",
      },
    ],
  },
];
const submissions = [
  { userId: "1", questionId: "2", status: "accept" },
  { userId: "2", questionId: "5", status: "reject" },
];
app.post("/signup", function (req, res) {
  // Decode the request body to get email and password
  const { email, password } = req.body;

  // Check if the email already exists in the user array
  const existingUser = user.find((u) => u.email === email);

  if (existingUser) {
    // Send a conflict response with status code 400(email already exists)
    res.status(400).json({ message: "Email already exists" });
  } else {
    // Add the new user to the user array
    user.push({ email, password });

    // Send a success response with status code 200
    res.status(200).json({ message: "Signup successful" });
  }
});

app.post("/login", function (req, res) {
  // Decode the request body to get email and password
  const { email, password } = req.body;

  // Check if the user email exists in the user array
  const userFound = user.find((u) => u.email === email);

  if (userFound && userFound.password === password) {
    // Generate a random token for authentication
    const token = Math.random().toString(36);

    // Send a success response with token and status code 200
    res.status(200).json({ message: "Login successful", token });
  } else {
    // Send an unauthorized response with status code 401
    res.status(401).json({ message: "Login failed" });
  }
});
app.get("/questions", function (req, res) {
  // Return the questions array as a response
  res.status(200).json(questions);
});

app.post("/submissions", function (req, res) {
  // Extract user ID from request (you may use authentication to get this)
  const userId = req.query.userId;

  // Filter submissions based on the user ID
  const userSubmissions = submissions.filter(
    (submission) => submission.userId === userId
  );

  // Return the user's submissions as a response
  res.status(200).json(userSubmissions);
});
app.post("/submissions", function (req, res) {
  // Extract user ID from request (you may use authentication to get this)
  const userId = req.query.userId;

  // Randomly decide whether to accept or reject the submission
  const statusOptions = ["accept", "reject"];
  const randomStatus =
    statusOptions[Math.floor(Math.random() * statusOptions.length)];

  // Extract question ID and user's solution from request body
  const { questionId, solution } = req.body;

  // Add the submission to the submissions array
  submissions.push({ userId, questionId, status: randomStatus });

  // Send a response indicating the submission status
  res.status(200).json({
    message: `Submission ${randomStatus}`,
    submissionStatus: randomStatus,
  });
});

app.listen(port, function () {
  console.log("app listening on port 3000");
});
