const custo = 10
const valorAtual = 20

const custoTotal = custo + ((20 / 100) * custo)
const lucro = valorAtual - custoTotal

if(custo == 0 || valorAtual == 0 ){
    console.log('Erro');
}
else{
    console.log(lucro * 1000);
}
