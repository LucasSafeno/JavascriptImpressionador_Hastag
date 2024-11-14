console.log("======== Resolução exercicio 01 ========");

const primeiraVariavel = 2148;
let segundaVariavel;

console.log(`O valor da primeira váriavel é ${primeiraVariavel}`);

segundaVariavel = 23;

console.log(`Minha segunda variavel é ${segundaVariavel}`);
console.log(
  `O valor da soma das duas variaveis é ${primeiraVariavel + segundaVariavel}`
);

console.log(segundaVariavel ** 2);
console.log(segundaVariavel ** 2 / 3);

console.log("========================================");
console.log("======== Resolução exercicio 02 ========");
console.log("========================================");

const boolean1 = true;
const boolean2 = false;

console.log(`Operação AND entre as duas variávels ${boolean1 && boolean2}`);
console.log(`Operação OR entre as duas variaveis ${boolean1 || boolean2}`);

const boolean3 = false;

console.log(
  `Operação AND entre as três variávels ${boolean1 && boolean2 && boolean3}`
);
console.log(
  `Operação OR entre as três variaveis ${boolean1 || (boolean2 && boolean3)}`
);
