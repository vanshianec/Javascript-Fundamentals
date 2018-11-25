function matchWords(text) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    if(pattern.exec(text)){
        return "Valid";
    }
    return "Invalid";

}