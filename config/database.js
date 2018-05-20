const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{ PATH }' é obrigatorio"
mongoose.Error.messages.Number.min = "O '{ VALUE }' informado é menor do que o limite mínimo '{MIN}'."
mongoose.Error.messages.Number.min = "O '{ VALUE }' informado é maior do que o limite máximo '{MAX}'."
mongoose.Error.messages.String.enum = "'{ VALUE }' não é válido para o atributo '{PATH}'."
