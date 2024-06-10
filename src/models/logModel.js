import { Schema, model } from "mongoose";

const logSchema= new Schema({

    id:{type:Number,
        required:true,
        unique:true
    },
    name:{type:String,
        required:true,
        unique:true
    },
    score:{
        type:Number,
        required:true,
    },
    age:{type:Number,
        required:true,
    },
    city:{type:String,
        required:true,
    },
    gender:{type:String,
        required:true,
    },
})

const Log= model('Log',logSchema);

export default Log
