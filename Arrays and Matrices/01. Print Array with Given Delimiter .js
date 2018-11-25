function printWithDelimeter(array) {
    let delimeter = array.slice(array.length - 1);
    return array.slice(0, array.length - 1).join(delimeter);
}
