import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// For postman (Middleware)
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to the backend!');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });