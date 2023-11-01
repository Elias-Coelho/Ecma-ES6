let array = [1, 2, 3, 4, 5, 6];

let obj = {
    first_name: 'elias',
    last_name: 'coelho'
};

for (let i in array) {
    console.log(i, array[i]);
}

for (let i in obj) {
    console.log(i, obj[i]);
}

for (let obj of array) {
    console.log(obj);
}


console.log(array.entries());
for (let [index, value] of array.entries()) {
    console.log(index, value);
}

let keys = Object.keys(obj);
for (let key of keys) {
    console.log(obj[key]);
}

let lista = array.map(function (value) {
    return value * 10;
});