// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42-block);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) *264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start- end) * 264;
}

function calculatesFarePrice(start, destination) {
    const priceOfFare= distanceTravelledInFeet(start, destination);

    if (priceOfFare < 400) {
        return 0;
    }
    else if (priceOfFare <= 2000 ) {
        return (priceOfFare-400) * 0.02;
    }
    else if (priceOfFare > 2000 && priceOfFare <= 2500) {
        return  25;
    }
    else {
        return 'cannot travel that far';
    }
}