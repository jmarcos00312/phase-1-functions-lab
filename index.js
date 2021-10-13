// Code your solution in this file!
const distanceFromHqInBlocks = (value) => {
    let placeHolder = 42
    return (Math.abs(placeHolder - value))
}

const distanceFromHqInFeet = (pickupLocation) =>{
  let distanceInBlocks = 42 - pickupLocation;
  return Math.abs(distanceInBlocks) * 264;
}
const distanceTravelledInFeet = (start, end) => {
      let inFeet = (start - end) * 264;
  return Math.abs(inFeet);
}

const calculatesFarePrice = (destination, start) => {
    let travel = Math.abs((destination - start) * 264)

    if (travel <= 400) {
        return 0;
    } else if (travel > 400 && travel < 2000) {
        return (travel-400) * 0.02;
    } else if (travel > 2000 && travel < 2500){
        return 25
    } else if (travel > 2500) {
        return "cannot travel that far"
    }
}