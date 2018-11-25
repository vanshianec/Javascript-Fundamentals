function smallestTwoNumbers(input) {
    return input.sort((a,b) => a - b).filter((num,index) => index < 2).join(" ");
}

