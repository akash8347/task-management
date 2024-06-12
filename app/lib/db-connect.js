// const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

// const connectDB = async () => {
//     if (mongoose.connection.readyState === 0) {
//         try {
//             await mongoose.connect(process.env.MONGODB_URL);
//             console.log("Database connected");
//         } catch (error) {
//             console.error("Error connecting to database:", error);
//         }
//     } else {
//         console.log("Database connection is already active");
//     }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
console.log("database connected")  
    } catch (error) {
        console.log(error)
    }

}

module.exports=connectDB