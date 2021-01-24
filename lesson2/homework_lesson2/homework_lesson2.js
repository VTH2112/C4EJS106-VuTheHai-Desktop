/*__________________________________________________________________________________________________________________________________________________________________*/
/*_________________________EX_1_________________________*/
//Ex_1a|

/* What are var and const in JavaScript?*/

// Both are variable declarations vs initialization, scope but for other purposes
/*______________________________________________________*/

//Ex_1b|

/*What are the differences between let and var? */

/*var:
       -function scoped
       -undefined when accessing a variable before it's declared                 
       -It is possible to reassign and declare again

  let:
       -block scoped
       -ReferenceError when accessing a variable before it's declared 
       -It is possible to reassign but cannot declare again*/

//Ex_1c|

/*What to use in what cases?*/

/*     -shouldn't use var because this keyword is very difficult to determine the specific scope of the variable.
       -Use let when the variable needs to change its value.
       -Use const when the variable doesn't need to change value*/


/*_________________________EX_2_________________________*/

/*1. What is Boolean?
  2. What results in Boolean?*/
/*in programming, you will need a data type that can only have one of two values, like
    YES / NO
    ON / OFF
    TRUE / FALSE 
And that's why using boolean*/

//results in Boolean will return TRUE / FALSE 



/*_________________________EX_3_________________________*/


// console.log("\n______________________________3A____________________________________");
// let ia1= 0 ;
// while(ia1 < 7){
//     console.log(ia1++);
// }

// console.log("\n______________________________3B____________________________________");
// let nb3 = prompt("Enter a number 3B");
// let ib3 = 0;
// while (ib3 < nb3){
//     console.log(ib3++);
// }

// console.log("\n______________________________3C____________________________________");
// let nc3 = prompt("Enter a number 3C");
// let ic3 = 3;
// while (ic3 < nc3){
//     console.log(ic3++);
// }

// console.log("\n______________________________3D____________________________________");
// let nd3 = prompt("Enter a number n 3D");
// let cd3 = prompt("Enter a number c 3D");
// while (cd3 < nd3){
//     console.log(cd3++);
// }

// console.log("\n______________________________3E____________________________________");
// let ne3 = Number(prompt("Enter a number n 3E"));
// let ce3 = Number(prompt("Enter a number c 3E"));
// for(ce3 ; ce3 < ne3 ; ce3+=3 ){
//         console.log(ce3);
// }

// console.log("\n______________________________3F____________________________________");
// let nf3 = Number(prompt("Enter a number n 3F"));
// let cf3 = Number(prompt("Enter a number c 3F"));
// let sf3 = Number(prompt("Enter a number s 3F"));
// for(cf3 ; cf3 < nf3 ; cf3 += sf3 ){
//         console.log(cf3);
// }
// /*_________________________EX_4_________________________*/
// console.log("\n______________________________4____________________________________");
// let n4 = prompt("Enter an integer 4 :");
// let fact4 = 1 ;
// if (n4 < 0){
// console.log("Error! Factorial of a negative number doesn't exist.");
// }
// else {
// for (i4 = 1; i4 <= n4; i4++) {
//     fact4 *= i4;
// }
// alert(`Factorial of ${n4} = ${fact4}`);
// }
// /*_________________________EX_5_________________________*/
// console.log("\n______________________________5____________________________________");

// let age5  = prompt("How old are you ? 5");
// if(age5 < 0 || age5 > 100){
//     alert("Your age must be between 0-100");
// }
// else if (age5 < 14){
//     alert("You are not old enough to view this content");
// }
// else{
//     alert("Enjoy!");
// }
// /*_________________________EX_6_________________________*/
// console.log("\n______________________________6____________________________________");
//     let x6 = prompt("Enter a number between 0 - 9 |(6)");
//     if(x6 < 0 || x6 > 9){
//        alert("A number must be between 0-9");   
//     }else if(x6 >= 5){
//         alert(`${x6} is higher half of 9`);
//     }
//     else {alert(`${x6} is lower half of 9 `);}  
// /*_________________________EX_7_________________________*/
// console.log("\n______________________________7____________________________________");
// let n7 = Number(prompt("(7) n ="));
// let x7 = Number(prompt("(7) x ="));
// let btw7 = (n7)/2;
// if(x7 < btw7 ){
//     alert(`${x7} is in lower half of ${n7}`);
// }
// else if(x7 > btw7){
//     alert(`${x7} is in higher half of ${n7}`);
// }
// /*_________________________EX_8_________________________*/
// console.log("\n______________________________8____________________________________");
// let x8 = Number(prompt("Enter a number to check is even or odd number (8)"));
// if(x8 == " " ){
//     alert("U must enter a number");
// }

// else if(x8 % 2 == 0 || x8 == 0){
//     alert(`${x8} is an even number ` );
// }else{
//     alert(`${x8} is an odd number`)
// }
// /*_________________________EX_9_________________________*/
// console.log("\n______________________________9A____________________________________");
// /*_____________a_______________*/
// let a9 = 0 ;
// while(a9 <= 6){
//     if(a9 < 3){
//     console.log("L");
//     }
//     else if(a9 > 3){
//         console.log("H");
//     }
//     a9 ++ ;
// };
// /*_____________b_______________*/
// console.log("\n______________________________9B____________________________________");
// let b9 = 0 ;
// let i9 = Number(prompt("Enter the total number of L's and H's"));
// while(b9 < i9){
//     if(b9 < i9/2){
//     console.log("L");
//     }
//     else if(b9 >i9/2){
//         console.log("H");
//     }
//     b9 ++ ;
// };
// /*_____________c_______________*/
// console.log("\n______________________________9C____________________________________");
// let c9 = 0 ;
// while(c9 < 8){
//     if(c9 % 2 == 0 ){
//         console.log("0");
//     }
//     else{
//         console.log("1");
//     }
//  c9++;
// }
// /*_____________d_______________*/
// console.log("\n______________________________9D____________________________________");
// let d9 = 0;
// let nd9 = Number(prompt("Enter the total number of 1's and 0's"));
// while (d9 < nd9) {
//   if (d9 % 2 == 0) {
//     console.log("0");
//   } else {
//     console.log("1");
//   }
//   d9++;
// }console.log("\n______________________________10____________________________________");
let mass = Number(prompt("Your weight in kg ?"));
let height = Number(prompt("Your height in cm ?"));
height = height / 100 ;
let BMI = mass/(height*height);
BMI = BMI.toFixed(1);

if(BMI < 16){
    alert("You are severely underweight");
}
else if(BMI < 18.5){
    alert(`Your BMI is ${BMI}`);
    alert("You are underweight");
}
else if(BMI < 25){
    alert(`Your BMI is ${BMI}`);
    alert("You are normal");
}
else if(BMI < 30){
    alert(`Your BMI is ${BMI}`);
    alert("You are overweight");
}
else{
    alert(`Your BMI is ${BMI}`);
    alert("You are obese");
}