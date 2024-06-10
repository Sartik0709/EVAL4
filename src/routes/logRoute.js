import { Router } from 'express'
import { getLogs, getLogsBySeverity } from '../controllers/logController.js';
  

const logrouter= Router();
logrouter.get('/' ,getLogs)
logrouter.get('/:Sevierty', getLogsBySeverity)
export default logrouter