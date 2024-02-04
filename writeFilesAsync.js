const fs = require('fs');

function writeFileAsync(filePath,content){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath ,content ,'utf8' ,(err)=>{
            if(err){
                reject(" could/'t write file ")
            }else{
                resolve('File write successful')
            }
        })

    })
}

module.exports = writeFileAsync;