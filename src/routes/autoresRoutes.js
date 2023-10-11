import express  from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();
//criação de rota .get
routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutorPorId);
routes.delete("/autores/:id", AutorController.excluirAutor);


export default routes;
