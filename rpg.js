//Standard Dice
const dice = () => {
    return Math.round((Math.random() * 5) + 1)
}

//Advantage Constructor
function Advantage(name, stat, cost, bonus = 0) {
    this.name = name;
    this.stat = stat;
    this.cost = cost;
    this.bonus = bonus;
}

//Building Advantages
const agilityBoost = new Advantage('Agility Boost', 'strenght', 1, 2);
const powerfulDexterityBoost = new Advantage('Powerful Dexterity Boost', 'strenght', 2, 3);

//Character Constructor
function Character(name) {
    this.name = name;
    this.stats = {
        strenght: 1,
        endurance: 1,
        dexterity: 1,
        armor: 1,
        powerOfFire: 1,
        life: 5,
        magic: 5,
    };
    this.advantages = [];
    this.pointsToSpend = 12;
}

//Add a Status
Character.prototype.addStats = function (name, value) {
    if (this.pointsToSpend - value >= 0) {
        this.stats[name] += value;
        this.pointsToSpend -= value;
    }
}

Character.prototype.addLifeMagic = function (name, endurance) {
    this.stats[name] *= this.stats[endurance];
}


//Add a Advantage
Character.prototype.addAdvantage = function (advantage) {
    if (advantage instanceof Advantage) {
        let { stat, cost, bonus } = advantage;
        if (this.pointsToSpend - cost > 0) {
            this.stats[stat] += bonus;
            this.pointsToSpend -= cost;
            this.advantages.push(advantage);
        }
    }
}

//Creating a character
const rodrigo = new Character('Rodrigo');

//Adding stats
rodrigo.addStats('strenght');
rodrigo.addStats('dexterity');
rodrigo.addStats('endurance');
rodrigo.addStats('armor');
rodrigo.addStats('powerOfFire');

//Adding PV and Magic
rodrigo.addLifeMagic('life', 'endurance');
rodrigo.addLifeMagic('magic', 'endurance');

//AAdding Advantages
 rodrigo.addAdvantage(agilityBoost);
 rodrigo.addAdvantage(powerfulDexterityBoost);

 console.log(rodrigo)