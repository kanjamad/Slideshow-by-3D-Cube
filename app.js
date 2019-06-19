console.log("Hi....!")

let x = 0;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');
    [...cubes].forEach(cube => cube.style.transform = `rotateY(${x}deg`);
    // console.log(x);
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