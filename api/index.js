const express = require('express');
const mongoose = require("mongoose");
const config = require('./config');

const port = 8000;
const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

run().catch(e => console.error(e));

