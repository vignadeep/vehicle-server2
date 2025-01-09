const express = require('express')
const app = express()
const cors = require('cors');
const multer  = require('multer')
const maxSize = 20 * 1024 * 1024;
const upload = multer({ dest: './uploads', limits: { fileSize: maxSize /* bytes */ }})

const hostname = '127.0.0.1';
const port = 5000;
let mainData: any[] = [];

app.use(cors({allowedHeaders:'*'}));
app.use(express.json());

app.post('/create', (req: any, res: any) => {
  console.log(req.body)
  mainData.push(req.body);
  let startIndex = mainData.length > 5 ? mainData.length - 5 : 0
  res.json({Data: mainData.slice(startIndex, startIndex+5)})
});

app.post('/upload', upload.single('pdffile'), (req: any, res: any) => {
  console.log("file uploaded")
  res.json({})
});

app.post('*', (req: any, res: any) => {
  console.log(req + "REQ INVALID")
});

app.listen(port)
console.log("Listening....")