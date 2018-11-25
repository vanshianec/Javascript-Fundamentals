function uniqueSequences(array) {
    let map = new Map();

    for (let row of array) {
        let arr = JSON.parse(row).sort((a, b) => b - a);
        let stringified = `[${arr.join(', ')}]`;
        map.set(stringified, arr.length);
    }

    let result = [...map]
        .sort((a, b) => a[1] - b[1])
        .map(kvp => kvp[0])
        .join('\n');

    console.log(result);
}

