const express = require('express')
const app = express()
const cors = require('cors');
const functions = require('firebase-functions');

const hostname = '127.0.0.1';
const port = 5000;

app.use(cors({allowedHeaders:'*'}));

app.post('/create', (req: any, res: any) => {
    res.send('hello world')
  })
  
app.listen(port)
console.log("Listening....")
exports.api = functions.https.onRequest(app);