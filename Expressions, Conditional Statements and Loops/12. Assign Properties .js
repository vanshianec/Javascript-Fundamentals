function composeObj(input) {
    let obj = {};

    for(let i = 0; i < input.length - 1; i++) {
        obj[input[i++]] = input[i];
    }

    return obj;
}
