const saldo = {
    receita: [5, 6, 89, 321, 4, 18, 29, 67, 84, 231],
    despesa: [400, 120, 60, 40, 89, 24],
};

const receitaTotal = saldo.receita.reduce((prev, current) => prev + current);
const despesaTotal = saldo.despesa.reduce((prev, current) => prev + current);
let resultado = receitaTotal - despesaTotal;

function valorFinal() {
    if (resultado >= 0) {
        console.log("Não hà dívidas");
    } else {
        console.log(`O valor da dívida é de ${resultado} reais`);
    }
}

valorFinal();
