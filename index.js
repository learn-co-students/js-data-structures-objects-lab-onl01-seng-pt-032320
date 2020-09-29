// Write your solution in this file!
const driver = {};

//Object.assign() 
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
};

//should not mutate the driver passed in

//const obj = { foo: "bar" };
 
//const newObj = Object.assign({}, obj);
 
//newObj;
// => { foo: "bar" }
 
//delete newObj['foo'];
// => true
 
//newObj;
// => {}
 
//obj;
// => { foo: "bar" }


function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);

    delete newObj[key];

    return newObj;
};

//destructive delete
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }