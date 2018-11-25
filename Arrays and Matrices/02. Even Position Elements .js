function evenPositionElement(input) {
   return input.filter((num,index) => index % 2 === 0).join(" ");
}
