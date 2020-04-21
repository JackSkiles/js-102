
let numbers = [1, 4, 6, 4, 10, 21, 30];

function evenNumber(num) {
    let evenTotal = 0;
    for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) % 2 === 0) {
            evenTotal += parseInt(num[i]);
        }
    }
    return 'even total is ' + evenTotal;
}

function oddNumber(num) {
    let oddTotal = 0;
    for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) % 2 !== 0) {
            oddTotal += parseInt(num[i]);
        }
    }
    return 'odd total is ' + oddTotal;
}

console.log(evenNumber(numbers));

console.log(oddNumber(numbers));