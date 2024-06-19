class F1 {
    constructor(driver,team,isF1) {
        this.driver = driver;
        this.team = team;
        this.isF1 = isF1;
    }
}

class RedBull extends F1 {
    constructor(driver, team) {
        super(driver, team, true);
    }

    acceleration() {
        return `${this.driver} sedang berakselerasi!`;
    }
}

class GarasiDrift extends F1 {
    constructor(driver,team) {
        super(driver, team, false);
    }

    drifting() {
        return `${this.driver} sedang drifting!`;
    }
}

const RB = new RedBull("Max Verstappen", "RB Team");
const RB1 = new RedBull("Sebastian Vettel", "RB Team");
const RB2 = new RedBull("Sergio Peres", "RB Team");

const GD = new GarasiDrift("Ziko Harnadi", "GD Team");
const GD1 = new GarasiDrift("Dipo Harnadi", "GD Team");
const GD2 = new GarasiDrift("Harnadi", "GD Team");

console.log(RB.acceleration());
console.log(GD.drifting());
console.log(RB);
console.log(GD)
