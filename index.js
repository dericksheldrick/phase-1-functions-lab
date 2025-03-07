// Code your solution in this file!
let NumberOfBlock = 42;

function distanceFromHqInBlocks(block){
     //check the number of blocks from HQ to your location
    return Math.abs(block - NumberOfBlock);// ensure positive value is returned

}

function distanceFromHqInFeet(block){
    //check the distance from HQ to your location in terms of feets
    let blocks = distanceFromHqInBlocks(block);
    return blocks * 264;
}

function  distanceTravelledInFeet(start, destination){

    let numberOfBlockTravelled = Math.abs(destination - start);

    let totalDistanceTravelled =  numberOfBlockTravelled * 264;

    return totalDistanceTravelled;
}

function calculatesFarePrice(start, destination){

    let distance = distanceTravelledInFeet(start,destination);

    if (distance <= 400){
        return 0;

    } else if (distance <= 2000){
        let fare = ((distance-400) * 0.02);
        return fare;

    } else if (distance <= 2500){
        return 25;
    }
    else{
        return "cannot travel that far"
    }

}