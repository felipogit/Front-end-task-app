const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular os Campeões Mundiais de Pilotos para cada sistema de pontuação
function calculateChampions(G, P, results, S, systems) {
  let champions = [];

  for (let s = 0; s < S; s++) {
    const [K, ...points] = systems[s];

    const totalPoints = Array.from({ length: P }, () => 0);

    for (let i = 0; i < G; i++) {
      for (let j = 0; j < K; j++) {
        totalPoints[results[i][j] - 1] += points[j];
      }
    }

    const maxPoints = Math.max(...totalPoints);
    champions.push(...totalPoints.reduce((acc, points, index) => {
      if (points === maxPoints) {
        acc.push(index + 1);
      }
      return acc;
    }, []));
  }

  return [...new Set(champions)]; // Remove duplicatas
}

// Função para processar a entrada
function processInput() {
  rl.question('', function (line) {
    const [G, P] = line.split(' ').map(Number);

    if (G === 0 && P === 0) {
      rl.close();
    } else {
      const results = [];
      for (let i = 0; i < G; i++) {
        results.push(line.split(' ').map(Number));
      }

      const S = Number(rl.prompt());
      const systems = [];

      for (let s = 0; s < S; s++) {
        const system = rl.prompt().split(' ').map(Number);
        systems.push(system);
      }

      const champions = calculateChampions(G, P, results, S, systems);
      console.log(champions.join(' '));

      processInput(); // Chama a função novamente para processar o próximo caso de teste
    }
  });
}

// Inicia o processo de entrada
processInput();
