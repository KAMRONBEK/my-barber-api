// Importing the necessary modules using ES6 syntax
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import cors from "cors";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Creating an instance of Express app
const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors({ origin: true }));

// Define routes for your Express application
// Example route
app.get("/", (req, res) => {
  res.send("Hello from  !");
});

app.get("/home", (req, res) => {
  res.send("Hello sucker");
});

// Export the Express app as a Cloud Function
export const api = functions.https.onRequest(app);
