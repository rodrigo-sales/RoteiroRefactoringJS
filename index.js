const { readFileSync } = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js") ;
var gerarFaturaStr = require("./apresentacao.js");

// main
const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);

// deprecated

// function gerarFaturaHTML (fatura, calc) {
//   let faturaHTML = `<html> \n<p> Fatura ${fatura.cliente} </p>\n`;
//   faturaHTML += `<ul>\n`;
//   for (let apre of fatura.apresentacoes) {
//     faturaHTML += `<li> ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`;
//   }
//   faturaHTML += `</ul>\n`;
//   faturaHTML += `<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))} </p>\n`;
//   faturaHTML += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} </p>\n`;
//   faturaHTML += `</html> \n`;
//   return faturaHTML;
// }

//const faturaHTML = gerarFaturaHTML(faturas, calc);
//console.log(faturaHTML);
