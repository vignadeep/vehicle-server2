import { error } from "console";

const express = require('express') // express JS for handling REST endpoints
const app = express()


const cors = require('cors'); // CORS package to handle CORS issue


const multer  = require('multer') // multer for handling file upload
const maxSize = 20 * 1024 * 1024;
const upload = multer({ dest: './uploads', limits: { fileSize: maxSize }}) // max size is set 200 MB. will throw error if the file exceeds the limit

const hostname = '127.0.0.1';
const port = 5000; // port & hostname for local testing

let mainData: any[] = []; // in-memory data storage

app.use(cors({allowedHeaders:'*'}));
app.use(express.json());

/* 
Create API - main API for creating optimization data
method: POST
body - contains JSON to be stored in mainData
@returns JSON of the last 5 entries of mainData
*/
app.post('/create', (req: any, res: any) => {
  console.log(req.body)
  mainData.push(req.body);
  let startIndex = mainData.length > 5 ? mainData.length - 5 : 0
  res.json({Data: mainData.slice(startIndex, startIndex+5)})
});


/* 
Upload API - main API for uploading eScore report
method: POST
body - none
attachment - PDF single file
@returns 200 
*/
app.post('/upload', upload.single('pdffile'), (req: any, res: any) => {
  console.log("file uploaded")
  res.json({ status: 200})
});


/* 
Upload API - exception API for handling unintended requests
method: ALL
@returns 400 
*/
app.post('*', (req: any, res: any) => {
  console.log(req + "REQ INVALID")
  res.status(400)
});

app.listen(port)
console.log("Listening....")