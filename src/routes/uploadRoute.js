import { Router } from 'express'
import { uploadFile } from '../controllers/uploadcontroller.js';
  

const Uploadrouter= Router();
Uploadrouter.post('/',uploadFile)

export default Uploadrouter