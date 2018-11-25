function sumFirstLast(input) {
    return input.map((num) => +num)
        .filter((num, index) => {
        return index === 0 || index === input.length - 1;
    }).map((num,index,array) => {
        return array.length === 1 ? num * 2 : num;
        })
        .reduce((a,b) => a+b);

}
