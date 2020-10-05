// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    
    return Object.assign({}, driver, { [key]: value });
    //Object.assign() is to provide an empty Object as 
    // the first argument. That way we're composing an 
    // entirely new Object instead of modifying or overwriting 
    // the properties of an existing Object.
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
    // updates `driver` with the given `key` and `value` 
    // (it is destructive) and returns the entire updated driver
}

function deleteFromDriverByKey(driver, value) {
    let newDriver = Object.assign({}, {[driver]: value});
       
    delete newDriver['key'];
    return newDriver;
    // deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
    // does not modify the original driver (it is non-destructive)
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
    // returns driver without the delete key/value pair
    // modifies the original driver
}