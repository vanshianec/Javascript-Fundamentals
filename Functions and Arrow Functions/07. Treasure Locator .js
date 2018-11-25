function treasureLocation(input) {
    for (let i = 0; i < input.length; i++) {
        let col = input[i++];
        let row = input[i];

        let result = (row >= 0 && row <= 1 && col >= 8 && col <= 9) ? 'Tokelau' :
            (row >= 1 && row <= 3 && col >= 1 && col <= 3) ? 'Tuvalu' :
                (row >= 3 && row <= 6 && col >= 5 && col <= 7) ? 'Samoa' :
                    (row >= 6 && row <= 8 && col >= 0 && col <= 2) ? 'Tonga' :
                        (row >= 7 && row <= 8 && col >= 4 && col <= 9) ? 'Cook' :
                            'On the bottom of the ocean';

        console.log(result);
    }
}