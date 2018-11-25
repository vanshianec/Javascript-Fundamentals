function expressionSplit(text) {
    text.split(/[;().,?!\t\s]+/g).forEach((el) => console.log(el));
}