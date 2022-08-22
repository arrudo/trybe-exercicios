let numbers = [22,4];
impares = 0

for (i=0; i < numbers.length; i+=1){
    if(numbers[i] % 2 != 0){
        impares +=1
    }
}
if(impares > 0){
    console.log(impares)
}else if(impares == 0){
    console.log('nenhum valor ímpar encontrado')
}