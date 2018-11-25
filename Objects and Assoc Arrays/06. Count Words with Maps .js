function countWords(array) {
    let text = array[0].toLowerCase();
    let words = text.split(/[\W]+/g);
    let map = new Map();
    for (let word of words.filter((word) => word !== "")){
        if(!map.has(word)){
            map.set(word,0);
        }
        map.set(word,map.get(word) + 1);
    }
     let keysSorted = Array.from(map.keys()).sort();
   for (let key of keysSorted){
         console.log(`'${key}' -> ${map.get(key)} times`);
   }

}
