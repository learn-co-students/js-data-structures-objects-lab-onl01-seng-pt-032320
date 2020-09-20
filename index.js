// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver,key,value){
   return Object.assign({}, driver, { [key]: value });
   //or return { ...driver, ...{ [key]: value } } w/ spread operator
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;

    return driver;

}

function deleteFromDriverByKey(driver,key){
    const newDriver = {...driver}

    delete newDriver[key]

    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver,key){
    delete driver[key]

    return driver
}


