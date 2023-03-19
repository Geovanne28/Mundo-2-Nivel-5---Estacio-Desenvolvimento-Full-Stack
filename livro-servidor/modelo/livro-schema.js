var banco = require('./conexao');
var LivroSchema = banco.Schema;
var livroSchema = new LivroSchema({
    _id: banco.Schema.Types.ObjectId,
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
});

var Livro = banco.model('livros', livroSchema);

module.exports = Livro;