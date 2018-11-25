function matchDates(array) {
    let pattern = /\b(\d{1,2})-([a-zA-Z]{3})-(\d{4})\b/g, match;
    for (let sentence of array){
        while(match = pattern.exec(sentence)){
            console.log(match[0] + ` (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
}