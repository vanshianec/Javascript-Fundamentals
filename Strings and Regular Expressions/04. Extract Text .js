function extractText(text){
    let index = text.indexOf('(');
    let lastIndex = text.indexOf(')',index);
    let array = [];
    while(index !== -1 && lastIndex !== -1){
        array.push(text.substring(index + 1,lastIndex));
        index = text.indexOf('(',index + 1);
        lastIndex = text.indexOf(')',lastIndex + 1);
    }
    return array.join(", ");
}
