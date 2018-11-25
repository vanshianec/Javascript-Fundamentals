function matchEmployee(username,email,phone,array) {
    let usernamePattern = /<![A-Za-z]+!>/g;
    let emailPattern = /<@[A-Za-z]+@>/g;
    let phonePattern = /<\+[A-Za-z]+\+>/g;
    array.forEach((line) => {
        line = line.replace(usernamePattern,username);
        line = line.replace(emailPattern,email);
        line = line.replace(phonePattern,phone);
        console.log(line);
    })

}
