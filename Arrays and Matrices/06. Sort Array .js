function sortByTwoCriteria(array) {
    return array.sort((s1,s2) => s1.length - s2.length || s1.toLowerCase() > s2.toLowerCase()).forEach(s => console.log(s));
}
