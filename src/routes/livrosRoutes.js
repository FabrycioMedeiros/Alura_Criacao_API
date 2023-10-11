import express  from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();
//criação de rota .get
//Obs IMPORTANTE - as rotas devem seguir uma ordem de maior complexidade para menor
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivroPorId);
routes.delete("/livros/:id", LivroController.excluirLivro);


export default routes;
