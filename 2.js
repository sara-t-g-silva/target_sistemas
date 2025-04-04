
function fibonacci(num) {
    let fibSeq = [0, 1]; 
    
    while (fibSeq[fibSeq.length - 1] < num) {
        let nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(nextFib);
    }
    if (fibSeq.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

console.log("Informe um número para verificar se ele pertence à sequência de Fibonacci:");

process.stdin.on('data', function(input) {
    const num = parseInt(input.toString().trim()); 
    if (!isNaN(num)) {
        fibonacci(num); 
    } else {
        console.log("Por favor, insira um número válido.");
    }
    process.stdin.pause(); 
});
