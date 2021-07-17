const mongoose = require('mongoose');
require('dotenv').config();
 function connectDB(){

        mongoose.connect(process.env.MONGO_CONNECTION_URL,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
    
        const connnection = mongoose.connection;
    
        connnection.once('open', () => {
            console.log('Database connected');
        });
    };


module.exports = connectDB;