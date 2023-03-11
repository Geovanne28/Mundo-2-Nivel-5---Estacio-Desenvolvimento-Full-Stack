const Livro = require('../modelo/livro-schema');

const obterLivros = () => {
    return Livro.find();
}

const incluir = (livro) => {
    return Livro.create(livro);
}

const excluir = (codigo) => {
    return Livro.deleteOne({ _id: codigo });
}

module.exports = {
    obterLivros,
    incluir,
    excluir
}