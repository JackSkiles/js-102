

let number = [1, 2, 3, 4, 5, 6, 20, 8, 9, 10];

function sumNum(num) {
    let numTotal = 0;
    for (let i = 0; i < num.length; i++) {
        numTotal += parseInt(num[i]);
    }
    return numTotal;
}

console.log(sumNum(number));