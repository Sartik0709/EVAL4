import * as logService from '../services/logServices.js';

export async function getLogs(req, res) {
  try {
    const logs = await logService.getAllLogs();
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error retrieving logs:', error);
    res.status(500).send('Internal server error');
  }
}

export async function getLogsBySeverity(req, res) {
  try {
    const { severity } = req.params;
    const logs = await logService.getLogsBySeverity(severity);
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error retrieving logs by severity:', error);
    res.status(500).send('Internal server error');
  }
}