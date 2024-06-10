import fs from 'fs/promises';
import path from 'path';
import Log from '../models/logModel.js';
const dataFilePath = path.join(process.cwd(), 'data.json');

export async function getNewEntries() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf8');
    const entries = JSON.parse(fileContent);

    const existingEntries = await getExistingEntries();

    const newEntries = entries.filter(entry => !existingEntries.some(e => e.id === entry.id));

    return newEntries;
  } catch (error) {
    console.error('Error reading new entries:', error);
    throw error;
  }
}
export async function getExistingEntries() {
  try {
    const logs = await Log.find().select('id -_id');
    return logs.map(log => log.toObject());
  } catch (error) {
    console.error('Error fetching existing entries:', error);
    throw error;
  }
}
export async function upload(file) {
  try {
    await fs.writeFile(dataFilePath, file.buffer);
    console.log('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}