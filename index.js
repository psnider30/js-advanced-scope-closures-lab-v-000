function produceDrivingRange(blockRange) {

  return function (startBlock, endBlock) {
    let tripDistance =Math.abs(startBlock.slice(0,2) - endBlock.slice(0,2));
    if (blockRange >= tripDistance) {
      return `within range by ${blockRange - tripDistance}`;
    } else {
      return `${tripDistance - blockRange} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (fare) {
    return tipPercent * fare;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
     constructor(name) {
       this.id = ++driverId;
       this.name = name;
     }
  }
}
