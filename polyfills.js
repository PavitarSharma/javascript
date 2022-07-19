let fruits = ["Mango", "Apple", "Banana", "Grapes"]

// forEach
fruits.forEach(function (fruit) {
    console.log(fruit);
})


console.log("------------------------------------");
/* ----------------------------------- */
//polyfills-forEach
Array.prototype.customForEach = function (callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

fruits.customForEach(function (fruit) {
    console.log(fruit);
})

console.log("------------------------------------ \n");


console.log("Pollyfills For Map \n");
// Map
const fruitsOutput = fruits.map(function (fruit) {
    return fruit
})
console.log(fruitsOutput);

console.log("\n");

Array.prototype.customMap = function (callback) {
    let arr = []

    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]))
    }

    return arr
}

const customMap = fruits.customMap(function (fruit) {
    return fruit
})

console.log(customMap);

console.log('\n');
console.log("-----------------");
console.log('\n');

// pollyfills from filter
console.log("Pollyfills for filter \n");


const fruitsArr = [
    { name: 'Mango', price: 200 },
    { name: 'Apple', price: 300 },
    { name: 'Banana', price: 100 },
    { name: 'Grapes', price: 150 }
]

const filter = fruitsArr.filter(function (fruit) {
    return fruit.price > 100
})

console.log(filter);
console.log('\n');

Array.prototype.customeFilter = function (callback, context) {
    let arr = []

    for(let i = 0; i < this.length; i++) {
        if(callback.call(context, this[i], i, this)){
            arr.push(this[i])
        }
    }

    return arr
}

fruitsArr.customeFilter(function(fruit){
    if(fruit.price > 200){
        console.log(fruit);
    }
})

console.log('\n');
console.log("-----------------");
console.log('\n');


// pollyfills for reduce
console.log("Pollyfills for reduce \n");

const numbers = [1, 2, 3, 4, 5, 6]

let reduce = numbers.reduce(function(accumulator, current) {
    accumulator = accumulator + current
    return accumulator
})

console.log(reduce);


Array.prototype.customReduce = function(callback, intialValue) {
    let accumulator = intialValue === undefined ? undefined : intialValue

    for(let i = 0; i < this.length; i++){
        if(accumulator !== undefined){
            accumulator = callback.call(undefined, accumulator, this[i], i, this)
        }else {
            accumulator = this[i]
        }
    }

    return accumulator
}

let customF = numbers.customReduce(function(a,b){
    //return a + ',' + b

    return a + b
}, 0) // Initial Value

console.log(customF);

