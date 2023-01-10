function distanceFromHqInBlocks(pickupLocation){
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation){
  const blocksInFeet = 264;
  return distanceFromHqInBlocks(pickupLocation) * blocksInFeet;
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation){ 
  const blocksInFeet = 264;
  return Math.abs(pickupLocation - dropoffLocation) * blocksInFeet;
}

function calculatesFarePrice(pickupLocation, dropoffLocation){
  const feetTravelled = distanceTravelledInFeet(pickupLocation, dropoffLocation);
  if (feetTravelled < 400){
     return 0;
  } else if (feetTravelled >= 400 && feetTravelled <=2000){
    return ((feetTravelled - 400) * .02)
  } else if (feetTravelled > 2000 && feetTravelled < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}