function countWords(array) {
    let text = array[0];
    let words = text.split(/[\W]+/g);
    let map = {};
    for (let word of words.filter((word) => word !== "")){
        if(map[word] === undefined){
            map[word] = 0;
        }
        map[word]++;
    }
    console.log(JSON.stringify(map));
}



