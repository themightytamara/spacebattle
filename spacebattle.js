
setTimeout(function() {
  alert(
    "Welcome to Space Battle on the USS Schwarzenegger. I'm your captain, Tamara - open the console log on the page to play "
  );
}, 5000);


const battleWinCheck = badGuy => {
  if (badGuy.hull <= 0) {
    console.log("You blew up " + badGuy.name + " Nice job!");
    victory();
  } else {
    console.log("keep shooting nice attack keep playing");
  }
};

const didIWin = () => {
  if (badGuys[0] === "dead") {
  
    console.log(
      "%c Congrats there winner winner chicken dinner for you!",
      "font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;"
    );
    alert(
      "Awesome job playing you won !!!! Click the link on the page to refresh and play again"
    );
  } else {
    console.log(
      "%c ... There are still aliens left to kill ...",
      "background:red; color:white;"
    );
    console.log(
      "%c .. Look out here comes one now ..",
      "background: lightyellow; color:red; font-size:15px;"
    );
    if (badGuys[3] === "dead") {
      badGuys[0].attack(youHero);
    } else {
      badGuys[0].fight(youHero); 
    }
  }
};


const victory = () => {
  if (badGuys[0].hull <= 0) {
    console.log(
      "%c !! Awesome !!.. you destroyed the alien ship ..!!",
      "background:orange; font-size:18px; border:3px solid green; color:white;"
    );
    badGuys[badGuys.length] = "dead";
    badGuys.splice(0, 1);
    didIWin();
  } else {
    console.log(
      "%c .. Good shot but they are still alive ..",
      "background:lightyellow; font-size:15px; color:red;"
    );
    didIWin();
  }
};


const defeat = youHero => {
  if (youHero.hull <= 0) {
    console.log(
      "%c Game over you are dead.... Sorry - refresh the page to play again",
      "font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;"
    );
    alert(
      ` Oh No your ship blew up ! The ${youHero.name} is gone! Close this annoying pop-up and refresh the page to try again Captian! Good thing it was just a simulation..... don't forget your engineers can search Google for a way to restore your hull power`
    );
  } else {
    console.log(
      "%c .. Your turn now captian enter your move below .. ",
      "background:lightskyblue; color:black; font-size:20px;"
    );
  }
};


let enigneers = ["E", "E", "E"];
this.myMissles = ["M", "M", "M", "M", "M", "M"];


class Hero {
  constructor(name, hull, accuracy) {
    this.name = name;
    this.hull = hull || 20;
    this.accuracy = accuracy || 0.7;
    this.weapons = {
      lasers: 5,
      missles: myMissles.length
    };
    this.catchPhrases = [
      "Get to the chopper!",
      "It's not a tumor!",
      `Consider that a divorce!`,
      `This ship is the Governator we are going to bring the pain!`
    ];
  }
  talkSas() {
    let rUp = this.catchPhrases[
      Math.floor(Math.random() * this.catchPhrases.length)
    ];
    console.log(`${this.name}  says \"  ${rUp} \"`);
  }
  announceHealth() {
    console.log("I am" + this.name + "my shields are now " + this.hull);
  }
  useGoogle() {
    if (enigneers[0] === "E") {
      enigneers[enigneers.length] = "o";
      enigneers.splice(0, 1);
      console.log(
        this.name +
          "we found the answer! We fixed our shield generator hull strength improved"
      );
      this.hull += 10;
      this.announceHealth();
      console.log(
        "%c It is still your turn",
        "background: lightskyblue; color:black; font-size:19px;"
      );
    } else {
      console.log(
        "%c Your engineers are all on a coffe break - sorry Captian they can't do it.... they do not have the power! ...#! It is still your turn !#... ",
        "background:lightskyblue; color:black; font-size:19px;"
      );
    }
  }
  attack(badGuy) {
    if (this.hull >= 1) {
      
      if (badGuy.name === badGuys[0].name) {
      
        if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
          
          if (myMissles[0] == "M") {
            
            this.talkSas();
            console.log(this.name + " used  missles 10 hitpoints dealt");
            console.log(
              badGuy.name + " got hit with a missle, their health is down to"
            );
            console.log((badGuy.hull += -10));
            myMissles[myMissles.length] = "o";
            myMissles.splice(0, 1);
            victory(badGuy); 
          } else {
            console.log(
              "%c awwww .... raaaattttssssssssssss...... you are out of missles switch to lasers",
              "background:lightskyblue; color:black; font-size:18px;"
            );
         
            console.log(
              "%c ..... it is still your turn now captian enter your move below ..... ",
              "background:lightskyblue; color:red; font-size:22px;"
            );
          }
        } else {
          console.log(
            "%c Awww hamburgers... You missed",
            "background:lightgray; color:red;"
          );
          victory(badGuy); //// you missed but that was your turn they get to shoot at you now
        }
      } else {
        console.log(
          "%c What are you shooting at ? dead aliens or the wrong target - choose another target or refresh the page to play again",
          "background:black; color:white; font-size:20px;"
        );
        console.log(
          "%c ..... Your turn now captian enter your move below ..... ",
          "background:lightskyblue; color:black; font-size:20px"
        ); //// if you target a dead alien or .... does not count as turn - could be typo
      }
    } else {
      console.log("you are dead refresh the game to play again"); ///// if your hull is less than 1 and you are trying to attack still
    }
  }
  laser(badGuy) {
    if (this.hull >= 1) {
      //////attack with lasers if you are still alive ... /// ... following logic similiar to missle but no array to access for shot count since lasers are unlimited currently....
      if (badGuy.name === badGuys[0].name) {
        if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
          /// above random to determine if hit or not roughly 80% sucess rate
          this.talkSas();
          console.log(
            this.name +
              " used laser " +
              this.weapons.lasers +
              " hitpoints dealt"
          );
          console.log(
            badGuy.name +
              " got hit with your - S - lasers, their health is down to"
          );
          console.log((badGuy.hull += -this.weapons.lasers));
          victory(badGuy);
        } else {
          console.log(
            "%c Oh dang it dang it dang it.... that shot was close but unfortunately you missed ",
            "background:lightskyblue; color:white; font-size:20px;"
          );
          victory(badGuy);
        }
      } else {
        console.log(
          "%c You are shooting dead aliens - choose another target or refresh the page to play again",
          "background:black; color:white; font-size:20px;"
        );
        console.log(
          "%c ..... it is still your turn now captian enter your move below ..... ",
          "background:lightskyblue; color:black; font-size:20px;"
        );
      }
    } else {
      console.log("you are dead reset the game refresh the page to play again");
  }
}

let youHero = new Hero(" USS Schwarzenegger ");
class Alienship {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3; 
    this.firepower = Math.floor(Math.random() * 3) + 2; 
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    this.weapons = {
      lazers: Math.floor(Math.random() * 3) + 2, 
      mizzle: 7
    };
    this.catchPhrases = [
      "Puny humans you are no match for us!",
      "- Feel our alien wrath! ",
      `- How deep do you want to get probed huumoonnn? `,
      `- You are no match for our superior alien technology and intellect! `,
      `- Garp grrizzrr fluffn halftry schmoop! - what you thought they only spoke English? `,
      `- KLAATU BARADA NIKTO - what you thught that was just a movie? `,
      `- Not bad, for a huumooon ... now taste our wrath!`,
      `- Hope you like the taste of lazzzzerszzzssss huumoonnn...`,
      `- Jerry charge the mizzles and tell those dum huumons we come in peace so they let us just kill them !`,
      `- Put some butter and jelly on yourself huumon. You are now Toast ! `
    ];
  }
  talkSmack() {
    let rIp = this.catchPhrases[
      Math.floor(Math.random() * this.catchPhrases.length)
    ];
    console.log(this.name + " says " + rIp);
  }
  announceHealth() {
    console.log(
      "We are the " + this.name + " our shields are now " + this.hull
    );
  }
  fight(youHero) {
    if (this.name === badGuys[0].name) {
      if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
        this.talkSmack();
        console.log(
          this.name + " used lazer " + this.weapons.lazers + " hitpoints dealt"
        );
        console.log(
          "%c ........ take that huumooonns! .......",
          "backgroundcolor:darkgreen; color:white;"
        );
        console.log(
          "%c We got hit by alien lazers with a z  our hull power is down to the tiny number on the next line... ",
          "background:lightskyblue; color:black; font-size:15px;"
        );
        console.log((youHero.hull -= this.firepower));
        defeat(youHero); 
      } else {
        console.log(this.name + " can not hit the side of a barn. Lucky us!"); 
        console.log(
          "good those alien scumbags missed us " +
            youHero.name +
            "took no damage. Hull power at " +
            youHero.hull
        );
        defeat(youHero); 
      }
    } else {
      console.log("dead aliens can't shoot"); 
      //return to your move
      defeat(youHero);
    }
  }
  
  attack(youHero) {
    if (this.name === badGuys[0].name) {
      if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
        this.talkSmack();
        console.log(
          this.name +
            " used  mizzlez with a z dealing 7 hit points to you ship.."
        );
        console.log(
          youHero.name +
            " got hit with an alien Z * mizzle, their health is down to"
        );
        console.log((youHero.hull += -7)); 
        defeat(youHero); 
      } else {
        console.log(this.name + "  can not hit the side of a barn"); 
        console.log(
          "Ha! those aliens shoot like stormtroopers " +
            youHero.name +
            "took no damage. Hull power  =  " +
            youHero.hull
        ); 
        defeat(youHero); 
    } else {
      console.log("dead aliens can't shoot"); /
      //return to your move
      defeat(youHero);
    }
  }
}



let badGuys = [];


badGuys.unshift((al6 = new Alienship("AL #6")));
badGuys.unshift((al5 = new Alienship("AL #5")));
badGuys.unshift((al4 = new Alienship("AL #4")));
badGuys.unshift((al3 = new Alienship("AL #3")));
badGuys.unshift((al2 = new Alienship("AL #2")));
badGuys.unshift((al1 = new Alienship("AL #1")));


console.log(
  " %c........ Welcome to the Space Battle! You are captian of the USS Schwarzenegger - and there are 7 evil alien ships headed to destroy Earth! ........ ",
  "font-size: 15px; background:black; border: 2px solid red; color:white;"
);
console.log("......You must blow them all up to win the game..... ");
console.log(
  "......You have unlimited lasers (weak) to fire but a limited number of missles (strong) you can fire..... "
);
console.log(
  "......The future has problems though someone spilled orange juice on the targeting computer you will make around 80% of you shots..... "
);
console.log(
  "......The future has some bright spots also your amazing pilot will dodge some attacks and the aliens targeting computer will only make around 50% of their shots..... "
);
console.log(
  "......Remember if you are getting whooped you can have your engineers search online for a way to fix your hull but only twice...... "
);
console.log(
  "......your ship is below check it out before you get started cilck the arrow...... "
);
console.log(youHero);
console.log(
  "......your ship" +
    youHero.name +
    "has just left the moons orbit on its way to Kiber 7 for a ping pong tournament when...... "
);
console.log(
  "%c......Beep Beep Beep Boop 'warning aliens detected ' Beep Beep Beep Boop......",
  "background: lightyellow; color:red; font-size:12px;"
);
console.log(
  "......There are 6 alien ships on our scanners Captian and I don't think they are friendly...... "
);
console.log(
  "......You can see the scanner results below by clicking on the little arrow beside the (6) [Alienship, Alienship, ....] on the above line or a few lines up depending on your screen size it's right under the yellow beep warning...... "
);
console.log(badGuys);
console.log(
  "......Brace yourselves they are charging weapons and they are opening fire...... "
);
al1.fight(youHero); 
