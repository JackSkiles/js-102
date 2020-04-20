

function factor(num) {
    let factors = '';
    for (let i = 1; i <= num; i++) {
        for (let n = 1; n <= num; n++) {
            if((i * n) === num) {
                factors += i.toString()
            }
        }
    }
    return factors;
}

console.log(factor(15));