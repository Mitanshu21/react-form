require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_API,
  {
    dbName: "user",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to database"))
);

// Schema for users of app
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();

// For backend and express
// const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
});

app.post("/register", async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) {
    return res.status(422).json({ emailerror: "Email already existed!" });
  } else {
    try {
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();
      res.send(result);
    } catch (e) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

app.listen(5000);
