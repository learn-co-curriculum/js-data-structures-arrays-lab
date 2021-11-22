// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop();
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift();
}

function appendDriver(name) {
    const newArray = [];
    newArray.push(...drivers, name)
    return newArray;
}

function prependDriver(name) {
    const newPrependArray = [];
    newPrependArray.push(name, ...drivers)
    return newPrependArray;
}

function removeLastDriver() {
    const newLastDriverArray = [];
    newLastDriverArray.push(...drivers);
    newLastDriverArray.pop();
    return newLastDriverArray;
}

function removeFirstDriver() {
    const newFirstDriverArray = [];
    newFirstDriverArray.push(...drivers);
    newFirstDriverArray.shift();
    return newFirstDriverArray;
}