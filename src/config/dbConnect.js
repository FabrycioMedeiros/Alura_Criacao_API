import mongoose, { mongo } from "mongoose";

// função assincrona
async function conectaDatabase() {
mongoose.connect(process.env.DB_CONNECTION_STRING);

return mongoose.connection;

};

export default conectaDatabase;

