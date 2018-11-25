function sumByTown(array) {
    let map = {};
    let town;
    let population;
    for (let i = 0; i < array.length; i += 2) {
        town = array[i];
        population = +array[i + 1];
        if (map[town] === undefined) {
            map[town] = 0;
        }
        map[town] += population;

    }
    console.log(JSON.stringify(map));

}

