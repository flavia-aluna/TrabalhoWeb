function home() {
    let Home = window.document.getElementById("home")
    Home.style.transform = 'translateY(5px)';
}

function oqueeIA() {
    let ia = window.document.getElementById("oqueeIA")
    ia.style.transform = 'translateY(5px)';
}
function tipos() {
    let tip = window.document.getElementById("tipos")
    tip.style.transform = 'translateY(5px)';
}

function aplicacao() {
    let apl = window.document.getElementById("apli")
    apl.style.transform = 'translateY(5px)';
}

function plataforma() {
    let plat = window.document.getElementById("plataforma")
    plat.style.transform = 'translateY(5px)';
}

/*Inicio do código para o relógio*/
function atualizarRelogio() {
const relogioElement = document.getElementById("relogio");
const dataAtual = new Date();

const horas = dataAtual.getHours().toString().padStart(2, "0");
const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
const segundos = dataAtual.getSeconds().toString().padStart(2, "0");

relogioElement.textContent = `Agora são: ${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000); // Atualiza a cada segundo
/*fim do código para o relógio*/

/*Inicio do código para o efeito das imagens do corpo*/
const zoomImage = document.getElementById("fundo3dIA");

zoomImage.addEventListener("mouseover", () => {
zoomImage.classList.add("zoomed");
});

zoomImage.addEventListener("mouseout", () => {
zoomImage.classList.remove("zoomed");
});

const image = document.getElementById("desenhoIA");

image.addEventListener("mouseover", () => {
image.classList.add("zoomed");
});

image.addEventListener("mouseout", () => {
image.classList.remove("zoomed");
});

const brazil = document.getElementById("abeinfobrasil");

brazil.addEventListener("mouseover", () => {
brazil.classList.add("zoomed");
});

brazil.addEventListener("mouseout", () => {
brazil.classList.remove("zoomed");
});
/*Fim do código para o efeito das imagens do corpo*/

