function storeCatalogue(array) {
    let map = new Map();
    for (let pair of array){
        [key,value] = pair.split(" : ");
        map.set(key,value);
    }
    map = new Map([...map.entries()].sort((a,b) => a[0].localeCompare(b[0])));
    let result = new Map();
    for (let [key,value] of map){
        let letter = key[0];
        if(!result.has(letter)){
            result.set(letter,new Map());
        }
        result.set(letter,result.get(letter).set(key,value));
    }
    for (let [key,value] of result) {
        console.log(key);
        let innerMap = value;
        for (let [innerKey,innerValue] of innerMap){
            console.log(`  ${innerKey}: ${innerValue}`);
        }
    }
}
