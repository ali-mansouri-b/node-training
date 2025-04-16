const express = require('express')
const multer  = require('multer')
const os = require('os'); 

// set the temp directory to upload a file
const upload = multer({ dest: os.tmpdir() })

const app = express()

// upload a single file
app.post('/uploadFile', upload.single('uploadedFile'), function (req, res, next) {
  // req.file is the `uploadedFile` file
  const file = req.file;
  const fileName = req.file.originalname;

  console.log(fileName + " saved in " + os.tmpdir());
  console.log(file);

  res.sendStatus(200);
})

// upload multiple files
app.post('/uploadFiles', upload.array('uploadedFiles', 12), function (req, res, next) {
  // req.files is the array of 'uploadedFiles' files
  const files = req.files;
  console.log("Files uploaded in " + os.tmpdir());
  console.log(files);

  res.sendStatus(200);
})

app.listen(3000);