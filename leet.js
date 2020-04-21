

function leetSpeak(str) {
    let newString = str.toUpperCase()
    stringContainer = '';
    for (i = 0; i <= str.length; i++) {
        if (newString.charAt(i) === 'A') {
            stringContainer += '4';
        }
        else if (newString.charAt(i) === 'E') {
            stringContainer += "3";
        }
        else if (newString.charAt(i) === 'G') {
            stringContainer += "6";
        }
        else if (newString.charAt(i) === 'I') {
            stringContainer += "1";
        }
        else if (newString.charAt(i) === 'O') {
            stringContainer += "0";
        }
        else if (newString.charAt(i) === 'S') {
            stringContainer += "5";
        }
        else if (newString.charAt(i) === 'T') {
            stringContainer += "7";
        }
        else {
            stringContainer += newString.charAt(i);
        }
    }
    return stringContainer;
}


console.log(leetSpeak('Leet'))