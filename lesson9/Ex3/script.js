let quoteText =document.getElementById('quoteText');
let quoteAuthor =document.getElementById('quoteAuthor');
let reloadBtn = document.getElementById('reloadBtn');

getData()



async function getData() {
    const DATA = await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json');
    let data = await DATA.json();
    reload();
    reloadBtn.style.border='none';
    reloadBtn.style. background =  'white';
    reloadBtn.style.margin='12px';
    reloadBtn.style.width= '50px';
    quoteText.innerHTML = `${data[27].quoteText}`;
    quoteAuthor.innerHTML =`${data[27].quoteAuthor}`
    function reload() {
        reloadBtn.addEventListener('click',function(){
            const random = Math.floor(Math.random() * data.length);
            console.log( data[random]);
            quoteText.innerHTML = `${data[random].quoteText}`;
            quoteAuthor.innerHTML =`${data[random].quoteAuthor}`
        })
    }


}