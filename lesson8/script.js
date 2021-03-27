// ________________________________Ex_1________________________________

// 3.c | 4.b | 2.a | 1.d

// ________________________________Ex_2________________________________

// setInterval(function(){ console.log("Heehaw"); }, 1000);

// ________________________________Ex_3________________________________



// ________________________________Ex_4________________________________
// let li = document.getElementsByTagName("li");
// console.log(li[1]);
// for(let i of li){
//     console.log( i);
// }

// ________________________________Ex_5________________________________

// let divClass=document.getElementsByClassName('singer');
// console.log(divClass[1]);
// for(let i of divClass){
//     console.log(i);
// }
// ________________________________Ex_7________________________________
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let input = document.getElementById("input");
// btn1.addEventListener('click', (e) => {
//     console.log(e.target);
// })
// btn2.addEventListener('click', (e) => {
//     console.log(e.target);
// })
// input.addEventListener('keydown', (e) => {
//     console.log(e.key);
// });
// ________________________________Ex_8_______________________________


// function wish(){
//     let name="Hai";
//     let wish='1m$'
//     alert(`Name: ${name} \n I wish to make ${wish} this year`);
// }
// wish();
// ________________________________Ex_10_______________________________

// function wish1(...orther){
//     if(orther.length>1){
//         alert(`Name: ${orther[0]} \nWish :${orther[1]}`);
//     }
//     else{
//         alert(`Name: ${orther[0]} \nWish :No wish`);
//     }
// }
// wish1("Hai","1m$");
// ________________________________Ex_11________________________________

// let btn = document.getElementById('btn');
// let input = document.getElementById('input');
// let div = document.getElementById('result_div');
// console.log(btn);
// console.log(input);
// console.log(div);
// btn.addEventListener('click', function () {
//     console.log(btn.innerText + ' Just clicked');
//     console.log("User's name : " + input.value);
//     console.log("User's name uppercase: " + input.value.toUpperCase());
//     div.innerHTML = input.value.toUpperCase();
// });

// ________________________________Ex_12________________________________
let list = ["Backpack", "MiBand watch", "Ring"];
console.log(list);
let btn = document.getElementById('btnAdd');
let input = document.getElementById('newItem');
let newList = btn.insertAdjacentHTML('afterend', '<ul id="item-list"></ul>');
let itemList = document.getElementById("item-list");
let li = document.getElementsByTagName('li');
let a = 0;
for (let i of list) {
    itemList.innerHTML += `<li ><span id="${a}">${i}</span> <button class="remove" >remove</button></li> `;
    a++;
}
console.log(itemList);
console.log(btn);
console.log(input);
    btn.addEventListener('click', function () {
        console.log('Add button clicked');
        console.log(input.value);
        list.push(input.value);
        console.log(list);
        itemList.insertAdjacentHTML('beforeend', `<li>${input.value}</li>`)
    })



// for (let i = 0; i < li.length; i++) {
//     let btnDelete = document.getElementsByClassName("remove");
//     let spanId = document.getElementById(`${i}`);
//         btnDelete[i].addEventListener('click', function () {
//             console.log("Remove \n" + "Item : " + i);   
//             if (spanId.innerHTML == list[spanId.id]) {
//                 list.splice(list.indexOf(spanId.innerHTML), 1)
//                 li[i].remove()
//                 console.log(list);
//                 console.log(spanId.id);
               
//             }
//         })
// }