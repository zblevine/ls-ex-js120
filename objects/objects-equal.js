function objectsEqual(obj1, obj2) {
  // eslint-disable-next-line max-len
  if ((Object.getOwnPropertyNames(obj1).length) !== Object.getOwnPropertyNames(obj2).length) return false;
  return Object.keys(obj1).every(key => {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo'}, {a: 'foo', b: 'bar'}));            // false