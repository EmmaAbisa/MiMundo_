// ===== FECHA DE INICIO EXACTA =====
// Nota: Meses en JS empiezan en 0 → 0 = enero, 1 = febrero
const inicio = new Date(2025, 1, 11, 13, 0, 0); // 11 Feb 2024, 13:00

// ===== CONTADOR =====
function actualizarContador() {
    const ahora = new Date();
    
    // diferencia en milisegundos
    const diferencia = ahora - inicio;

    // cálculo total de segundos
    const totalSegundos = Math.floor(diferencia / 1000);

    // cálculo de días completos, horas, minutos y segundos
    const dias = Math.floor(totalSegundos / (3600 * 24));
    const horas = Math.floor((totalSegundos % (3600 * 24)) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    // mostrar en el HTML
    document.getElementById("contador").innerHTML =
        `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// actualizar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

// ===== TEXTO ESCRIBIÉNDOSE SOLO =====
const lineas = [
    "Si el mundo tuviera un coeficiente,",
    "sería la luna girando alrededor de la Tierra.",
    "",
    "",
    "Y si mi corazón tiene una órbita,",
    "siempre será alrededor de ti."
];

let lineaActual = 0;
let letraActual = 0;

function escribirTexto() {
    const textoElemento = document.getElementById("texto");

    if (lineaActual < lineas.length) {
        if (letraActual < lineas[lineaActual].length) {
            textoElemento.innerHTML += lineas[lineaActual].charAt(letraActual);
            letraActual++;
            setTimeout(escribirTexto, 40);
        } else {
            textoElemento.innerHTML += "<br>";
            lineaActual++;
            letraActual = 0;
            setTimeout(escribirTexto, 500);
        }
    }
}

// ===== ACELERAR GIRO DEL PLANETA (SEGURO Y SUAVE) =====
const planeta = document.getElementById("planeta");
let rotacion = 0;

planeta.addEventListener("click", () => {
    rotacion += 120; // puedes subir a 180 o 360 si quieres
    planeta.style.setProperty("--rot", `${rotacion}deg`);
});


escribirTexto();
