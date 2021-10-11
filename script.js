function open() {
    document.querySelector('.nav').classList.toggle("ouvert");
}

function close() {
    document.querySelector('.nav').classList.toggle("ouvert");
}

document.querySelector('.menu').addEventListener("click", open);
document.querySelector('.close').addEventListener("click", close);