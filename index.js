var express = require('express');
var multer = require('multer');
var done = false;
var app = express();

app.use(multer( {dest:'./uploads/',
                 rename:function(fieldname,filename){
                    console.log('Field Name value ',fieldname);
                    console.log('Field Name value ',filename);
                    return filename;
                 }, 
                onFileUploadStart : function(file){
                    console.log('File recieved:');
                    console.log(file);
                },
                 onFileUploadData:function (file,data){
                    console.log('Data recieved');
                },
              }));

app.use(express.static(__dirname+"/public"));

app.post('/upload',require(__dirname+'/upload.js').upload);

app.listen(3000);