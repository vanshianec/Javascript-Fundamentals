function validLinks(array) {
    let pattern = /www\.[A-Za-z-0-9]+(\.[a-z]+)+/g;
    let result = [];
    for (let sentence of array){
        let match = pattern.exec(sentence);
        while(match){
            result.push(match[0]);
            match = pattern.exec(sentence);
        }
    }
    result.forEach((link) => console.log(link));
}

