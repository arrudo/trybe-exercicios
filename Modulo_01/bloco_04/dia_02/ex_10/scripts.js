let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers = numbers.sort(function(a, b){return a - b})
console.log(numbers.length)

for(let i = 0; i < 9; i += 1){
    numbers.shift()
}
console.log(numbers)