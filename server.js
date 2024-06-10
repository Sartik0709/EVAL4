import express from 'express';
import {config} from 'dotenv'
import mongoose from 'mongoose'
import cron from 'node-cron';
import Uploadrouter from './src/routes/uploadRoute.js';
import logrouter from './src/routes/logRoute.js';
// import * as fileService from './src/services/fileService.js';
// import * as databaseService from './src/services/databaseService.js';

config();

const Port = process.env.PORT || 8080

const app= express();

mongoose.connect(process.env.DB_URI)
.then(()=>console.log('connected to db'))
.catch(err=>console.log('error in connecting to database',err));

app.use(express.json());

app.use('/upload', Uploadrouter);
app.use('/logs',logrouter);

 app.listen(Port, () => console.log(`Server is running on port ${Port}`));
cron.schedule('0 0 */12 * * *', async () => {
    try {
      const newEntries = await fileService.getNewEntries();
      await databaseService.addEntriesToDatabase(newEntries);
      console.log('New entries added to the database:', newEntries);
    } catch (error) {
      console.error('Error processing new entries:', error);
    }
  });