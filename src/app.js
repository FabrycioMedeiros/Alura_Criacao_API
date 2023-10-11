import express  from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

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
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscalivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});

export default app;

// Antes de usar await dentro de uma função, usamos async antes de (req, res)para operação assincrona funcionar pois em caso de funções callback, a palavra-chave async deve ser adicionada antes dos parâmetros e await antes da instrução da variável.