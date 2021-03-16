// _________________________EX1_________________________
// const product = {
//     name: ' Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'White'
// };
// // for(let x in product){
// //     console.log(x);
// // }
// // 1.1___ property
// // 1,2
// for (let x in product) {
//     console.log(x + ' : ' + product[x]);
// }
// _________________________EX2_________________________




// _________________________EX3_________________________
// 3.1 Object
// 3.2  Array
// 3.3



// _________________________EX4_________________________

// let dict = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for \'error\' ',
//     pm: 'The short version of Project Manager , the person in charge of the final result of a project ',
//     "ui/ux": 'UI means User Interface, UX mean User Experience, are the process to define how your products look and feels'
// };
// alert("Hi there,this is dev dictionary");

// while(true){
// let check;
// let input = prompt("Enter a keyword").toLowerCase();
// for (let key in dict) {
//     if (key == input ) {
//         check = true;
//     }
// }
// if (check == true) {
//     alert(`${input}\n${dict[input]}`);
//     break;
// } else {
//     let newObj = prompt(`We couldn't find your word : ${input} ,leave your explanation `);
//     dict[input] = newObj;
//     alert("Done");
// }
// }

// _________________________EX5_________________________
// let arrProduct = [{
//         Name: 'Xiaomi portable charger 2000mah',
//         Brand: 'Xiaomi',
//         Price: '428',
//         Color: 'White',
//         Category: 'Charger'
//     },
//     {
//         Name: 'VSmart Active 1',
//         Brand: 'VSmart',
//         Price: '5487',
//         Color: 'Black',
//         Category: 'Phone'
//     },
//     {
//         Name: 'IPhone X',
//         Brand: 'Apple',
//         Price: '21490',
//         Color: 'Gray',
//         Category: 'Phone'
//     },
//     {
//         Name: 'Samsung Galaxy A9',
//         Brand: 'Samsung',
//         Price: '8490',
//         Color: 'Blue',
//         Category: 'Phone'
//     }
// ];
// let j = 0;
// for (let i of arrProduct) {
//     j++;
//     console.log(`--------------------------------------------\n #${j} ${Object.keys(i)[0] } : ${i.Name}\n\n\t${Object.keys(i)[2] } : ${i.Price}`);
// };
// console.log("--------------------------------------------");
// let productPosition = prompt("Enter a product position");
// productPosition = productPosition-1;
// for (i in arrProduct){
//    if(productPosition == i){
//        for(let k in arrProduct[i]){
//            console.log(k + ' : ' + arrProduct[i][k]);
//        }
//    }
// }
// console.log("--------------------------------------------");
// let inputCategory= prompt("Enter your category");
// for (i of arrProduct){
//     if(inputCategory == i.Category.toLowerCase()){
//     console.log(`${Object.keys(i)[0] } : ${i.Name}\n\n${Object.keys(i)[2] } : ${i.Price}`);
//     }
// }

// console.log("--------------------------------------------");
// let a = 0;
// let Provider = ['Phukienzero Dientuccc', 'Tgdd Ddghn VnStore', 'Tgdd', 'Tgdd'];
// if(j > 0){
//     j=1;
// }
// for (i of arrProduct) {
//     i.Providers = Provider[a++];
//     console.log(`--------------------------------------------\n #${j} ${Object.keys(i)[0] } : ${i.Name}\n\n\t${Object.keys(i)[2] } : ${i.Price}\n\n\t${Object.keys(i)[4] } : ${i.Providers}`);
//     j++;
// }
// let findProviders = prompt("Enter Provider");
// for (i of arrProduct) {
//     if (i.Providers.includes(findProviders) == true) {
//         console.log(`--------------------------------------------\n  ${Object.keys(i)[0] } : ${i.Name}\n\n\t
//         ${Object.keys(i)[1] } : ${i.Brand}\n\n\t
//         ${Object.keys(i)[2] } : ${i.Price}\n\n\t
//         ${Object.keys(i)[3] } : ${i.Color}\n\n\t
//         ${Object.keys(i)[4] } : ${i.Category}\n\n\t
//         ${Object.keys(i)[5] } : ${i.Providers}`);
//     }
// }


// _________________________EX6_________________________

let dev = [{
        Name: 'HTML',
        Complete: 'False'
    },
    {
        Name: 'CSS',
        Complete: 'False'
    },
    {
        Name: 'Basics of JavaScript',
        Complete: 'False'
    },
    {
        Name: 'Node Package Manager (npm)',
        Complete: 'False'
    },
    {
        Name: 'Git',
        Complete: 'False'
    },
];
let j = 1;
// for(let i of dev) {   
// console.log("Hi there , this is your learning tasks to font-end developer career :");
//     console.log(`${j++}.\t${ i.Name}\n\n\t${Object.keys(i)[1] }:\t${i.Complete}`);
// }
while (true) {
    let input = prompt("Enter your command (New, Delete, Update, Complete). Enter P to print the list ").toLowerCase();
    if (input == "new") {
        let cre = prompt("Enter new task");
        let newObj = {
            Name: cre,
            Complete: 'False'
        };
        dev.push(newObj);
        if (j > 1) {
            j = 1;
        }
        console.log("[CREATED]");
        console.log("Hi there , this is your learning tasks to font-end developer career :");
        for (i of dev) {
            console.log(`${j++}.\t${ i.Name}\n\n\t${Object.keys(i)[1] }:\t${i.Complete}\n-----------------------------------------------`);
        }
        alert("Done");
    } else if (input == 'update') {
        let position = prompt("Enter position");
        let newTitle = prompt("Enter new title");
        dev[position - 1] = {
            Name: newTitle,
            Complete: 'False'
        };
        if (j > 1) {
            j = 1;
        }
        console.log("[UPDATED]");
        console.log("Hi there , this is your learning tasks to font-end developer career :");
        for (i of dev) {
            console.log(`${j++}.\t${ i.Name}\n\n\t${Object.keys(i)[1] }:\t${i.Complete}\n-----------------------------------------------`);
        }
        alert("Done");
    } else if (input == "complete") {
        let position = prompt("Enter position");
        dev[position - 1] = {
            Name: dev[position - 1].Name,
            Complete: 'True'
        };
        if (j > 1) {
            j = 1;
        }
        console.log("[COMPLETED]");
        console.log("Hi there , this is your learning tasks to font-end developer career :");
        for (i of dev) {
            console.log(`${j++}.\t${ i.Name}\n\n\t${Object.keys(i)[1] }:\t${i.Complete}\n-----------------------------------------------`);
        }
        alert("Done");
    } else if (input == "delete") {
        let deleteObj = prompt("Enter position");
        dev.splice(deleteObj - 1, 1);
        console.log("DELETED");
        if (j > 1) {
            j = 1;
        }
        console.log("Hi there , this is your learning tasks to font-end developer career :");
        for (i of dev) {
            console.log(`${j++}.\t${ i.Name}\n\n\t${Object.keys(i)[1] }:\t${i.Complete}\n-----------------------------------------------`);
        }
        alert("Done");
    } else if (input == "p") {
        console.log("___________________________________________________________");
        if (j > 1) {
            j = 1;
        }
        let x = '';
        for (i of dev) {
            if (i.Complete == "True") {
                x = "X";
            } else {
                x = '';
            }
            console.log(`${j++}.\t[${x}]${ i.Name}\n`);
        }
        console.log("___________________________________________________________");
    } else {
        break;
    }
}