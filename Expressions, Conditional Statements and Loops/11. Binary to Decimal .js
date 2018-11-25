function binaryToDecimal(input) {
    let sum = 0;
    let counter = 0;
    for (let i = input.length - 1;i>=0;i--){
        sum += input[i] * Math.pow(2,counter);
        counter++;
    }
    console.log(sum);
}
