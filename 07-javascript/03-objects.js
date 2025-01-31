let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // remove the property with key from result
  if (key in result) {
    delete result[key];
  }
  return key;
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  if (key in result) {
    return result[key];
  } else {
    console.log("Item does not exist");
  }
  return key;
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  for (const [key] of Object.entries(result)) {
    console.log(`${key}`);
  }
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
