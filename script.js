// var negInteger = -3.1415;
// var escQuoter = "Quotes can also be \"escaped\".";
// var theSunIsWarm = true;
// var emptyInside = null;
// var anotherVariable;
// var a = 2;
// var b = 5;
var c = 5;
var d = "2";
if (c == d){
  theNumbersMatch= true;
}
else{
  theNumbersMatch= false;
}
console.log("The numbers match:" + theNumbersMatch);
// var theNumbersMatch;
// var sum = 2 + 5;
// var sum1 = a - escQuoter;
// console.log(a);
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log("The value of a is " + a + " The value of b is "+ b + " The value of sum is "+ sum);
// console.log(sum1);
// if (a==c){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
// if (b==c){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
// if (a===c){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
// if (a=c){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
//
// if (a !== c){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
//
// if (b==c && a==d){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
//
// if (b==c || a==d){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
//
// if ((b==c) != (a==d)){
//   theNumbersMatch= true;
// }
// else{
//   theNumbersMatch= false;
// }
// console.log("The numbers match:" + theNumbersMatch);
//
// a==b ? console.log("Match") : console.log("No match");


var pens;
pens =["red","blue","green","orange"];
console.log(pens);
pens[3]= "black";//if you want to change an item in your array
console.log(pens);
var fourthPen =pens[1];
console.log(fourthPen);
console.log("Array length: ", pens.length);
pens.reverse();
pens.shift();
pens.unshift("purple", "black");
pens.pop();
 pens.splice(3,1);
console.log("After: ",pens);



var newPens = pens.slice();
console.log("New pens:" , newPens);
newPens.push("purple","violet");


var result = newPens.indexOf("violet",0);
console.log("The index position is: ", result);
console.log("The value is:" ,newPens[result]);

var arrayString = newPens.join();//no space between the elements
console.log("string from array: " , arrayString);

var arrayString = newPens.join(", ");//space between the elements
console.log("string from array: " , arrayString);
