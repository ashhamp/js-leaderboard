var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

// YOUR CODE HERE

function Team(name, rank, wins, losses) {
  this.name = name;
  this.rank = rank;
  this.wins = 0;
  this.losses = 0;
}

var gamesArray = gameInfo();

var findTeamByName = function(teamArray, teamName) {
  for (var i = 0; i < teamArray.length; i++) {
    var teamObject = teamArray[i];
    if (teamObject.name === teamName) {
      return teamObject;
    }
  }
  return false;
}

var allTeams = function(games) {
  var teams = [];

  for (var i = 0; i < games.length; i++) {
    var homeTeamName = games[i].home_team;
    var awayTeamName = games[i].away_team;

    if (!findTeamByName(teams, homeTeamName)) {
      teams.push(new Team(homeTeamName));
    }

    if (!findTeamByName(teams, awayTeamName)) {
      teams.push(new Team(awayTeamName));
    }
  }

  return teams;
}

var teamData = allTeams(gamesArray);

var winsAndLosses = function(games, teams) {
  for(var i = 0; i < games.length; i++) {
    for(var x = 0; x < teams.length; x++) {
      var homeTeamName = games[i].home_team;
      var awayTeamName = games[i].away_team;
      var teamName = teams[x].name;
      var homeScore = games[i].home_score;
      var awayScore = games[i].away_score;
      if (teamName === homeTeamName) {
        if (homeScore > awayScore) {
          teams[x].wins += 1;
        } else {
          teams[x].losses += 1;
        }
      } else if (teamName === awayTeamName) {
          if (awayScore > homeScore) {
            teams[x].wins += 1;
          } else {
            teams[x].losses += 1;
          }
        }

    }
  }
}

winsAndLosses(gamesArray, teamData);


teamData.sort(function(a, b) {
  return  b.wins - a.wins;
})

var setRanks = function(teams) {
  for(var i = 0; i < teams.length; i++) {
    teams[i].rank = i + 1;
  }
}

setRanks(teamData);

// function to format output - WIP
// var printer = function(teams) {
// var string = "----------------------------------\n";
// string += "| Name     Rank     Total Wins   Total Losses |\n"
// for(var i = 0; i < teams.length; i++) {
// string += "| " + teams[i].name + "  " + teams[i].rank + "        " + teams[i].wins + "          " + teams[i].losses + "      |\n"
// }
// console.log(string);
// }
