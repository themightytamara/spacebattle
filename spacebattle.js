console.log('Welcome to the USS Schwarzenegger. It'/'s time to battle aliens!');

const hero = {
    hull: 20,
    firepower: 5,
    accurracy: .7,
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
                console.log('You saved the earth and destroyed the aliens!!`);

            }
        } else {
            console.log(`you missed! The aliens will forge ahead.`);
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
                console.log(`You lost! The US schwarzenegger is doomed`);

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

/*questions:
test out diff hull and accuracy later
how to move from console?
how many players max?
best css layout..?
*/
