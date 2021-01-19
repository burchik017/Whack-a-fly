let doc = document;
    let allImgs = doc.getElementsByClassName('cell');
    let counter = 0;
    let counterElement = doc.getElementById('counter-element');
    let player = doc.getElementById('player');
    let timeInterval = 1100;
    let intervalS;

    let cells = doc.querySelectorAll('.cell');
    cells.forEach(cell =>
        cell.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                timeInterval = timeInterval / 1.2;
                counter++;
                this.classList.remove('active');
                allImgs[counter].classList.add('active');
                counterElement.innerText = counter;
                player.currentTime = 0;
                player.play();
                clearInterval(intervalS); // собственно тут мы чистим его
                if (counter == 8) {
                    alert('you win');
                    location.reload();
                } else {
                    test(timeInterval); // вызываем функцию обертку для интервала с текущим timeInterval
                }
                
            }
        })
    );


    function test(int) { // вот тут уже каждый раз будет новый интервал
        intervalS = setInterval(() => { // закидываем setInterval в переменную, чтобы было что чистить
            let activeImgs = doc.getElementsByClassName('active');
            activeImgs[0].classList.remove('active');
            let x = Math.floor(Math.random() * (8 - 0 + 1)) + 0;

            // let allImgs = doc.getElementsByClassName('cell');
            allImgs[x].classList.add('active');
            console.log(timeInterval);
        }, int); // вот тут уже каждый раз будет новый интервал
    };

    test(timeInterval); // первоначальная инициализация игры(старт/запуск)