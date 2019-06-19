console.log("Hi....!")

document.querySelector('.left-arrow').addEventListener('click', () => {
    // console.log("click on left")
    const cubes = document.querySelectorAll('.cube');
    console.log(cubes);
    [...cubes].forEach(cube => cube.style.transform = 'rotateY(90deg');
});