const {obterLivros, incluir, excluir} = require('../modelo/livro-dao');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    const livros = await obterLivros();
    res.render('livros', { livros });
});

router.post('/', async (req, res, next) => {
    const livro = req.body.livro;
    const result =  await incluir(livro);   
    if(result) {
        res.json({result: 'Livro incluído com sucesso'});
    } else {
        res.json({result: 'Erro ao incluir livro'});
    }
});

router.delete('/:id', async (req, res, next) => {
    const result = await excluir(req.params.id);
    if(result) {
        res.json({result: 'Livro excluído com sucesso'});
    } else {
        res.json({result: 'Erro ao excluir livro'});
    }
});

module.exports = router;