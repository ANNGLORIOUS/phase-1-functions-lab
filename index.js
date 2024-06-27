// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
// retuns number of blocks given a value
return Math.abs(someValue - 42);

}
function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
return blocks*264;

}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
  let blocks = Math.abs(destination - start)
return blocks * 264;

}
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceInFeet = Math.abs(start - destination) * 264;
    if (distanceInFeet <= 400) return 0;
    if (distanceInFeet > 2500) return 'cannot travel that far';
    if (distanceInFeet > 2000) return 25;
    return (distanceInFeet - 400) * 0.02;
  }

