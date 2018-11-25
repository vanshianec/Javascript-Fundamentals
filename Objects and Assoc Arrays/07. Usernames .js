function usernamesWithNoDuplicates(array) {
   let set = new Set();
   for (let username of array){
       set.add(username);
   }
   [...set].sort((a,b) => a.length - b.length || a.localeCompare(b)).forEach((username) => console.log(username));
}


