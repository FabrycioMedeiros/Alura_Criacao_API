// importação do modelo Livro para ser chamado pelo controller
import livro from "../models/Livro.js";

class LivroController {

static async listarLivros (req, res) {
    try{
// controller chama o model Livro através do método livro.find({})
     const listaLivros = await livro.find({});
     res.status(200).json(listaLivros);
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na requisição` });
    } 
};

static async listarLivroPorId (req, res) {
    try{
     const id = req.params.id;
     const livroEncontrado = await livro.findById(id);
     res.status(200).json(livroEncontrado);
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    } 
};

static async cadastrarLivro (req, res) {
   try{
    const novoLivro = await livro.create(req.body);
    res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro });
   } catch (erro) {
     res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
   } 
};

static async atualizarLivroPorId (req, res) {
    try{
     const id = req.params.id;
     await livro.findByIdAndUpdate(id, req.body);
     res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na atualização` });
    } 
};

static async excluirLivro (req, res) {
    try{
     const id = req.params.id;
     await livro.findByIdAndDelete(id);
     res.status(200).json({ message: "livro excluido com sucesso" });
    } catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    } 
};

};

export default LivroController;
