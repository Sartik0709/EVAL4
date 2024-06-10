import Log from '../models/logModel.js';

export async function logMessage(severity, message) {
  try {
    const log = new Log({ severity, message });
    await log.save();
    console.log( `[${severity.toUpperCase()}]: ${message}`);
  } catch (error) {
    console.error('Error logging message:', error);
  }
}