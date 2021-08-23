function distanceFromHqInBlocks(blocks){
 if (blocks > 42){
    return (blocks - 42)
  } else {
    return (42 - blocks)
    }
 }

function distanceFromHqInFeet(feet){
  return (distanceFromHqInBlocks(feet) * 264)
}
  

function distanceTravelledInFeet(start, destination){
  if ((start - destination) > 1) {
    return (start - destination) * 264
  } else {
    return (destination - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400) {
    return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return 0.02 * (distanceInFeet - 400);
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
}