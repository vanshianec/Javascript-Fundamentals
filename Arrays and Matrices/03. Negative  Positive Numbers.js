function evenPositionElement(input) {
    let array = [];
    input.forEach((num) => {
        num < 0 ? array.unshift(num) : array.push(num);
    });
    array.forEach((num) => console.log(num));
}
