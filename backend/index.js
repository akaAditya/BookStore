/** @format */

import express from "express";
import { PORT, URI } from "./config.js";
import mongoose from "mongoose";
import booksRouters from "../backend/routers/booksRouters.js"
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow all origins with default of cors

app.use(cors());

// Option 2: Allow custom origins
// app.use(cors({
//   origin: 'http://localhost:5555/',
//   method: ['GET', 'POST', 'UPDATE', 'DELETE'],
//   headers: ['Content-Type'],
// }))


app.get("/", (req, res) => {
  console.log(req);
  return res.status(202).send("Welcome to the backend Project");
});

app.use('/books', booksRouters)

mongoose
  .connect(URI)
  .then(() => {
    console.log("App is connected to mongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
