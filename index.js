const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Objeto JSON com os níveis de experiência
const niveis = {
    "Ferro": 1000,
    "Bronze": 2000,
    "Prata": 5000,
    "Ouro": 7000,
    "Platina": 8000,
    "Ascendente": 9000,
    "Imortal": 10000,
    "Radiante": Infinity // Um nível "Radiante" é alcançado com qualquer quantidade de XP superior a 10000
};

let nome, xp, nivel;

rl.question("Digite o nome do herói: ", (nomeInput) => {
  nome = nomeInput;
  rl.question("Digite a quantidade de experiência (XP) do herói: ", (xpInput) => {
    xp = parseInt(xpInput);

    // Utiliza uma estrutura de repetição para percorrer os níveis e determinar o nível do herói com base na XP
    for (let [nomeNivel, xpNivel] of Object.entries(niveis)) {
        if (xp <= xpNivel) {
            nivel = nomeNivel;
            break;
        }
    }

    // Exibe a mensagem com o nome do herói e seu nível
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

    rl.close();
  });
});
