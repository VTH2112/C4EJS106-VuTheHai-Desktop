let inputNum = document.getElementById('inputNum');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let countNum = document.getElementById('countNum');


Start()



function Start() {
    startBtn.addEventListener('click', function () {

        countNum.innerHTML = ++inputNum.value
        let i = setInterval(coolDown, 1000);
        inputNum.value = --inputNum.value

        function coolDown() {
            if (countNum.innerHTML > 0) {
                setTimeout(countNum.innerHTML = countNum.innerHTML - 1, 1000)
                inputNum.disabled = true

                function Stop() {
                    stopBtn.addEventListener("click", function () {
                        clearInterval(i);
                        countNum.innerHTML = "Stopped"
                        countNum.style.padding = ' 0px 78px 0px 0px'
                        inputNum.disabled = false
                    })
                }
                return Stop();
            } else {
                clearInterval(i);
                countNum.innerHTML = "Time's up"
                countNum.style.padding = ' 0px 78px 0px 0px'
                inputNum.disabled = false
            }
        }

        return coolDown();
    })
}