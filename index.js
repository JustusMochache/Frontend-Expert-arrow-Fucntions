console.log("test index,js");

// arrow functions

const array = [1,2,3,4,5]

const doubled = array.map((num) => {
    return num * 2;
});

console.log(doubled);

// destructuring assignment

// const first = array[0];
// const sec = array[1];

//console.log(first, sec);

// lets now destruture the above code

const [first, sec] = array;

console.log(first, sec);

// spread syntax
console.log("***************************");
const arr = [1,2,3,4]
console.log(arr);

function add(x, y){
    console.log(x + y);
}

//add(arr[0], arr[1]); // results to 3

add(...arr)

// combined

const combined = [...arr, ...array]

console.log(combined);

// template literals  

const name = "Diane";

