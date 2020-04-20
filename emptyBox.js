
// Should take arguments of height and width and print an empty box of specified parameters.
function printBox(height, width) {
    let topBox = '';
    middleBox = '';
    let totalBox = '';
    for (let count = 0; count <= width; count++) {
        topBox += '*';
    }

    totalBox += (topBox + '\n');

    for (let count2 = 0; count2 <= width; count2++) {
        if (count2 === 0) {
            middleBox += '*';
        }
        else  {
            middleBox += ' ';
        }
    }
    middleBox += '*'
    for (let count3 = 0; count3 <= height; count3++) {
        totalBox += (middleBox + '\n');
    }

    totalBox += topBox;
    return totalBox;
}
console.log(printBox(100, 200));