/*
Tournament Winner

There's an algorithms tournament taking place in which teams of programmers 
compete against each other to solve aalgorithmic problems as fast as possible. Teams
compete in a round robin, where each team faces off against all other teams. Only two
teams compete against each other at a time, and for each competition, one team is 
designated the home team, while the other team is the away team. In each competition
there's always one winner and one loser; there are no ties. A team receives 3 points 
if it wins and 0 points if it loses. The winner of the tournament is the team that
receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other 
and an array containing the results of each competition, write a function that returns 
the winner of the tournament. The input arrays are named competitions and results, 
respectively. The competitions array has elements in the form of [homeTeam, awayTeam],
where each team is a string of at most 30 characters representing the name of the team. 
The results array contains information about the winner of each corresponding 
competition in the competitions array. Specifically, results[i] denotes the winner of 
competitions[i], where a 1 in the results array means that the home team in the 
corresponding competition won and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will
compete against all other teams exactly once. It's also guaranteed that the tournament
will always have at least two teams

example:
elements structure = [homeTeam, awayTeam]
competitions = [
  ['HTML', 'C#'], <-
  ['C#', 'Python'],
  ['Python', 'HTML'] 
]
           |
           V
results = [0, 0, 1] => 0 : the away team won, 1 : the home team won

hash = {}
*/

// time = O (n) | space = O (k) <- number of different teams
const tournamentWinner = (competitions, results) => {
  // init a hash table to keep track of points
  let hash = {};
  let mostPoints = 0;
  let winner = '';
  // iterate through the competitions
  competitions.forEach((match, i) => {
    let homeTeam = match[0];
    let awayTeam = match[1];
    if (hash[awayTeam] && results[i] === 0) {
      hash[awayTeam] += 3;
    } else if (hash[homeTeam] && results[i] === 1) {
      hash[homeTeam] += 3;
    } else {
      if (results[i] === 0) {
        hash[awayTeam] = 3;
      } else {
        hash[homeTeam] = 3;
      }
    }
  });
  for (let key in hash) {
    if (hash[key] > mostPoints) {
      mostPoints = hash[key];
      winner = key;
    }
  }
  return winner;
};

const tournamentWinnerRefactor = (competition, results) => {
  let currentBestTeam = '';
  let scores = { [currentBestTeam]: 0 }; // <- needs currentBestTeam needs to have brackets to that the compiler can retreive the value for currentBestTeam

  competition.forEach((match, i) => {
    let result = results[i];
    let [homeTeam, awayTeam] = match;

    let winningTeam = result === 1 ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  });
  return currentBestTeam;
};

const updateScores = (team, points, scores) => {
  if (!scores[team]) {
    scores[team] = 0;
  }
  scores[team] += points;
};

let competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];
let results = [0, 0, 1];
console.log(tournamentWinnerRefactor(competitions, results));
