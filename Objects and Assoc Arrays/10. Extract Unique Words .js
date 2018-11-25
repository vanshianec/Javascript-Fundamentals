function noDuplicates(array) {
   let set = new Set();
    for (let sentence of array){
        let words = sentence.toLowerCase().split(/[\W]+/g)
        words.filter((word) => word !== "").forEach((word) => set.add(word));
    }
    console.log([...set.values()].join(", "));
}

