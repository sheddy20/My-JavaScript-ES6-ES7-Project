//Arrays JavaScript

const fruits = ['apples', 'bananas', 'mango', 'pineapple', 'pearl'];

fruits[2] = "Coconut";
fruits.push("Strawberry");
fruits[50] = "Water melon";

fruits.push("Lime oranges");

fruits.unshift("Black Currants");

fruits.shift(0);

if (Array.isArray("hello")) {
    
    console.log("Arrays is of fruits");

} else {

    console.log("Arrays of fruits is not fruits");
}

console.log(fruits);