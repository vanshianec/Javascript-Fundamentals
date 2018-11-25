function diagonalSum(input) {
    let d1 = input.map((row, index) => {
        return row.filter((num, innerIndex) => innerIndex === index)[0];
    })
        .reduce((a, b) => a + b);
    let d2 = input.map((row, index) => {
        return row.filter((num, innerIndex) => innerIndex === row.length - 1 - index)[0];
    })
        .reduce((a, b) => a + b);
    console.log(d1 + ' ' + d2);
}

