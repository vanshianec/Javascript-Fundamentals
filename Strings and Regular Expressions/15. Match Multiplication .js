function replaceText(text) {
    let pattern = /([0]|[-][1-9]{1}[0-9]*|\b[1-9]{1}[0-9]*\b)[\s]*[*][\s]*([-]?[0-9]+\.[0-9]+|[-][1-9]{1}[0-9]*|\b[1-9]{1}[0-9]*\b|[0]{1}\b)/g;
    let match = pattern.exec(text);
    while(match){
        text = text.replace(match[0],+match[1]*+match[2]);
        match = pattern.exec(text);
    }
    console.log(text);
}

