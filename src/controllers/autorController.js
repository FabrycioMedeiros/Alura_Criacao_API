// importação do modelo Livro para ser chamado pelo controller
import { autor } from "../models/Autor.js";
// utilizamos o { autor } no import pois não é uma importação de unico modulo, este em questão possui duas aplicações(importação de lista de modulos)
class AutorController {

static async listarAutores (req, res) {
    try{
// controller chama o model Livro através do método livro.find({})
     const listaAutores = await autor.find({});
     res.status(200).json(listaAutores);
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na requisição` });
    } 
};

static async listarAutorPorId (req, res) {
    try{
     const id = req.params.id;
     const autorEncontrado = await autor.findById(id);
     res.status(200).json(autorEncontrado);
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na requisição do Autor` });
    } 
};

static async cadastrarAutor (req, res) {
   try{
    const novoAutor = await autor.create(req.body);
    res.status(201).json({ message: "Criado com sucesso!", autor: novoAutor });
   } catch (erro) {
     res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
   } 
};

static async atualizarAutorPorId (req, res) {
    try{
     const id = req.params.id;
     await autor.findByIdAndUpdate(id, req.body);
     res.status(200).json({ message: "Autor atualizado" });
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na atualização` });
    } 
};

static async excluirAutor (req, res) {
    try{
     const id = req.params.id;
     await autor.findByIdAndDelete(id);
     res.status(200).json({ message: "Autor excluido com sucesso" });
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    } 
};

};

export default AutorController;
