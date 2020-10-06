// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, { [key]: val });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  return Object.assign(obj, { [key]: val });
}

function deleteFromDriverByKey(obj, key) {
  let theNew = Object.assign({}, obj);
  delete theNew[key];
  return theNew;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}