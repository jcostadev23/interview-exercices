/*
Exercise: Manage Soccer Games
Implement a class called GameManager to manage soccer games. The class should allow the following:

Add games by specifying the names of the teams. Example: Porto, Benfica.
Update the goals of a specific game.
Check who is winning a game.
List all games with their respective results.
To show in the page for example.

*/

const allGames = {
  key: {
    team1: "benfica",
    team1Goals: 0,
    team2: "porto",
    team1Goals: 0,
  },
  key1: {
    sporting: 0,
    maritimo: 0,
  },
};

const allGames2 = [
  {
    team1: "benfica",
    team1Goals: 0,
    team2: "porto",
    team1Goals: 0,
  },
];

addGolo("jogo1", "benfica");

whoIsWinning("jogo1");

class GameManager {
  constructor() {
    this.allGames = {};
  }

  addGames(game, team1, team2) {
    this.allGames[game].team1 = { name: team1, score: 0 };
    this.allGames[game].team2 = { name: team2, score: 0 };
  }

  addGolo(game, team) {
    this.allGames[game][team] = ++this.allGames[game][team];
  }

  getWiner() {}
}

const games = new GameManager();

games.addGames("jogo1", "benfica", "porto");
