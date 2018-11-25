function processOddNumbers(input) {
    return input.filter((num,index) => index % 2 !== 0).map((num) => num * 2).reverse();
}

