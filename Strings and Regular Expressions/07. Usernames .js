function getUsernames(input) {
    let output = [];
    for (let username of input){
    let  name = username.split("@")[0];
    let info = username.split("@")[1];
    name += ".";
    let infoData = info.split(".");
    for (let word of infoData){
        name+=word.charAt(0);
    }
    output.push(name);
    }
    return output.join(", ");


}
