import Log from "../models/logModel.js";

export async function getAllLogs(){
    try {
        return await Log.find();
    } catch (error) {
        console.log('error in retriving logs');
    }
}

export async function getLogsBySeverity(Sevirity){
    try {
        return await Log.find({Sevirity});
    } catch (error) {
        console.log('error in retriving logs by Sevirity');
    }
}