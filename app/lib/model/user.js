import mongoose from "mongoose"

const user=new mongoose.Schema({
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    sub:{
        type:String,
        unique:true,
        dropDups:true,
       
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type: String
    },
    email:{
        type:String,
        required:true
    },
    iat:{
        type: Number,
        required:true
    },
    exp:{
        type: Number,
        required:true
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }]

   
})

export default mongoose.models.user || mongoose.model("user",user)

// export default mongoose.model("user",user)