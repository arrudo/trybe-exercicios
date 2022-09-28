const numberChecker = (myNumber, number) => myNumber === number;
const lottery = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);;
    return callback (myNumber , number) ? 'sim,': 'não';
}
console.log(lottery(5, numberChecker))

/*
1-DEFINIR O VALIDADOR (SE MYNUMBER É IGUAL AO NUMBER)
2-DEINIR A HOF QUE FARÁ A VALIDACAO (Lottery)
(DENTRO DESSA HOF, SERÁ PASSADO OS PARAMETROS Number(numero escolhido) e a funçao callback (que fará a validaçao)
3-Sera retornado um valor true, ou false, será true caso o (myNumber) for igual a (numbe)
*/ 