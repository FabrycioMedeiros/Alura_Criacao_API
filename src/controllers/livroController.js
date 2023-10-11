// importação do modelo Livro para ser chamado pelo controller
import livro from "../models/Livro.js";

class LivroController {

static async listarLivros (req, res) {
    // controller chama o model Livro através do método livro.find({})
    const listaLivros = await livro.find({});
     res.status(200).json(listaLivros);
};

static async cadastrarLivro (req, res) {
   try{
    const novoLivro = await livro.create(req.body);
    res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro });
   } catch (erro) {
     res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro`});
   } 
};

};

export default LivroController;
