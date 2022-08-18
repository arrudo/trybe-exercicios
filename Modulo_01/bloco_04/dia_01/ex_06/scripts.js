let status = "aprovada"

switch (status){
    case "aprovada":
        console.log('Parabéns,você foi aprovada!');
        break;
    case "lista":
        console.log('Você está na lista de espera.');
        break;
    case "reprovada":
        console.log('Você foi reprovada!');
        break;
    default:
        console.log('não se aplica');
}