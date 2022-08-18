const nota =  80;

if(nota >= 80 && nota < 100){
    console.log('Parabéns, você foi aprovado!')
}else if(nota >= 60 && nota <= 80){
    console.log('Você está na lista de espera')
}else if(nota < 60){
    console.log('Você reprovou')
}
else{
    console.log('Nota inválida')
}