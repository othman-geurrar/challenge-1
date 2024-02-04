
const fs = require('fs');

function readFileAsync (filePath){
return new Promise((resolve,reject)=>{
fs.readFile(filePath,'utf8',(err,data)=>{
    if(err){
        reject('file not found')
    }else{
        resolve(data)
    }
}) 

})


}
module.exports = readFileAsync;