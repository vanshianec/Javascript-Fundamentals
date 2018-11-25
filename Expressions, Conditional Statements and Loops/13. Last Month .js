function getLastDayOfPreviousMonth(input) {
    let month = input[1];
    let year = input[2];

    let date = new Date(year,month-1,0);
    return date.getDate();
}
