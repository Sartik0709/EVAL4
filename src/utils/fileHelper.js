import fs from 'fs/promises';
import path from 'path';
const dataFilePath = path.join(process.cwd(), 'data.json');

export async function readFile() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

export async function writeFile(data) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing file:', error);
    throw error;
  }
}