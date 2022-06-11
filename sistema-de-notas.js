let nota;
function verificarNota(num) {
    if (num >= 90) {
        nota = "A";
    } else if (num >= 80 && num <= 89) {
        nota = "B";
    } else if (num >= 70 && num <= 79) {
        nota = "C";
    } else if (num >= 60 && num <= 69) {
        nota = "D";
    } else {
        nota = "F";
    }
}

verificarNota();
console.log(nota);
