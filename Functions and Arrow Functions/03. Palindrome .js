function isPalindrome(input){
    let input2 = input.split('').reverse().join('');
    return input === input2;
}
