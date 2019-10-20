const Authorization = (req, res, next) => {
    // TODO: se nao ter token no header da requisição, retornar 403 (verificar res e headers express)
    // TODO: se ter, valida se o token é valido com a lib jsonwebtoken
    // TODO: chamar função next() se tudo estiver correto
};

module.exports = Authorization;
