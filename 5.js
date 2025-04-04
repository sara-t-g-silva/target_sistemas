function inverterString(str) {
    let stringInvertida = ''; 
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    console.log(`A string invertida é: ${stringInvertida}`);
}

console.log("Informe uma string para inverter:");

process.stdin.on('data', function(input) {
    const str = input.toString().trim(); 
    if (str) {
        inverterString(str);
    } else {
        console.log("Por favor, insira uma string válida.");
    }
    process.stdin.pause(); 
});
