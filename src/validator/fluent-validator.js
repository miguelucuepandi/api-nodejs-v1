"use strict";

let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
};

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
};

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
};

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (!value || value.length != len)
        errors.push({ message: message });
};

ValidationContract.prototype.isEmail = (value, message) => {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
};

ValidationContract.prototype.errors = () => {
    return errors;
};

ValidationContract.prototype.clear = () => {
    errors = [];
};

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
};

module.exports = ValidationContract;

// Explicacao do codigo acima:
// 1- Cria um array de erros para armazenar mensagens de validação.
// 2- Define o construtor ValidationContract, que inicializa o array de erros.
// 3- Define métodos de validação, como isRequired, hasMinLen, hasMaxLen, isFixedLen e isEmail, que verificam se os valores atendem aos critérios especificados e adicionam mensagens de erro ao array se não atenderem.
// 4- Define métodos para acessar os erros (errors), limpar os erros (clear) e verificar se a validação é válida (isValid).
// 5- Exporta o ValidationContract para ser usado em outros arquivos.