function ticketsScan(text, keyWord) {
    let namePattern = / ([A-Z]{1}[A-Za-z]*-([A-Z]{1}[A-Za-z]*\.-[A-Z]{1}[A-Za-z]*|[A-Z]{1}[A-Za-z]*)) /g;
    let airportPattern = / ([A-Z]{3}\/[A-Z]{3}) /g;
    let flightPattern = / ([A-Z]{1,3}[\d]{1,5}) /g;
    let companyPattern = /- ([A-Z]{1}[a-z]*\*[A-Z]{1}[a-z]*) /g;
    let nameMatch;
    let airportMatch;
    let flightMatch;
    let companyMatch;
    switch (keyWord) {
        case 'name':
            nameMatch = namePattern.exec(text);
            if (nameMatch !== null) {
                let name = nameMatch[0].trim().replace(/[-]+/g, " ");
                console.log(`Mr/Ms, ${name}, have a nice flight!`);
            }
            break;
        case 'flight':
            flightMatch = flightPattern.exec(text);
            airportMatch = airportPattern.exec(text);
            if (flightMatch !== null && airportMatch !== null) {
                let flightNumber = flightMatch[0].trim();
                let fromAirport = airportMatch[0].trim().split(/\//)[0];
                let toAirport = airportMatch[0].trim().split(/\//)[1];
                console.log(`Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`);
            }
            break;
        case 'company':
            companyMatch = companyPattern.exec(text);
            if (companyMatch !== null) {
                let companyName = companyMatch[0].substring(2, companyMatch[0].length - 1).replace(/[*]+/g, " ");
                console.log(`Have a nice flight with ${companyName}.`);
            }
            break;
        case 'all':
            nameMatch = namePattern.exec(text);
            flightMatch = flightPattern.exec(text);
            airportMatch = airportPattern.exec(text);
            companyMatch = companyPattern.exec(text);
            if (nameMatch !== null && flightMatch !== null && airportMatch !== null && companyMatch !== null) {
                let companyName = companyMatch[0].substring(2, companyMatch[0].length - 1).replace(/[*]+/g, " ");
                let flightNumber = flightMatch[0].trim();
                let fromAirport = airportMatch[0].trim().split(/\//)[0];
                let toAirport = airportMatch[0].trim().split(/\//)[1];
                let name = nameMatch[0].trim().replace(/[-]+/g, " ");
                console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`);
            }
            break;
    }

}
