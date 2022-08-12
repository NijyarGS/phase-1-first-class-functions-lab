// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//["james","sam","smith","harry","walter"]

function createFareMultiplier(int) {
return (mul) => {return int*mul}
}

let fareDoubler = (int) => createFareMultiplier(int)(2)
let fareTripler = (int) => createFareMultiplier(int)(3)

function selectDifferentDrivers(drivers,arg) {
    return arg(drivers)

}