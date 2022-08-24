function indiceDoMaior(array){
    let maior = 0
    for(let i in array){
        if (array[i] > maior){
            maior = array[i]
            console.log(maior)
        }else{
            console.log(false)
        }
    }
}
indiceDoMaior([1,2,])
//GET SOME SLEEP CHILD, GIVE UP FOR NOW