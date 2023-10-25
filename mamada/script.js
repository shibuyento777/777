const luigi = document.querySelector('.luigi');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = () => {

    luigi.classList.add('jump');

    setTimeout(() => {

        luigi.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && luigiPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        luigi.style.animation = 'none';
        luigi.style.bottom = `${luigiPosition}px`;

        luigi.src = './images/defeat.png';
        luigi.style.width = '70px';
        luigi.style.marginLeft = '35px';

        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
    }
}, 10);

const restart = () => {

    gameOver.style.visibility = 'hidden';

    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    luigi.src = './images/dababy.gif';
    luigi.style.width = '130px';
    luigi.style.bottom = '0px';
    luigi.style.marginLeft = '';
    luigi.style.animation = '';

    cloud.style.left = ``;

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    
        if (pipePosition <= 100 && pipePosition > 0 && luigiPosition < 60) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            luigi.style.animation = 'none';
            luigi.style.bottom = `${luigiPosition}px`;
    
            luigi.src = './images/lestgoo.png';
            luigi.style.width = '70px';
            luigi.style.marginLeft = '35px';
    
            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;
    
            gameOver.style.visibility = 'visible';
    
            clearInterval(loop);
        }
    }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);