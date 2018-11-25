function matrixOrbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];
    for (let i=0;i<width;i++){
        matrix[i] = new Array(height);
    }

    matrix = matrix.map((row,index) => {
       return matrix.map((col,innerIndex) => Math.max(Math.abs(x-index),Math.abs(y-innerIndex)) + 1);
    });



    console.log(matrix.map(row=> row.join(" ")).join("\n"));
}
