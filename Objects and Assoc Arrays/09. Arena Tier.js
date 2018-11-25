function arenaTier(array) {
    let gladiators = new Map();
    let nameAndSkill = new Map();
    for (let data of array) {
        if (data.includes("->")) {
            [gladiatorName, technique, skill] = data.split(" -> ");
            if (!gladiators.has(gladiatorName)) {
                gladiators.set(gladiatorName, new Map());
                gladiators.get(gladiatorName).set(technique, +skill);
                nameAndSkill.set(gladiatorName,+skill);
            }
            else if (gladiators.get(gladiatorName).has(technique)) {
                if (gladiators.get(gladiatorName).get(technique) < +skill) {
                    let old = gladiators.get(gladiatorName).get(technique);
                    gladiators.get(gladiatorName).set(technique, +skill);
                    nameAndSkill.set(gladiatorName,nameAndSkill.get(gladiatorName) + +skill - old);
                }
            }
            else{
            gladiators.get(gladiatorName).set(technique, +skill);
            nameAndSkill.set(gladiatorName,nameAndSkill.get(gladiatorName) + +skill);
            }

        }
        else if (data.includes("Ave Cesar")){
            let ordered = new Map([...nameAndSkill.entries()].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])));
            for (let [key,value] of ordered){
                console.log(`${key}: ${value} skill`);
                let innerMap = gladiators.get(key);
                innerMap = new Map([...innerMap.entries()].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])));
                for (let [innerKey,innerValue] of innerMap){
                    console.log(`- ${innerKey} <!> ${innerValue}`)
                }
            }
        }
        else {
            [firstGladiator, secondGladiator] = data.split(" vs ");
            if (gladiators.has(firstGladiator) && gladiators.has(secondGladiator)) {
                let firstTechniques = gladiators.get(firstGladiator);
                let secondTechniques = gladiators.get(secondGladiator);
                for (let [key, value] of firstTechniques) {
                    if (secondTechniques.has(key)) {
                        if (value < secondTechniques.get(key)) {
                            gladiators.delete(firstGladiator);
                            nameAndSkill.delete(firstGladiator);
                            break;
                        }
                        else if (value > secondTechniques.get(key)) {
                            gladiators.delete(secondGladiator);
                            nameAndSkill.delete(secondGladiator);
                            break;
                        }
                    }
                }
            }
        }
    }
}

