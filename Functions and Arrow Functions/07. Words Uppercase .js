function wordsUpperCase(input) {
    let array = input.split(/[,. !?]+/);
    for (let i = 0; i < array.length; i++) {
        if(array[i]===''){
            array.splice(i,1);
            i--;
            continue;
        }
        array[i] = array[i].toUpperCase();
    }
    
    console.log(array.join(", "));
}