// https://stackoverflow.com/questions/22168033/a-function-to-print-prototype-chain-for-a-given-object

function getPrototypeChainOf(object) {

    let proto = object.constructor.prototype;
    let result = '[your object]';

    while (proto) {
        result += ' -> ' + proto.constructor.name;
        proto = Object.getPrototypeOf(proto)
    }

    return result;
}