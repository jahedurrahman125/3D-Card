const container = document.querySelector('.main-div');
const card = document.querySelector('.float-card');

const images = document.querySelector('.images');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const size = document.querySelector('.size');
const button = document.querySelector('.purchase');

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    images.style.transform = "translateZ(200rem) rotateZ(-45deg)";
    title.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(125px)";
    size.style.transform = "translateZ(100px)";
    button.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    images.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    size.style.transform = "translateZ(0px)";
    button.style.transform = "translateZ(0px)";
});