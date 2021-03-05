// ________________________EX1________________________________


// console.log("________________");
// let a = 5;
// let b = 6;
// console.log(a,b);
// console.log("________________");
// [a,b]=[b,a];
// console.log(a,b);
// console.log("________________");
// let temp= a;
// a= b;
// b= temp;
// console.log(a,b);



// ________________________EX2________________________________

// const s = 'Hello beauty there';
// const a = Array(s);
// console.log(a);
// console.log("________________");
// let split = s.split(" ");
// console.log(split);

// ________________________EX3________________________________

// const a = [4, 5 , 7 ,-8];
// console.log(...a);

// ________________________EX4________________________________




// let items = ["Jeans", "T-shirt ", "Socks"];
// var i = 1;
// while (true) {
//     let choose = prompt("Hi there , welcome to shop admin panel ,what to do you want ( C , R , U , D )  Or you can exit by type E !");
//     if (choose == "R" || choose == "r") {
//         console.log("The current items are : \n");
//         for (let Items of items) {
//             if (i > items.length) {
//                 console.log(i + ". " + Items);
//                 i++;
//             } else {
//                 console.log(i + ". " + Items);
//                 i++;
//                 if (true && i > items.length) {
//                     i = 1;
//                 }
//             }
//         }
//         console.log("___________________________");
//     } else if (choose == "C" || choose == "c") {
//         let newItem = prompt("Enter the name of the new item");
//         items.push(newItem);
//         alert("Done");
//     } else if (choose == "U" || choose == "u") {
//         let upDateItem = prompt("Enter the position you want to update");
//         let upDateItemName = prompt("Enter the new name");
//         items[upDateItem - 1] = upDateItemName;
//         alert("done");
//     } else if (choose == "D" || choose == "d") {
//         let deleteItem = prompt("Enter the position you want to delete");
//         items.splice(deleteItem - 1, 1);

//         alert("done");
//     } else if (choose == "E" || choose == "e") {
//         break;
//     } else {
//         alert("This command is not supported");
//         break;
//     }
// }


// ________________________EX5________________________________

// let sOfNumber = prompt("Enter a squence of Number, separated by commas ( , )");
//  sOfNumber = sOfNumber.split(",");
// let  sum = 0;
// for(sums of sOfNumber){
//     sum+=Number(sums) ;
// }alert("The sum of them is : "+ sum);


// ________________________EX6________________________________

// let sOfNumber = prompt("Enter a squence of Number, separated by commas ( , )");
// sOfNumber = sOfNumber.split(",");
// minNum = Math.min(...sOfNumber);
// alert(("The smallest number is : "+minNum));

// ________________________EX7________________________________


// const arr = [3, 4, 6, -9, 10, -88, 2];
// let input = Number(prompt("Enter a number"));
// let check = arr.indexOf(input);
// if (check === -1) {
//     alert(`${input} is NOT found in my array`);
// } else {
//     alert(`${input} is FOUND in my array at index ${check}`);
// }


// ________________________EX8________________________________

// const sheepFlock = [5, 7, 300, 90, 24, 50, 75];
// console.log(`Hello , my name is Phuong Nam and here is my sleep sizes :\n \n`, ...sheepFlock);

// let maxSize = Math.max(...sheepFlock);
// console.log(`\nNow my biggest sheep has size ${maxSize}, let's shave it`);

// let imax = sheepFlock.indexOf(maxSize);
// sheepFlock[imax] = 8;
// console.log(`\nAfter shearing , here is my flock \n\n `, ...sheepFlock);

// let sheepFlockAmonth = [];
// for (let i of sheepFlock) {
//     i += 50;
//     sheepFlockAmonth.push(i);
// }
// console.log(`\n  Month 1`);
// console.log("\nOne month has, passed , my sheep have grown , here are their sizes \n\n", ...sheepFlockAmonth);

// let maxSize1Month = Math.max(...sheepFlockAmonth);
// console.log(`\nNow my biggest sheep has size ${maxSize1Month}, let's shave it`);

// let imaxAmonth = sheepFlockAmonth.indexOf(maxSize1Month);
// sheepFlockAmonth[imaxAmonth] = 8;
// console.log(`\nAfter shearing , here is my flock \n\n `, ...sheepFlockAmonth);


// let month = Number(prompt("Enter the number of months you want to choose  "));
// let a = 2;
// while (a <= month) {
//     for (let a = 0; a < sheepFlockAmonth.length; a++) {
//         sheepFlockAmonth[a] += 50;
//     }
//     let sum = 0;
//     for (size of sheepFlockAmonth) {
//         sum += size;
//     }
//     console.log(`\n  Month ${a}`);
//     console.log("\nOne month has, passed , my sheep have grown , here are their sizes \n\n", ...sheepFlockAmonth);
//     let maxSizexMonth = Math.max(...sheepFlockAmonth);
//     console.log(`\nNow my biggest sheep has size ${maxSizexMonth}, let's shave it`);
//     let imaxmonth = sheepFlockAmonth.indexOf(maxSizexMonth);
//     sheepFlockAmonth[imaxmonth] = 8;
//     console.log(`\nAfter shearing , here is my flock \n\n `, ...sheepFlockAmonth);
//     console.log(`\n My flock has size in total : ${sum}`);
//     console.log(`\nI would get ${sum} * 2$ :  ` + sum * 2 + " $");
//     a++;

// }



// ________________________EX10________________________________

// let arrName = prompt("Enter a sequence of names");
//  arrName = arrName.split(',');
// alert(`${arrName} =>`+arrName.map(x => `<${x}>`));
// ________________________EX11________________________________




//  chữa đi a :D e chịu 




// ________________________EX12________________________________


// let Student = [" ", "Peter  ", "Jack  ", "Jame bone", "Elisa  ", "Alice  ", "Mark  ", "Elon Musk"];
// let i = 1;
// let a= 1;
// let b = 0;
// while (true) {
//     let choose = prompt("Hi there , welcome to my class list dashboard ,what to do you want ( C , R , U , D ) . Or you can exit and print out a list by type Q  !");
//     if (choose == "R" || choose == "r") {
//         let IdStudent = prompt("Enter the position number for which you want to find the student");
//         alert(`The student's name in ${IdStudent} place is :  ${Student[IdStudent]}`);
//     } else if (choose == "C" || choose == "c") {
//         let newStudent = prompt("Enter the new student");
//         Student.push(newStudent);
//         alert("Done");
//     } else if (choose == "U" || choose == "u") {
//         let upDateStudent = prompt("Enter the position you want to update");
//         let upDateStudentName = prompt("Enter the new name");
//         Student[upDateStudent ] = upDateStudentName;
//         alert("done");
//     } else if (choose == "D" || choose == "d") {
//         let deleteStudent = prompt("Enter the position you want to delete");
//         Student.splice(deleteStudent , 1);
//         alert("done");
//     } else if (choose == "Q" || choose == "q") {
//         while(a < Student.length){
//             if(a==1){
//                 console.log("________Student List_________");
//             }
//             console.log("|___|_______________________|");
//             console.log(`|${Student.indexOf(Student[a])}\t|.\t\t${Student[a]}  `);
//             a++;
//         }
//         console.log("|___|_______________________|");
//         break;
//     }
// else {
//         alert("This command is not supported");
//         break;
//     }
// }