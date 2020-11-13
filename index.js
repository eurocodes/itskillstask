const http = require("http");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./backend/config");
const userRoute = require("./backend/userRoute");

mongoose.connect(`mongodb+srv://ugochukwu:${config.MONGODB_PASSWORD}@cluster0.tb6ga.mongodb.net/${config.MONGODB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Successfully connected to Mongodb Atlas")
    })
    .catch(error => console.log("Error occoured", error.reason));


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRoute);

app.use(express.static(path.join(__dirname, "frontend/build")));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/frontend/build/index.html`));
});

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Server is listenin on port " + PORT)
})