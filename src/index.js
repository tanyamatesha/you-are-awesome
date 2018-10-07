// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {
    {
    }
};
const createNotEnumerableProperty = () => {
};
const createProtoMagicObject = () => {
};
const incrementor = () => {
};
const asyncIncrementor = () => {
};
const createIncrementer = function* () {
    let index = 0;
    while (true)
        yield ++index;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => new Promise(resolve => {
    setTimeout(() => resolve(param), 1400)
});
const getDeepPropertiesCount = () => {
};
const createSerializedObject = () => {
    return null
};
const toBuffer = () => {
};
const sortByProto = (array) => {
    array.sort((a, b) => a.__proto__ - b.__proto__);
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