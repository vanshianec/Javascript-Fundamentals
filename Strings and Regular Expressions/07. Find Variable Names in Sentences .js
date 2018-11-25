function getNames(text) {
    let pattern = /\b_([A-Za-z]+)\b/g;
    let result = [];
    let match = pattern.exec(text);
    while(match){
        result.push(match[1]);
        match = pattern.exec(text);
    }
    console.log(result.join(","));
}

