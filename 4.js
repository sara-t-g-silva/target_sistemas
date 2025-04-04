const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentual(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentualPorEstado = {};

    for (const estado in faturamento) {
        const valorEstado = faturamento[estado];
        const percentual = (valorEstado / totalFaturamento) * 100;
        percentualPorEstado[estado] = percentual.toFixed(2);
    }

    return percentualPorEstado;
}

const percentuais = calcularPercentual(faturamentoPorEstado);

console.log("Percentual de representação de cada estado no faturamento total:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
