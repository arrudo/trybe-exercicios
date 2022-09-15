let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    oddsAndEvens = oddsAndEvens.sort(function (a, b) {  return a - b;  });
    console.log(`Os números ${oddsAndEvens[0]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[3]},${oddsAndEvens[4]},${oddsAndEvens[5]} se encontram ordernados de forma crescente!`);
}
sortOddsAndEvens()