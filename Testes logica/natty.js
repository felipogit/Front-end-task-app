// Função para calcular a sequência de Fibonacci
function fibonacci(n) {
    let fib = [0, 1]; // Inicializa a sequência com os dois primeiros números
  
    // Calcula os próximos números da sequência
    for (let i = 2; i < n; i++) {
      let nextNum = fib[i - 1] + fib[i - 2];
      fib.push(nextNum);
    }
  
    return fib;
  }
  
  // Imprime os primeiros 40 números da sequência de Fibonacci
  let fibonacciSequence = fibonacci(40);
  for (let num of fibonacciSequence) {
    console.log(num);
  }