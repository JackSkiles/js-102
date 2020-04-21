

function vowalAdd(str) {
    newString = '';
    countString = str.toLowerCase()

    for (let i = 0; i <= countString.length; i++) {
        for (let n = 0; n <= countString.length; n++) {
            if (countString.charAt(n) === countString.charAt(i)) {
                if (countString.charAt(i) === 'o') {
                    newString += 'ooo';
                }

            else {
                newString += countString.charAt(i);    
            }
            }
        }
    }
    return newString;
}


console.log(vowalAdd('yoot'))
