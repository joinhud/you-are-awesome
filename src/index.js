// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (value) => { return value; };
const createNotEnumerableProperty = (value) => { return Symbol.for(value); };
const createProtoMagicObject = () => {
  function MagicObject(params) { };
  MagicObject.__proto__ = MagicObject.prototype;

  return MagicObject;
};
const incrementor = () => {
  if (!this.currentCount) {
    this.currentCount = 1;
  } else {
    this.currentCount++;
  }

  let inc = () => {
    this.currentCount++;
    return inc;
  }

  inc.valueOf = () => {
    return this.currentCount;
  }

  return inc;
};
const asyncIncrementor = async () => {
  if (!this.asyncCounter) {
    this.asyncCounter = 1;
  }

  return this.asyncCounter++;
};
const createIncrementer = function* () {
  let value = 1;

  while (value < 12) {
    yield value++;
  }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = async (param) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(param), 1000)
  });

  return await promise;
};
const getDeepPropertiesCount = (object) => {
  let count = 0;

  (function deepCount(obj) {
    for (let key in obj) {
      count++;
      if (typeof obj[key] === 'object') {
        deepCount(obj[key]);
      }
    }
  })(object);

  return count;
};
const createSerializedObject = () => { 
  return {
    toJSON() {
      return '';
    },
    valueOf() {
      return '';
    }
  }; 
};
const toBuffer = () => { };
const sortByProto = (array) => { 
  array = array.sort((a, b) => {
    let elem = a.__proto__;

    if (elem === b.__proto__) {
      return 0;
    }

    while (elem !== Object.prototype) {
      if (elem === b.__proto__) {
        return -1;
      }
      elem = elem.__proto__;
    }

    return 1;
  });

  return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;