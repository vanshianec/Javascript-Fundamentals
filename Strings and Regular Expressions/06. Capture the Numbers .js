function getNumbers(array) {
    let pattern = /[\d]+/g;
    let result = [];
    for (let sentence of array){
        let match = pattern.exec(sentence);
        while(match){
            result.push(match[0]);
            match = pattern.exec(sentence);
        }
    }
    console.log(result.join(" "));
}
