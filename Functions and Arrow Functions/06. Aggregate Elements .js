function aggregateElements(input){
    let sum  = 0;
    let sum2 = 0;
    let concatenation = '';
    for (let i = 0; i< input.length; i++){
        sum += +input[i];
        sum2 += 1/input[i];
        concatenation += input[i];
    }
    console.log(sum);
    console.log(sum2);
    console.log(concatenation);

}
