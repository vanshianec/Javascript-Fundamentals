function countOcurrences(wordToSearch,text){
    let index = text.indexOf(wordToSearch);
    let counter = 0;
    while(index !== -1){
        counter++;
        index = text.indexOf(wordToSearch,index + 1);
    }
    return counter;
}
