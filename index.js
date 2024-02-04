// index.js
const processFiles = require('./processFiles');

async function main() {
    const filePaths = ['file1.txt', 'file2.txt', 'file3.txt'];
    await processFiles(filePaths);
}

main();
