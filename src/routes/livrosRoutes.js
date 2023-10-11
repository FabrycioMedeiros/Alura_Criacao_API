import express  from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();
//criação de rota .get
routes.get("/livros",LivroController.listarLivros);