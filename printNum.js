

function printNumbers(num, num2) {
    while (num <= num2) {
        console.log(num);
        num ++;
    }
}

console.log(printNumbers(5, 10));

function printNumbers2(num, num2) {
    for (let count = num; count <= num2; count++) {
        console.log(num)
        num ++;
    }
}

console.log(printNumbers2(0, 10))