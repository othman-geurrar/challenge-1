


const readFileAsync = require('./readFileAsync');
const writeFileAsync = require('./writeFilesAsync');

async function processFiles(filePath){
    try{
        const readfile = filePath.map(path => readFileAsync(path ,'utf8'));
        const filecontent = await Promise.all(readfile);
        const processedContent = filecontent.map(content => content.toUpperCase());
        const writefile = processedContent.map((content , index )=> {
            writeFileAsync(`modFile${index + 1}.txt`, content)
        });
        await Promise.all(writefile);
        console.log("All files processed successfully .")

    }catch(error){console.error('An error occurred:', error)}

};
module.exports = processFiles;
