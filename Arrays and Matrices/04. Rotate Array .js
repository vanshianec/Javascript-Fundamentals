function rotateArray(array) {
    let rotation = array.pop();
    for (let i = 0; i < rotation; i++) {
        array.unshift(array.pop());
    }
    return array.join(" ");
}
