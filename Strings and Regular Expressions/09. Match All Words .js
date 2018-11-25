function matchWords(text) {
    let pattern = /\w+/g;
    let words = text.match(pattern);
    return words.join("|");

}