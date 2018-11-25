function biggestElement(input) {
    return input.map((row) => {
        return row.sort((a, b) => b - a)[0];
    }).sort((a, b) => b - a)[0];
}

