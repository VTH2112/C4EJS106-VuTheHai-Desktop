let ul = document.getElementById('list-email');
let table = document.getElementById(personInfor);
let tr = document.getElementById('tr');
let headTable = document.getElementById('head');
let a = 1;

getData()

async function getData() {
    const DATA = await fetch('https://reqres.in/api/users?fbclid=IwAR05gaCKJE1jqEZA5ela_Y0vQtjB0WPVKnN5fQngPUrP1yPzEjpx_5HFXcg');
    let data = await DATA.json();
    let dataPerson = data.data;
    function listEmail() {
        console.log(dataPerson);
        for (let key of dataPerson) {
            let listEmail = key.email;
            ul.innerHTML += `<li><a href="#" style="text-decoration: none;color:black;font-size :15px;" id="${a}">${listEmail}</a></li>`
            a++;
        }
    }
    function clickEmail() {
        for (let key of dataPerson) {
            let aId = document.getElementById(`${key.id}`);
            aId.addEventListener("click", function()  {      
                headTable.hidden = false;
                if (aId.id == key.id) {                  
                    tr.innerHTML = '';
                    for (let i in key) {
                        tr.innerHTML += `<td >${i} : ${key[i]}</td>`
                    }
                    let tdImg = document.getElementsByTagName(`td`);
                    tdImg[5] = ''
                    let img = tdImg[5].outerText.replace(`avatar : ${key.avatar}`, key.avatar)
                    tdImg[5].innerHTML = `<img src='${img}' style="width:200px;"/>`;
                }
            })
        }
    }
    return listEmail(), clickEmail();
}