

function printBanner(text) {
    num = text.length;
    bannerTop = '';
    fullString = '';
    for (count = 0; count <= num; count++) {
        bannerTop += '*';
    }
    fullString += (bannerTop + '\n');
    fullString += ('*' + text + '*' + '\n');
    fullString += (bannerTop);

    return fullString;
}

console.log(printBanner('Is this the Krusty Krab?'));