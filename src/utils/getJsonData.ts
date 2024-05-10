import fs from 'fs';
import path from 'path';

export function getJsonData(targetPath : string) {
    // Get the full path of the JSON file
    const filePath = path.join(process.cwd(), targetPath);

    // Read the file and parse the JSON data
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);

    return data;
}
