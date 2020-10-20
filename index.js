// Write your solution in this file!
const driver = {
  };
//we want object to be empty 
function updateDriverWithKeyAndValue(driver, key, value)  {
  const newDriver = {...driver} //spread operator 

  newDriver[key] = value;
// Object.assign({}, "key", "value")

  return newDriver;
};
//functions go inside functions 
//spread operator = same as assign 


//we don't need to create a second const

 

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;

};
 

function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({},driver)
  delete newDriver[key]
  return newDriver 
};
// 1) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
// this function should take in a driver Object and a key. 
//It should delete the key/value pair for the key that was passed in 
//from the driver Object. This should all not actually mutate the driver passed in.
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key] //   modifies the original driver
  // driver[key] = 10
  return driver //  returns driver without the delete key/value pair
}
