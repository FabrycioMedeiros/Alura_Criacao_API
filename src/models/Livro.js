import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, require: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
},{ versionKey: false });
// versionKey se refere ao versionamento do mongo DB
 
const livro = mongoose.model("livros", livroSchema);

export default livro;

// modelo é um objeto que representa uma coleção na base de dados