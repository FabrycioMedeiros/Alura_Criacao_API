import mongoose, { mongo } from "mongoose";

// função assincrona
async function conectaDatabase() {
mongoose.connect("mongodb+srv://adminMaster:admin123@cluster0.bvvsj3w.mongodb.net/livraria?retryWrites=true&w=majority");

return mongoose.connection;

};

export default conectaDatabase;

