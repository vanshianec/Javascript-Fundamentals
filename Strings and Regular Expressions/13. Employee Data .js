function matchEmployee(array) {
    let pattern = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*([\.,]{0,1}[0-9]*)) - ([A-Za-z0-9\- ]+)$/;
    for (let em of array){
        let match;
        if(match = pattern.exec(em)){
            console.log(`Name: ${match[1]}\nPosition: ${match[4]}\nSalary: ${match[2]}`);
        }
    }

}
