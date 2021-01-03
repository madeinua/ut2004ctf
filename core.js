var data = document.getElementById('data');

    data.innerHTML = 'Loading............';

    var buff = '',
		players = getPlayers(),
		allGames = getGames(),
		games = [],
		gameLocation;
		
	for (var i in allGames) {
	
		gameLocation = typeof allGames[i].location === 'undefined' ? 'EU' : allGames[i].location;
	
		if (gameLocation === gamesLocation) {
			games.push(allGames[i]);
		}
	}

    var getSortedKeys = function(obj) {

        var keys = Object.keys(obj);

        return keys.sort(function(a, b) {
            return obj[b] - obj[a];
        });
    };

    var getMaxInArray = function(arr, key) {

        var max = 0,
            val;

        for (var i in arr) {

            if (typeof key === 'undefined') {
                val = arr[i];
            } else {
                val = arr[i][key];
            }

            if (val > max) {
                max = val;
            }
        }

        return max;
    };

    var calculateTeamTotalElo = function(team) {

        var sum = 0;

        for (var k in team) {
            sum += players[team[k]];
        }

        return sum;
    };

    var isRedTeamPlayer = function(game, playerName) {

        for (var k in game.red) {
            if (game.red[k] === playerName) {
                return true;
            }
        }

        return false;
    };

    var isBlueTeamPlayer = function(game, playerName) {

        for (var k in game.blue) {
            if (game.blue[k] === playerName) {
                return true;
            }
        }

        return false;
    };

    var playedGames = [],
        darkHorses = [],
        playerMapStats = [],
        winRates = [],
        minDarkHorseDay = 30,
        minDarkHorseTs = Math.ceil((new Date().getTime()) - minDarkHorseDay * 60 * 60 * 24 * 1000),
        scores = [];

    for (i in players) {

        darkHorses[i] = 0;
        playedGames[i] = 0;

        playerMapStats[i] = {
            wins: [],
            played: []
        };

        winRates[i] = {
            wins: 0,
            loses: 0,
            avg: 0
        };

        scores[i] = 1000;
    }

    var getPlayerEloInGame = function(playerName, game, gameNum) {

        var oldElo = players[playerName],
            myTeamScore,
            opTeamScore,
            myTeamElo,
            opTeamElo,
            isWin,
            date = new Date(game.date.split('.').reverse().join('-')).getTime(),
            teamDiff,
            bonus;

        if (typeof players[playerName] === "undefined") {
            alert('Unknow player ' + playerName);
        }

        if (isRedTeamPlayer(game, playerName)) {
            myTeamScore = game.redScore;
            opTeamScore = game.blueScore;
            myTeamElo = calculateTeamTotalElo(game.red);
            opTeamElo = calculateTeamTotalElo(game.blue);
        } else {
            myTeamScore = game.blueScore;
            opTeamScore = game.redScore;
            myTeamElo = calculateTeamTotalElo(game.blue);
            opTeamElo = calculateTeamTotalElo(game.red);
        }

        isWin = myTeamScore > opTeamScore;

        if (typeof playerMapStats[playerName].played[game.map] === 'undefined') {
            playerMapStats[playerName].played[game.map] = 0;
            playerMapStats[playerName].wins[game.map] = 0;
        }

        playerMapStats[playerName].played[game.map] += 1;
        playerMapStats[playerName].wins[game.map] += isWin ? 1 : -1;

        ++playedGames[playerName];

        teamDiff = Math.max(myTeamElo, opTeamElo) / Math.min(myTeamElo, opTeamElo);
        teamDiff = teamDiff * 100 - 100;
        teamDiff = teamDiff < 1 ? 1 : teamDiff;
        teamDiff = isWin && myTeamElo > opTeamElo ? 1 : teamDiff;
        teamDiff = !isWin && opTeamElo > myTeamElo ? 1 : teamDiff;

        bonus = (isWin ? 1 : -1) * teamDiff * 2;

        if (isWin && bonus > 4 && date >= minDarkHorseTs) {
            darkHorses[playerName]++;
        }

        if (isRedTeamPlayer(game, playerName)) {
            if (game.redScore > game.blueScore) {
                ++winRates[playerName].wins;
            } else {
                ++winRates[playerName].loses;
            }
        } else {
            if (game.blueScore > game.redScore) {
                ++winRates[playerName].wins;
            } else {
                ++winRates[playerName].loses;
            }
        }

        // Apply fixes to the player score
        if (typeof game.fixes !== 'undefined') {
		    for (var f in game.fixes) {
                if (game.fixes[f][0] === playerName) {
                    bonus += game.fixes[f][1];
                }
            }
        }

        return oldElo + bonus;
    };

    var updateTeamsEloInGame = function(gameNum) {

        var game = games[gameNum],
            playersInGame = game.red.concat(game.blue),
            eloResults = [];

        for (var i in playersInGame) {
            eloResults[playersInGame[i]] = getPlayerEloInGame(playersInGame[i], game, gameNum);
        }

        for (var playerName in eloResults) {
            players[playerName] = eloResults[playerName];
        }
    };

    var getPlayerScore = function(game, playerName) {

        var myTeamScore,
            opTeamScore,
            myTeamElo,
            opTeamElo,
            isWin,
            bonus;

        if (isRedTeamPlayer(game, playerName)) {
            myTeamScore = game.redScore;
            opTeamScore = game.blueScore;
            myTeamElo = calculateTeamTotalElo(game.red);
            opTeamElo = calculateTeamTotalElo(game.blue);
        } else {
            myTeamScore = game.blueScore;
            opTeamScore = game.redScore;
            myTeamElo = calculateTeamTotalElo(game.blue);
            opTeamElo = calculateTeamTotalElo(game.red);
        }

        var teamDiff = opTeamElo - myTeamElo,
            isWin = myTeamScore > opTeamScore;

        if (isWin) {
            if (teamDiff < 1) {
                bonus = 1;
            } else {
                bonus = 1 + (teamDiff * teamDiff) / (10 * Math.max(myTeamElo, opTeamElo));
            }
        } else {
            bonus = 0;
        }

        return bonus;
    };

    var updatePlayersScores = function(game, players) {

        var playersInGame = game.red.concat(game.blue);

        for (var i in playersInGame) {
            scores[playersInGame[i]] += getPlayerScore(game, playersInGame[i]);
        }
    };

    for (i in games) {
	
		if (typeof games[i].fixes !== 'undefined') {
		
			var fixes = games[i].fixes;
		
			for (var f in fixes) {
			
				var found = false;
				
				for (var p in players) {
					if (p === fixes[f][0]) {
						found = true;
					}
				}
				
				if (!found) {
					alert('Unknown player ' + fixes[f][0]);
				}
			}
		}
	
        updateTeamsEloInGame(i);
        updatePlayersScores(games[i], players);
    }

    var sortedPlayers = getSortedKeys(players);

    for (i in winRates) {
        winRates[i].avg = Math.ceil((winRates[i].wins / (winRates[i].wins + winRates[i].loses)) * 100);
    }

    var facts = {},
        redWins = 0,
        blueWins = 0,
        lastMap;

    // calculate red/blue %
    for (i in games) {
        if (games[i].redScore > games[i].blueScore) {
            ++redWins;
        } else {
            ++blueWins;
        }
    }

    // calculate win/lose streak
    var winningStreak = [],
        losingStreak = [],
        j;

    for (i in players) {
        winningStreak[i] = {current: 0, max: 0};
        losingStreak[i] = {current: 0, max: 0};
    }

    for (i in games) {

        var gamePlayers = games[i].red.concat(games[i].blue);

        for (j in gamePlayers) {

            var playerName = gamePlayers[j],
                redWin = games[i].redScore > games[i].blueScore,
                isRedPlayer = games[i].red.includes(playerName);

            if ((redWin && isRedPlayer) || (!redWin && !isRedPlayer)) {

                if (++winningStreak[playerName].current > winningStreak[playerName].max) {
                    winningStreak[playerName].max = winningStreak[playerName].current;
                }

                losingStreak[playerName].current = 0;

            } else {

                if (++losingStreak[playerName].current > losingStreak[playerName].max) {
                    losingStreak[playerName].max = losingStreak[playerName].current;
                }

                winningStreak[playerName].current = 0;
            }
        }

        lastMap = games[i];
    }

    var bestWinningStreak = 0,
        bestWinningStreakPlayer;

    for (i in winningStreak) {
        if (winningStreak[i].max > bestWinningStreak) {
            bestWinningStreak = winningStreak[i].max;
            bestWinningStreakPlayer = i;
        }
    }

    var worstLosingStreak = 0,
        worstLosingStreakPlayer;

    for (i in losingStreak) {
        if (losingStreak[i].max > worstLosingStreak) {
            worstLosingStreak = losingStreak[i].max;
            worstLosingStreakPlayer = i;
        }
    }

    facts.redWinRate = (redWins / (blueWins + redWins)) * 100;

    var darkHorseValue = 0,
        darkHorsePlayer;

    for (i in darkHorses) {

        var current = playedGames[i] > 0 ? darkHorses[i] / playedGames[i] : 0;

        if (current > darkHorseValue) {
            darkHorsePlayer = i;
            darkHorseValue = current;
        }
    }

    var bestMaps = [],
        worstMaps = [],
        mapsStats = [];

    for (playerName in playerMapStats) {

        var totalPlayed = 0;

        for (mapName in playerMapStats[playerName].played) {
            totalPlayed += playerMapStats[playerName].played[mapName];
        }

        mapsStats[playerName] = [];

        for (mapName in playerMapStats[playerName].wins) {
            if (playerMapStats[playerName].played[mapName] >= Math.max(2, totalPlayed * 0.05)) {
                mapsStats[playerName][mapName] = playerMapStats[playerName].wins[mapName] / playerMapStats[playerName].played[mapName];
            }
        }
    }

    for (playerName in mapsStats) {

        var keys = getSortedKeys(mapsStats[playerName]);

        if (keys[0] !== keys[keys.length - 1]) {
            bestMaps[playerName] = keys[0];
            worstMaps[playerName] = keys[keys.length - 1];
        }
    }

    var maxRating = getMaxInArray(players),
        maxScore = getMaxInArray(scores),
        maxWins = getMaxInArray(winRates, 'wins');

    // calculate active players
    var activePlayersDates = [],
		playersTimestamps = [];
		
	var savePlayerTs = function (playerName) {
		
		var index = playersTimestamps.indexOf(playerName);
			
		if (index > -1) {
			playersTimestamps.splice(index, 1);
		}
		
		playersTimestamps.push(playerName);
	};

    for (i in games) {

        var gamePlayers = games[i].red.concat(games[i].blue);

        for (j in gamePlayers) {

            var playerName = gamePlayers[j];

            if (typeof activePlayersDates[playerName] === 'undefined') {
                activePlayersDates[playerName] = 0;
            }

            activePlayersDates[playerName] = games[i].date;
			
			savePlayerTs(playerName);
        }
    }

    var activePlayers = [],
        minActivePlayersDays = 60,
        minActivePlayersTs = Math.ceil((new Date().getTime()) - minActivePlayersDays * 60 * 60 * 24 * 1000);

    for (i in activePlayersDates) {

        var apdate = new Date(activePlayersDates[i].split('.').reverse().join('-')).getTime();
		
        if (apdate > minActivePlayersTs) {
            activePlayers.push(i);
        }
    }
	
	playersTimestamps.reverse();
	
    buff = '';

    buff += '<p><label for="showActiveOnly" style="cursor:pointer;"><input type="checkbox" id="showActiveOnly" checked="checked" /> Show active players only (who have played in the last ' + minActivePlayersDays + ' days).</label></p>';

    buff += '<table id="ranksTable" class="tablesorter" style="max-width: 1000px;">'
        + '<thead><tr>'
        + '<th>Rank</th>'
        + '<th>Name</th>'
        + '<th>Rating</th>'
        + '<th>Score</th>'
        + '<th>Wins</th>'
        + '<th>Loses</th>'
        + '<th>Wins</th>'
        + '<th>Best map</th>'
        + '<th>Worst map</th>'
        + '</tr></thead><tbody>';

    var line = 1;

    for (i in sortedPlayers) {

        var playerName = sortedPlayers[i];

        buff += '<tr' + (activePlayers.includes(playerName) ? '' : ' style="display:none;" class="inactive"') + '>';
        buff += '<td>' + line + '</td>';
        buff += '<td>' + playerName + '</td>';
        buff += '<td' + (maxRating === players[playerName] ? ' style="background-color: #65f1ff;"' : '') + '><strong>' + Math.ceil(players[playerName]) + '</strong></td>';
        buff += '<td' + (maxScore === scores[playerName] ? ' style="background-color: #ffe377;"' : '') + '>' + Math.ceil(scores[playerName]) + '</td>';
        buff += '<td' + (maxWins === winRates[playerName].wins ? ' style="background-color: #ffe377;"' : '') + '>' + winRates[playerName].wins + '</td>';
        buff += '<td>' + winRates[playerName].loses + '</td>';
        buff += '<td>' + winRates[playerName].avg + '%</td>';
        buff += '<td>' + (typeof bestMaps[playerName] === 'undefined' || bestMaps[playerName] === null ? '?' : bestMaps[playerName]) + '</td>';
        buff += '<td>' + (typeof worstMaps[playerName] === 'undefined' || worstMaps[playerName] === null ? '?' : worstMaps[playerName]) + '</td>';
        buff += '</tr>';

        if (activePlayers.includes(playerName)) {
            line++;
        }
    }

    buff += '</tbody></table>';

    buff += '<br /><i>Last update: ' + lastMap.date + '</i><br /><br />';

    buff += '<br /><h4>Facts</h4>';
    buff += '<p>Overall matches played: <b>' + games.length + '</b></p>';
    buff += '<p>Overall, Red - Blue win-rate is <b>' + Math.ceil(facts.redWinRate) + '% - ' + (100 - Math.ceil(facts.redWinRate)) + '%</b></p>';
    buff += '<p>Best winning streak has player <b>' + bestWinningStreakPlayer + '</b> (' + bestWinningStreak + ')</p>';
    buff += '<p>Worst losing streak has player <b>' + worstLosingStreakPlayer + '</b> (' + worstLosingStreak + ')</p>';
    buff += '<p>Dark horse: <b>' + (typeof darkHorsePlayer === 'undefined' ? 'nobody atm' : darkHorsePlayer) + '</b></p>';

    buff += '<br /><h4>Rank/ratings calculation rules:</h4>';
    buff += 'Player new rating = [Player old rating] + W * K<br />'
        + 'W = 1 (if player won the map) or -1 (if player lose the map)<br />'
        + 'K = floating coefficient depending on the difference in team ratings: higher rating of your team than the opponent team -> lower the coefficient; Lower rating of your team -> higher the coefficient.<br /><br />';

    buff += '<br /><h4>Scores calculation rules:</h4>';
    buff += '- Each player starts with the same score (1000).<br />';
    buff += '- If a player wins the match, it gets X points, depending on the difference between the elo-ranks of both teams in the match.<br />';
    buff += '- If a player loses the match, it remains with the same score as before.<br />';

    var mapsGames = [];

    for (i in games) {

        if (typeof mapsGames[games[i].map] === 'undefined') {
            mapsGames[games[i].map] = 0;
        }

        ++mapsGames[games[i].map];
    }

    var sortedMapsGames = getSortedKeys(mapsGames);

    buff += '<br /><h4>Maps</h4>';

    buff += '<table style="border: #ccc solid 1px; border-collapse: collapse;">'
        + '<tbody><tr>'
        + '<th style="border: #ccc solid 1px; padding: 5px 10px;">Name</th>'
        + '<th style="border: #ccc solid 1px; padding: 5px 10px;">Games</th>'
        + '</tr></tbody>';

    for (i in sortedMapsGames) {
        buff += '<tr>';
        buff += '<td style="border: #ccc solid 1px; padding: 5px 10px; text-align: right;">' + sortedMapsGames[i] + '</td>';
        buff += '<td style="border: #ccc solid 1px; padding: 5px 10px;">' + mapsGames[sortedMapsGames[i]] + '</td>';
        buff += '</tr>';
    }

    buff += '</table><br /><br />';

    // teams info
    var findGames = function() {

        var teams = [];

        for (var t = 0; t < 2; t++) {

            teams[t] = [];

            for (var p = 0; p < 5; p++) {

                var v = document.getElementsByClassName('player-' + t + '-' + p)[0].value.trim();

                if (v.length) {
                    teams[t].push(v);
                }
            }
        }

        var matchedGames = [],
            matchesWins = 0,
            totalElo = [];

        for (var i in games) {

            var game = games[i],
                match = true;

            for (var t = 0; t < 2; t++) {
                for (var p in teams[t]) {
                    if (t === 0) {
                        if (!isRedTeamPlayer(game, teams[t][p])) {
                            match = false;
                        }
                    } else if (!isBlueTeamPlayer(game, teams[t][p])) {
                        match = false;
                    }
                }
            }

            if (match) {

                matchedGames.push(game);

                if (game.redScore > game.blueScore) {
                    matchesWins++;
                }

                continue;
            }

            var match2 = true;

            for (var t = 0; t < 2; t++) {
                for (var p in teams[t]) {
                    if (t === 0) {
                        if (!isBlueTeamPlayer(game, teams[t][p])) {
                            match2 = false;
                        }
                    } else if (!isRedTeamPlayer(game, teams[t][p])) {
                        match2 = false;
                    }
                }
            }

            if (match2) {

                matchedGames.push(game);

                if (game.blueScore > game.redScore) {
                    matchesWins++;
                }
            }
        }

        for (var t = 0; t < 2; t++) {

            totalElo[t] = 0;

            for (var p in teams[t]) {
                totalElo[t] += players[teams[t][p]];
            }
        }

        var txt = '';

        txt += '<br /><br />Found ' + matchedGames.length + ' games.<br />';

        if (matchesWins > 0) {
            txt += 'Team #1 won ' + matchesWins + ' of ' + matchedGames.length + ' games agains Team #2 in these games.<br />';
        }

        txt += 'Team #1 ELO: ' + Math.ceil(totalElo[0]) + '<br />Team #2 ELO: ' + Math.ceil(totalElo[1]) + '<br />';
        txt += '<br />';

        for (var g in matchedGames) {
            var game = matchedGames[g];
            txt += '<div>[' + game.date + '] <strong>' + game.map + '</strong> ' + game.redScore + ':' + game.blueScore + '</div>';
            txt += '<div style="font-style: italic; font-size: 14px;">'
            for (var p in game.red) {
                txt += ' <span style="color: red;">' + game.red[p] + '</span> ';
            }
            txt += ' vs ';
            for (var p in game.red) {
                txt += ' <span style="color: blue;">' + game.blue[p] + '</span> ';
            }
            txt += '</div><br />';
        }

        document.getElementById('findGamesResult').innerHTML = txt;
    };

    var balanceTeams = function() {

        var bPlayers = [];

        for (var t = 0; t < 2; t++) {
            for (var p = 0; p < 5; p++) {

                var playerName = document.getElementsByClassName('player-' + t + '-' + p)[0].value.trim();

                if (playerName.length) {
                    bPlayers.push({
                        id: playerName,
                        strength: players[playerName]
                    });
                }
            }
        }

        if (bPlayers.length !== 10) {
            alert('Add 10 different players');
            return;
        }

        function compareStrength(a, b) { // for sorting players and selections
            return a.strength - b.strength;
        }

        function teamStrength(players1) {
            return players1.reduce(function(total, player) {
                return total + player.strength;
            }, 0);
        }

        function selectionStrength(players1, selection) {
            return players1.reduce(function(total, player, index) {
                return total + player.strength * selection[index];
            }, 0);
        }

        function nextPermutation(selection) { // reverse-lexicographical next permutation of a bit array
            var max = true, pos = selection.length, set = 1;
            while(pos-- && (max || !selection[pos])) if (selection[pos]) ++set; else max = false;
            if (pos < 0) return false;
            selection[pos] = 0;
            while(++pos < selection.length) selection[pos] = set-- > 0 ? 1 : 0;
            return true;
        }

        function swapPlayers(wTeam, sTeam, wSelect, sSelect) {
            for (var i = 0, j = 0; i < wSelect.length; i++) {
                if (wSelect[i]) {
                    while(!sSelect[j]) ++j;
                    var temp = wTeam[i];
                    wTeam[i] = sTeam[j];
                    sTeam[j++] = temp;
                }
            }
        }

        function equalTeams(players1) {
            // SORT PLAYERS FROM WEAKEST TO STRONGEST
            players1.sort(compareStrength);
            // INITIAL DISTRIBUTION OF PLAYERS INTO WEAKER AND STRONGER TEAM (ALTERNATING)
            var wTeam = [], sTeam = [];
            for (var i = players1.length % 2; i < players1.length; i += 2) {
                wTeam.push(players1[i]);
                sTeam.push(players1[i + 1]);
            }
            var teamSize = wTeam.length;
            // CALCULATE INITIAL STRENGTH DIFFERENCE
            var initDiff = teamStrength(sTeam) - teamStrength(wTeam);
            var bestDiff = initDiff;
            var wBestSel = [], sBestSel = [];
            // CHECK SELECTIONS OF EVERY SIZE
            for (var selSize = 1; selSize < teamSize && bestDiff > 1; selSize++) {
                var wSelections = [], sSelections = [], selection = [];
                // CREATE INITIAL SELECTION BIT-ARRAY FOR WEAKER TEAM (SKIP PLAYER 1)
                for (var i = 0; i < teamSize; i++)
                    selection[i] = (i > 0 && i <= selSize) ? 1 : 0;
                // STORE ALL SELECTIONS FROM WEAKER TEAM AND THEIR STRENGTH
                do wSelections.push({selection: selection.slice(), strength: selectionStrength(wTeam, selection)});
                while(nextPermutation(selection));
                // SORT SELECTIONS FROM WEAKEST TO STRONGEST
                wSelections.sort(compareStrength);
                // CREATE INITIAL SELECTION BIT-ARRAY FOR STRONGER TEAM
                for (var i = 0; i < teamSize; i++)
                    selection[i] = (i < selSize) ? 1 : 0;
                // STORE ALL SELECTIONS FROM STRONGER TEAM AND THEIR STRENGTH
                do sSelections.push({selection: selection.slice(), strength: selectionStrength(sTeam, selection)});
                while(nextPermutation(selection));
                // SORT SELECTIONS FROM WEAKEST TO STRONGEST
                sSelections.sort(compareStrength);
                // ITERATE OVER SELECTIONS FROM BOTH TEAMS
                var wPos = 0, sPos = 0;
                while(wPos < wSelections.length && sPos < sSelections.length) {
                    // CALCULATE STRENGTH DIFFERENCE IF THESE SELECTIONS WERE SWAPPED
                    var wStrength = wSelections[wPos].strength, sStrength = sSelections[sPos].strength;
                    var diff = Math.abs(initDiff - 2 * (sStrength - wStrength));
                    // SET NEW BEST STRENGTH DIFFERENCE IF SMALLER THAN CURRENT BEST
                    if (diff < bestDiff) {
                        bestDiff = diff;
                        wBestSel = wSelections[wPos].selection.slice();
                        sBestSel = sSelections[sPos].selection.slice();
                        // STOP SEARCHING IF PERFECT SOLUTION FOUND (DIFFERENCE 0 OR 1)
                        if (bestDiff < 2) break;
                    }
                    // ADVANCE TO NEXT SELECTION FROM WEAKER OR STRONGER TEAM
                    if (2 * (sStrength - wStrength) > initDiff) ++wPos; else ++sPos;
                }
            }
            // PERFORM SWAP OF BEST PAIR OF SELECTIONS FROM EACH TEAM
            swapPlayers(wTeam, sTeam, wBestSel, sBestSel);
            return {teams: [wTeam, sTeam], strengths: [teamStrength(wTeam), teamStrength(sTeam)]};
        }

        var result = equalTeams(bPlayers);

        if (!result || result.strengths[0] === 0) {
            alert('Sorry. Not now :(');
            return;
        }

        for (var t in result.teams) {
            for (var p in result.teams[t].reverse()) {
                document.getElementsByClassName('player-' + t + '-' + p)[0].value = result.teams[t][p].id;
            }
        }

        findGames();
    };

    var getSelect = function(t, p) {

        var txt = '<select class="player-' + t + '-' + p + '">';

        txt += '<option value="">- Any -</option>';
		
		

        for (var p in playersTimestamps) {
            txt += '<option value="' + playersTimestamps[p] + '">' + playersTimestamps[p] + '</option>';
        }

        txt += '</select>';

        return txt;
    };

    buff += '<h4>Analytics</h4>';

    for (var t = 0; t < 2; t++) {

        buff += '<p>Team #' + (t + 1) + '</p>';

        for (var p = 0; p < 5; p++) {
            buff += getSelect(t, p) + '&nbsp;';
        }

        buff += '<br />';
    }

    buff += '<br /><input type="button" value="Find games" onclick="findGames();" />';
    buff += '<input type="button" value="Balance teams" onclick="balanceTeams();" style="margin-left: 250px;" />';
    buff += '<br /><div id="findGamesResult"></div>';

    buff += '<br /><br /><br />';

    data.innerHTML = buff;

    jQuery('#ranksTable').tablesorter({
        theme: 'blue'
    });

    $('#showActiveOnly').on('change', function(event) {

        if (event.target.checked) {
            $('#ranksTable tr.inactive').hide();
        } else {
            $('#ranksTable tr').show();
        }

        var line = 1;

        $('#ranksTable tr td:first-child').each(function() {

            if (event.target.checked && $(this).parent().hasClass('inactive')) {
                return;
            }

            $(this).html(line++);
        });
    });