function speedLimit(input){
    let speed = input[0];
    let zone = input[1];
    let limit = getLimit(zone);
    if(speed>limit){
        console.log(getMessage(speed-limit));
    }


    function getMessage(limit){
       if(limit<=20) {
                return "speeding";
       }
       else if(limit<=40) {
                return "excessive speeding";
       }
       return "reckless driving";
    }

    function getLimit(zone){
        switch(zone){
            case "motorway":
                return 130;
            case "interstate":
                return 90;
            case "city":
                return 50;
            case "residential":
                return 20;
        }
    }
}