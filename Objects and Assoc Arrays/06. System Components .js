function systemComponents(array) {
    let components = new Map();
    for (let data of array) {
        [systemName, componentName, subcomponentName] = data.split(" | ");
        if (!components.has(systemName)) {
            components.set(systemName, new Map());
            components.get(systemName).set(componentName, []);
            components.get(systemName).get(componentName).push(subcomponentName);
        }
        else if (components.get(systemName).has(componentName)) {
            let arr = components.get(systemName).get(componentName);
            arr.push(subcomponentName);
            components.get(systemName).set(componentName, arr);
        }
        else {
            components.get(systemName).set(componentName, [subcomponentName]);
        }
    }
    components = new Map([...components.entries()].sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0])));
    for (let [key, value] of components) {
        console.log(key);
        let innerMap = new Map([...value.entries()].sort((a, b) => b[1].length - a[1].length));
        for (let [innerKey, innerValue] of innerMap) {
            console.log(`|||${innerKey}`);
            for (let value of innerValue) {
                console.log(`||||||${value}`);
            }
        }
    }
}

