console.log("Hi....!")

let x = 0;
let bool = false;
let interval;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');
    [...cubes].forEach(cube => cube.style.transform = `rotateY(${x}deg`);
    // console.log(x);
}

const changePlayPause = () => {
    const i = document.querySelector('.play-pause i');
    const cls = i.classList[1];
    // console.log(cls);
    if (cls === 'fa-play') {
        i.classList.remove('fa-play');
        i.classList.add('fa-pause');
    } else {
        i.classList.remove('fa-pause');
        i.classList.add('fa-play');
    }
}

const playPause = () => {
    if (!bool){
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 3000);
       
        bool = true;
    } else {
        clearInterval(interval);
       
        bool = false;
    }
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    // console.log("click on left")
    x += 90;
    rotate();
});

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    // console.log(" on mouseover")
    x += 25;
    rotate();
});

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    // console.log(" on mouseover")
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    // console.log("click on right!")
    x -= 90;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    // console.log(" on mouseover")
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    // console.log(" on mouseover")
    x += 25;
    rotate();
});

document.querySelector('.play-pause').addEventListener('click', () => {
    // console.log("clicked");
    playPause();
    changePlayPause();

})