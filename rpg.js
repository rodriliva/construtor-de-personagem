//Dados 
const dadoComum = () => {
    return Math.round((Math.random() * 5) + 1)
}

/* 
// Construtor de Personagem
function personagem(frc, hab, res, arm, pdf) {
    this.frc = frc;
    this.hab = hab;
    this.res = res;
    this.arm = arm;
    this.pdf = pdf;
}

// Construindo o personagem
var eu = new personagem()
eu.frc = 1
eu.hab = 1
eu.res = 1
eu.arm = 1
eu.pdf = 1
eu.PV = eu.res * 5
eu.PM = eu.res * 5
eu.dinheiro = (dadoComum() * 100) + "z"

//Checagem de pontos
var total = () => {
    return eu.frc + eu.hab + eu.res + eu.arm + eu.pdf
}

const totalDePontos = () => {
    if (total() > 12) {
        console.log("Excedeu a quantidade de pontos")
    } else {
        console.log("Conseguiu")
    }
}

totalDePontos()


//Perícias
const pericias = ["Animais", "Arte", "Ciência", "Crime", "Esporte", "Idiomas", "Investigação", "Manipulação", "Máquinas", "Medicina", "Sobrevivência"]

//Tipos de Dano
//Vantagens

//Construtor de Vantagem
function vantagem(nome, custo) {
    this.nome = nome;
    this.custo = custo;
}

var aceleracao = new vantagem("Aceleração", 1)
var adaptador = new vantagem("Aceleração", 1)
//Desvantagens */


// Character Constructor
function personagem(frc, hab, res, arm, pdf) {
    this.frc = frc;
    this.hab = hab;
    this.res = res;
    this.arm = arm;
    this.pdf = pdf;
}

// Building a Character
var eu = new personagem()
eu.frc = 1
eu.hab = 1
eu.res = 1
eu.arm = 1
eu.pdf = 1
eu.PV = eu.res * 5
eu.PM = eu.res * 5
eu.dinheiro = (dadoComum() * 100) + "z"


console.log(eu)

// Function with total points
var total = () => {
    return eu.frc + eu.hab + eu.res + eu.arm + eu.pdf
}

const totalofPoints = () => {
    if (total() > 10) {
        console.log("You have exceeded the number of points")
    } else {
        console.log("You Did it!")
    }
}

totalofPoints()

// Advantages Consctructor
function vantagem(nome, custo, bonus) {
    this.nome = nome;
    this.custo = custo;
    this.bonus = bonus
}

// Example of Advtanges
var aceleracao = new vantagem("Aceleração", 1, eu.hab + 1)
var adaptador = new vantagem("Aceleração", 1)