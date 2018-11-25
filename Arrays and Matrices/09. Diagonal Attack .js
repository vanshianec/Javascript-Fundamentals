function sumRowsAndCols(input) {

    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(" ").map((num) => +num));
    }
    let d1Sum = matrix.map((row, index) => {
        return row.filter((col, innerIndex) => index === innerIndex)[0];
    }).reduce((a, b) => a + b);
    let d2Sum = matrix.map((row, index) => {
        return row.filter((col, innerIndex) => innerIndex === row.length - 1 - index)[0];
    }).reduce((a, b) => a + b);
    if(d1Sum === d2Sum){
       matrix = matrix.map((row, index) => {
            return row.map((col, innerIndex) => index === innerIndex || innerIndex === row.length - 1 - index  ? col : d1Sum);
        });

    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));

}
