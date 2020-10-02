// Write your solution in this file!
const driver = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: 10004
}
updateDriverWithKeyAndValue(driver,'strret1', '40 Steinway')
destructivelyUpdateDriverWithKeyAndValue(driver, 'zipCode', '11103')
deleteFromDriverByKey(driver, 'street2')
destructivelyUpdateDriverWithKeyAndValue(driver, 'city')

function updateDriverWithKeyAndValue(obj,key,value){
    const newDriver = { ...obj };
    newDriver[key] = value;
    return newDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(obj,key, value){
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key){
    const newObj = Object.assign({}, obj)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj;
}
