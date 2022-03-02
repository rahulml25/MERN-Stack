// Module Imports
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/error');

const env_veriables = dotenv.parsed;
const port = env_veriables.HOST_PORT || 3000;
const host = env_veriables.HOST || "localhost";
const server_http = env_veriables.HTTP_TYPE;
const server_link = `${server_http}://${host}:${port}`;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/api/goals'));

app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server started on ${server_link}`);
});
