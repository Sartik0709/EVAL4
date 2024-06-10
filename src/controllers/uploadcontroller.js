import * as fileService from '../services/fileServices.js';

export async function uploadFile(req, res) {
  try {
    await fileService.upload(req.file);
    res.status(200).send('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Internal server error');
  }
}