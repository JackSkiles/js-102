

function printBox(height, width) {
    let topBox = '';
    let totalBox = '';
    for (let count = 0; count <= width; count++) {
        topBox += '*';
    }
    for (let count2 = 0; count2 <= height; count2++) {
        console.log(topBox);
    }
    totalBox += topBox;
    return totalBox;
}

console.log(printBox(20, 50));