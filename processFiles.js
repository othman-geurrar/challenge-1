/*
// processFiles.js
const { readFileAsync, writeFileAsync } = require('./node.js');

async function processFiles(filePaths) {
    try {
        const readPromises = filePaths.map(path => readFileAsync(path, 'utf8'));
        const fileContents = await Promise.all(readPromises);

        const processedContents = fileContents.map(content => content.toUpperCase());

        const writePromises = processedContents.map((content, index) =>
            writeFileAsync(`output${index}.txt`, content)
        );

        await Promise.all(writePromises);
        console.log('All files processed successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = processFiles;
*/


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
