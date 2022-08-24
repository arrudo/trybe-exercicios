function palindrono(frase){
    //transforma em array, inverte a ordem, e junta em string denovo
    let reverse = frase.split('').reverse().join(''); 
    if(frase == reverse){
        return true
    }else{
        return false
    }
}
console.log(palindrono('arara'))