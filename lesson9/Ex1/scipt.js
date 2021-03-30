let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let number = document.getElementById('number');
let count = 0;

plusClick()
minusClick()



function plusClick() {
    plusBtn.addEventListener('click', function () {
        number.innerHTML = ++count;
    })
}

function minusClick() {
    minusBtn.addEventListener('click', function () {
        number.innerHTML = --count;
    })
}