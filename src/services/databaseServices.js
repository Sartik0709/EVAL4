import Log from "../models/logModel.js";

export async function addEntryToDatabase(entries){
    try {
        for(const entry of entries){
            const log = new Log(entry);
            await log.save();
            console.log('entries added sucessfully in database');
        }
    } catch (error) {
        console.log('error in adding entries to database');
    }
}