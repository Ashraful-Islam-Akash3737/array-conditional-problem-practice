//practice problem 1



var fruits = ["Apple", "Banana", "Orange"];

//find the index of banana
var banana = fruits.indexOf("Banana");
console.log(banana);


//Replace banana with mango
fruits[1] = "Mango";
console.log(fruits);

//remove orange
fruits.pop();
console.log(fruits);

//add watermelon
fruits.push("watermelon");
console.log(fruits);





//practice problem 2


//find out someones grade by using his total number

// akash = 85;
// tom = 66;
// jane = 95;
// peter = 56;
// john = 40;

var totalMarks;
totalMarks = 85;


if(totalMarks >= 80){
    console.log("A garde")
}
else if(totalMarks >= 60){
    console.log("B garde")
}
else if(totalMarks >= 50){
    console.log("C garde")
}
else if(totalMarks >= 40){
    console.log("D garde")
}
else{
    console.log("F garde")
}




//practice problem 3

//find out the largest number
var a = 13;
var b = 79;
var c = 45;

if((a>b) && (a>c)){
    console.log("the largest number is-  A")
}
else if((b>a) && (b>c)){
    console.log("the largest number is-  B")
}
else{
    console.log("the largest number is-  B")
}


//find out the somodibahu or Isosaceles triangle
var a = 9;
var b = 8;
var c = 9;

if (a === c){
    console.log("this is an Isosaceles truangle")
}
else{
    console.log("this is not an Isosaceles truangle")
}