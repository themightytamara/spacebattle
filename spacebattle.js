console.log('Welcome to the USS Schwarzenegger. It'/'s time to battle aliens!');

const hero = {
    hull: 20,
    firepower: 5,
    accußracy: .7,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log(`${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`It's a direct hit!! Well done, Captain PS Student!`);
            target.hull = target.hull - this.firepower;
            console.log(`alien has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log('You saved the earth and destroed the aliens!!`);

            }
        } else {
            console.log(`you missed!`);
        }
    }
}
const alien = {
    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`You've been hit!`);
            target.hull = target.hull - this.firepower;
            console.log(`hero has ${target.hull} hull points left.`);
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log(`You lost!`);

            }
        } else {
            console.log(`Good job!`);
        }
    }
}
const battle = (player, computer) => {
    while (player.isAlive && computer.isAlive) {
        player.attack(computer);
        if (computer.isAlive) {
            computer.attack(player);
        }
    }
}
=
