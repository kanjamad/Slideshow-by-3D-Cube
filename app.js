console.log("Hi....!")

let x = 0;

document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90;
    // console.log("click on left")
    const cubes = document.querySelectorAll('.cube');
    // console.log(cubes);
    [...cubes].forEach(cube => cube.style.transform = `rotateY(${x}deg`);
    console.log(x);
});