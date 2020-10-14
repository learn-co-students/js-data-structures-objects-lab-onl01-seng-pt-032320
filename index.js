// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    let newObj = Object.assign({}, driver, {[key]: value});
    return newObj;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    let obj = Object.assign(driver, {[key]: value});
    return obj;
};

function deleteFromDriverByKey(driver, key){
    let newObj = Object.assign({},driver);
    delete newObj[key];
    return newObj;

};

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
};