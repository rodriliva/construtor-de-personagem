const pontosTotais = 12


const dado = () => {
    return Math.round((Math.random() * 5) + 1)
}

function personagem(frc, hab, res, arm, pdf, PV, PM, msg, money, historia) {
    this.frc = frc;
    this.hab = hab;
    this.res = res;
    this.arm = arm;
    this.pdF = pdf;
    this.PV = res * 5;
    this.PM = res * 5;
    this.money = dado() * 100;
    this.historia = historia
    this.msg = `Esse personagem tem ${frc} de Força, ${hab} de Habilidade, ${res} de Resistência, ${arm} de Armadura ${pdf} de Poder de Fogo, ${res * 5} Pontos de vida e ${res * 5} Pontos de Magia `;
}



pericias = ["Animais", "Arte", "Ciência", "Crime", "Esporte", "Idiomas", "Investigação", "Manipulação", "Máquinas", "Medicina", "Sobrevivência"] // 2 pontos


var teste = new personagem(1, 1, 5, 1, 1, 1, 1,)

console.log(teste)





