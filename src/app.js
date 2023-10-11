import express  from "express";
import conectaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

// instancia da conexão 
const conexao = await conectaDatabase();

//Métodos de espera de evento
conexao.on("error", (erro) =>{
    console.error("erro de conexão" , erro);
})

conexao.once("open", () =>{
    console.error("Conexão com o banco feita com sucesso!");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});
// Antes de usar await dentro de uma função, usamos async antes de (req, res)para operação assincrona funcionar pois em caso de funções callback, a palavra-chave async deve ser adicionada antes dos parâmetros e await antes da instrução da variável.

app.get("/livros/:id", (req, res) => {
   const index = buscalivro(req.params.id);
   res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscalivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscalivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});

export default app;

