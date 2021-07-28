const express = require('express');


const app = express();

app.use(express.json());

const port = 5050;

app.listen(port,()=> {
    console.log(`Server is Running on port ${port}`)
});