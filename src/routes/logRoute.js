import { Router } from 'express'
import { getLogs, getLogsBySeverity } from '../controllers/logController.js';
  

const router= Router();
router.get('/' ,getLogs)
router.get('/:Sevierty', getLogsBySeverity)
export default router