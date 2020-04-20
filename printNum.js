
// should take argued numbers and print each one from num to num2.

function printNumbers(num, num2) {
    while (num <= num2) {
        console.log(num);
        num ++;
    }
}

console.log(printNumbers(5, 10));


// should do the same only using a for loop.
function printNumbers2(num, num2) {
    for (let count = num; count <= num2; count++) {
        console.log(num)
        num ++;
    }
}

console.log(printNumbers2(0, 10))