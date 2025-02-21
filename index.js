import 'dotenv/config'
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${port}`);
    console.log('Press Ctrl + C to stop the server.');
});