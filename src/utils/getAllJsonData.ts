import fs from 'fs';
import path from 'path';

export function getAllJsonData(directoryPath: string) {
    // Get the full path of the directory
    const dirPath = path.join(process.cwd(), directoryPath);

    // Read the directory and get an array of all file names
    const fileNames = fs.readdirSync(dirPath);

    // Map each file name to its JSON data
    const allData = fileNames.map(fileName => {
        // Get the full path of the file
        const filePath = path.join(dirPath, fileName);

        // Read the file and parse the JSON data
        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);

        return data;
    });

    return allData;
}