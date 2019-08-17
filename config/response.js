const converter = require('xml-js');

/**funcao que monta o retorno das rotas da api */
module.exports.montaRetornoAPI = (dados, req, res) => {
    /**monta o objeto de retorno padrao das respostas */
    let retorno = {};

    if(dados.erro){
        retorno.mensage = dados.erro.message;
        if(!dados.status)
            dados.status = 400;
    } else {
        retorno.data = dados.data;
        dados.status = 200;
    }

    // captura o formato do retorno
    let formato = req.headers['content-type'];
    if(formato)
        formato = formato.toLowerCase();
    // verifica se o formato foi infomado e se o tipo é xml
    if (formato == 'xml') {
        retorno = { retorno };
        retorno = converter.json2xml(retorno, {compact: true, ignoreComment: true, spaces: 4, fullTagEmptyElement: true});
        res.status(dados.status).type('xml').send(retorno);
    } else 
        res.status(dados.status).json(retorno);
};

