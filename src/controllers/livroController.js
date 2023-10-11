// importação do modelo Livro para ser chamado pelo controller
import livro from "../models/Livro.js";

class LivroController {

static async listarLivros (req, res) {
    // controller chama o model Livro através do método livro.find({})
    const listaLivros = await livro.find({});
     res.status(200).json(listaLivros);
};



};

export default LivroController;
