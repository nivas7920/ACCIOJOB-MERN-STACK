let arr = [2, 1, 6, 3, 9];
console.log(
  arr.forEach((value, index, array) => {
    value *= 2;
    array[index] = value;
    console.log(value, index, array);
  })
);
console.log({ arr });

//map

arr = [2, 2, 9, 0, 10];
let squaredArr = arr.map((value, index, array) => {
  return value * value;
});

console.log({ squaredArr });

/* Practice Question */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    // loop over players and display their id and scores
    this.players.forEach((value) => {
      console.log(value.id + " " + value.scores);
    });
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
    let newPlayer = { id: id, scores: [] };
    this.players.push(newPlayer);
    
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    for (let player of this.players) {
      if (player.id == id) {
        player.scores.push(score);
        return;
      }
    }
  },

  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
    for (let i of this.players) {
      let sum = 0;
      let count = 0;
      let avg = 0;
      if (i.id == id) {
        for (let j of i.scores) {
          sum = sum + j;
          count++;
        }
        avg = sum / count;
        return avg.toFixed(2);
      }
    }
  },

  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
    let teamAvg = 0;
    let count = 0;
    let sum = 0;
    for (let k of this.players) {
      for (let l of k.scores) {
        sum = sum + l;
      }
      count = count + k.scores.length;
    }
    teamAvg = sum / count;
    return teamAvg;
  },
};

team.addPlayers(2);
team.addPlayers(3);
// team.addPlayers(4);
// team.addPlayers(5);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);
// team.addScore(4, 138);
// team.addScore(4, 183);
// team.addScore(5, 58);
// team.addScore(5, 219);
team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67
console.log("average score of player 3 - " + team.averageScore(3)); // => 100/2 = 50.00
// console.log("average score of player 4 - " + team.averageScore(4)); // => 321/2 = 160.50
// console.log("average score of player 5 - " + team.averageScore(5)); // => 277/2 = 138.50
console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57
