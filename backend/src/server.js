// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Import express and cors
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Set up express
const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

//Add routers below:


// Set up a default "catch all" route to use when someone visits a route
app.get("/*splat", async (req, res) => {
  res.send("ok");
});

// Start our API server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`\n Server is running on http://localhost:${PORT}\n`);
});
