function sumRowsAndCols(matrix) {
    if(matrix.length <= 2){
        return false;
    }

    for (let row = 0; row < matrix.length - 1; row++) {
        if (sum(matrix[row]) !== sum(matrix[row + 1])) {
            return false;
        }
    }
    let colsArray = [];
    for (let col = 0; col < matrix.length; col++) {
        let sum = 0;
        for (let row = 0; row < matrix[col].length; row++) {
            sum += matrix[row][col];
        }
        colsArray.unshift(sum);
    }
    return colsArray.every((num,index,array) => num === array[0]);

    function sum(array) {
        return array.reduce((a, b) => a + b);
    }

}
