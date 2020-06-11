function getPlayers() {
	
	var players = [];

    players['Gooz'] = 2000;
	players['Koffee'] = 2000;
	players['MVDE'] = 2000;
	players['mnt'] = 1950;
    players['simson'] = 1950;
    players['TT-Tolyan'] = 1900;
    players['ImitatoR'] = 1900;
    players['Maldito'] = 1850;
	players['j'] = 1800;
	players['Sonic'] = 1800;
    players['chitrox'] = 1800;
    players['Hodor'] = 1800;
    players['pr!x'] = 1800;
	players['Small'] = 1800;
	players['pepper'] = 1750;
    players['Alter'] = 1750;
    players['Cold-M'] = 1750;
    players['Rigel'] = 1750;
    players['Loox'] = 1700;
    players['what'] = 1700;
    players['MoRoZ'] = 1650;
	players['Krnki'] = 1650;
    players['Forsiets'] = 1600;
    players['WG'] = 1600;
	players['Thoums'] = 1550;
	players['zazuza'] = 1500;
    players['Bad_Bond'] = 1500;
	
	return players;
}

function getGames() {
	
	var games = [];

	games.push({
		'red': ['TT-Tolyan', 'MVDE', 'Alter', 'chitrox', 'Maldito'],
		'blue': ['Gooz', 'Cold-M', 'Loox', 'pr!x', 'ImitatoR'],
		'redScore': 1,
		'blueScore': 6,
		'map': 'Grendelkeep',
		'date': '02.05.2020'
	});

	games.push({
		'red': ['Alter', 'MVDE', 'TT-Tolyan', 'chitrox', 'Maldito'],
		'blue': ['Gooz', 'Cold-M', 'pr!x', 'ImitatoR', 'Loox'],
		'redScore': 2,
		'blueScore': 1,
		'map': 'Pistola',
		'date': '02.05.2020'
	});

	games.push({
		'red': ['MVDE', 'ImitatoR', 'TT-Tolyan', 'Maldito', 'chitrox'],
		'blue': ['Gooz', 'mnt', 'Cold-M', 'Loox', 'pr!x'],
		'redScore': 7,
		'blueScore': 2,
		'map': 'Vault',
		'date': '02.05.2020'
	});

	games.push({
		'red': ['TT-Tolyan', 'Maldito', 'ImitatoR', 'chitrox', 'MVDE'],
		'blue': ['mnt', 'pr!x', 'Gooz', 'Cold-M', 'Loox'],
		'redScore': 1,
		'blueScore': 0,
		'map': 'Orbital',
		'date': '02.05.2020'
	});

	games.push({
		'red': ['MVDE', 'TT-Tolyan', 'ImitatoR', 'Maldito', 'chitrox'],
		'blue': ['pr!x', 'mnt', 'Gooz', 'Cold-M', 'Loox'],
		'redScore': 4,
		'blueScore': 0,
		'map': 'Archanastre',
		'date': '02.05.2020'
	});

	games.push({
		'red': ['TT-Tolyan', 'Cold-M', 'mnt', 'Gooz', 'pr!x'],
		'blue': ['Koffee', 'WG', 'MVDE', 'chitrox', 'ImitatoR'],
		'redScore': 2,
		'blueScore': 3,
		'map': 'Virility',
		'date': '07.05.2020'
	});

	games.push({
		'red': ['mnt', 'Gooz', 'TT-Tolyan', 'Cold-M', 'pr!x'],
		'blue': ['MVDE', 'ImitatoR', 'Koffee', 'WG', 'chitrox'],
		'redScore': 6,
		'blueScore': 4,
		'map': 'Grendelkeep',
		'date': '07.05.2020'
	});

	games.push({
		'red': ['mnt', 'Gooz', 'TT-Tolyan', 'Cold-M', 'pr!x'],
		'blue': ['MVDE', 'ImitatoR', 'Koffee', 'WG', 'chitrox'],
		'redScore': 1,
		'blueScore': 9,
		'map': 'Anfractuous',
		'date': '07.05.2020'
	});

	games.push({
		'red': ['mnt', 'Gooz', 'TT-Tolyan', 'Cold-M', 'pr!x'],
		'blue': ['MVDE', 'ImitatoR', 'Koffee', 'WG', 'chitrox'],
		'redScore': 7,
		'blueScore': 4,
		'map': 'Ages',
		'date': '07.05.2020'
	});

	games.push({
		'red': ['mnt', 'Gooz', 'TT-Tolyan', 'Cold-M', 'pr!x'],
		'blue': ['MVDE', 'ImitatoR', 'Koffee', 'WG', 'chitrox'],
		'redScore': 3,
		'blueScore': 4,
		'map': 'Archanastre',
		'date': '07.05.2020'
	});

	games.push({
		'red': ['mnt', 'Rigel', 'chitrox', 'ImitatoR', 'Cold-M'],
		'blue': ['Gooz', 'TT-Tolyan', 'MoRoZ', 'WG', 'Maldito'],
		'redScore': 7,
		'blueScore': 2,
		'map': 'Grendelkeep',
		'date': '09.05.2020'
	});

	games.push({
		'red': ['mnt', 'Rigel', 'chitrox', 'ImitatoR', 'Cold-M'],
		'blue': ['MVDE', 'TT-Tolyan', 'MoRoZ', 'WG', 'Maldito'],
		'redScore': 4,
		'blueScore': 3,
		'map': 'Archanastre',
		'date': '09.05.2020'
	});

	games.push({
		'red': ['mnt', 'Rigel', 'chitrox', 'ImitatoR', 'Cold-M'],
		'blue': ['MVDE', 'TT-Tolyan', 'MoRoZ', 'WG', 'Maldito'],
		'redScore': 4,
		'blueScore': 5,
		'map': 'Anfractuous',
		'date': '09.05.2020'
	});
	
	games.push({
		'red': ['mnt', 'Rigel', 'chitrox', 'ImitatoR', 'Cold-M'],
		'blue': ['MVDE', 'TT-Tolyan', 'MoRoZ', 'WG', 'Maldito'],
		'redScore': 4,
		'blueScore': 1,
		'map': 'Vault',
		'date': '09.05.2020'
	});

	games.push({
		'red': ['mnt', 'Rigel', 'chitrox', 'ImitatoR', 'Cold-M'],
		'blue': ['MVDE', 'TT-Tolyan', 'MoRoZ', 'WG', 'Maldito'],
		'redScore': 4,
		'blueScore': 3,
		'map': 'Virility',
		'date': '09.05.2020'
	});

	games.push({
		'red': ['mnt', 'Rigel', 'chitrox', 'ImitatoR', 'MoRoZ'],
		'blue': ['MVDE', 'TT-Tolyan', 'Cold-M', 'WG', 'Maldito'],
		'redScore': 3,
		'blueScore': 4,
		'map': 'Pistola',
		'date': '09.05.2020'
	});

	games.push({
		'red': ['mnt', 'Rigel', 'chitrox', 'ImitatoR', 'MoRoZ'],
		'blue': ['MVDE', 'TT-Tolyan', 'Cold-M', 'WG', 'Maldito'],
		'redScore': 1,
		'blueScore': 0,
		'map': 'Vault',
		'date': '09.05.2020'
	});

	games.push({
		'red': ['Koffee', 'pepper', 'Cold-M', 'mnt', 'Maldito'],
		'blue': ['pr!x', 'TT-Tolyan', 'ImitatoR', 'MVDE', 'chitrox'],
		'redScore': 5,
		'blueScore': 7,
		'map': 'Vault',
		'date': '11.05.2020'
	});

	games.push({
		'red': ['Koffee', 'pepper', 'Cold-M', 'mnt', 'Maldito'],
		'blue': ['pr!x', 'TT-Tolyan', 'ImitatoR', 'MVDE', 'chitrox'],
		'redScore': 2,
		'blueScore': 9,
		'map': 'Grendelkeep',
		'date': '11.05.2020'
	});

	games.push({
		'red': ['Koffee', 'pepper', 'Cold-M', 'mnt', 'Maldito'],
		'blue': ['pr!x', 'TT-Tolyan', 'ImitatoR', 'MVDE', 'chitrox'],
		'redScore': 2,
		'blueScore': 5,
		'map': 'Virility',
		'date': '11.05.2020'
	});

	games.push({
		'red': ['Koffee', 'pepper', 'Cold-M', 'mnt', 'Maldito'],
		'blue': ['pr!x', 'TT-Tolyan', 'ImitatoR', 'MVDE', 'chitrox'],
		'redScore': 3,
		'blueScore': 4,
		'map': 'Archanastre',
		'date': '11.05.2020'
	});

	games.push({
		'red': ['mnt', 'MVDE', 'WG', 'Cold-M', 'chitrox'],
		'blue': ['pr!x', 'TT-Tolyan', 'ImitatoR', 'Koffee', 'simson'],
		'redScore': 5,
		'blueScore': 1,
		'map': 'Grendelkeep',
		'date': '14.05.2020'
	});

	games.push({
		'red': ['mnt', 'MVDE', 'WG', 'Cold-M', 'chitrox'],
		'blue': ['pr!x', 'TT-Tolyan', 'ImitatoR', 'Sonic', 'simson'],
		'redScore': 5,
		'blueScore': 2,
		'map': 'Archanastre',
		'date': '14.05.2020'
	});

	games.push({
		'red': ['pr!x', 'Hodor', 'Gooz', 'WG', 'ImitatoR'],
		'blue': ['MVDE', 'TT-Tolyan', 'Cold-M', 'Maldito', 'chitrox'],
		'redScore': 4,
		'blueScore': 5,
		'map': 'Anfractuous',
		'date': '16.05.2020'
	});

	games.push({
		'red': ['pr!x', 'Hodor', 'Gooz', 'WG', 'ImitatoR'],
		'blue': ['MVDE', 'TT-Tolyan', 'Cold-M', 'Maldito', 'chitrox'],
		'redScore': 5,
		'blueScore': 4,
		'map': 'Grendelkeep',
		'date': '16.05.2020'
	});
	
	games.push({
		'red': ['pr!x', 'Hodor', 'Gooz', 'WG', 'ImitatoR'],
		'blue': ['MVDE', 'TT-Tolyan', 'Cold-M', 'Maldito', 'chitrox'],
		'redScore': 1,
		'blueScore': 6,
		'map': 'Vault',
		'date': '16.05.2020'
	});

	games.push({
		'red': ['pr!x', 'Hodor', 'Gooz', 'WG', 'ImitatoR'],
		'blue': ['MVDE', 'TT-Tolyan', 'Cold-M', 'Maldito', 'chitrox'],
		'redScore': 3,
		'blueScore': 4,
		'map': 'Archanastre',
		'date': '16.05.2020'
	});

	games.push({
		'red': ['TT-Tolyan', 'ImitatoR', 'Cold-M', 'pr!x', 'Loox'],
		'blue': ['MVDE', 'chitrox', 'Forsiets', 'Koffee', 'WG'],
		'redScore': 4,
		'blueScore': 3,
		'map': 'Archanastre',
		'date': '19.05.2020'
	});
	
	games.push({
		'red': ['TT-Tolyan', 'ImitatoR', 'Cold-M', 'Koffee', 'Loox'],
		'blue': ['MVDE', 'chitrox', 'Forsiets', 'pr!x', 'WG'],
		'redScore': 4,
		'blueScore': 0,
		'map': 'Pistola',
		'date': '19.05.2020'
	});

	games.push({
		'red': ['TT-Tolyan', 'ImitatoR', 'Cold-M', 'pr!x', 'Loox'],
		'blue': ['MVDE', 'chitrox', 'Forsiets', 'Koffee', 'WG'],
		'redScore': 5,
		'blueScore': 4,
		'map': 'Anfractuous',
		'date': '19.05.2020'
	});

	games.push({
		'red': ['TT-Tolyan', 'ImitatoR', 'Cold-M', 'pr!x', 'Loox'],
		'blue': ['MVDE', 'chitrox', 'Forsiets', 'Koffee', 'WG'],
		'redScore': 7,
		'blueScore': 4,
		'map': 'Vault',
		'date': '19.05.2020'
	});
	
	games.push({
		'red': ['Cold-M', 'mnt', 'Gooz', 'Hodor', 'WG'],
		'blue': ['MVDE', 'chitrox', 'TT-Tolyan', 'ImitatoR', 'Maldito'],
		'redScore': 2,
		'blueScore': 7,
		'map': 'Anfractuous',
		'date': '23.05.2020'
	});

	games.push({
		'red': ['TT-Tolyan', 'mnt', 'Gooz', 'Hodor', 'WG'],
		'blue': ['MVDE', 'chitrox', 'Cold-M', 'ImitatoR', 'Maldito'],
		'redScore': 2,
		'blueScore': 4,
		'map': 'Archanastre',
		'date': '23.05.2020'
	});
	
	games.push({
		'red': ['TT-Tolyan', 'mnt', 'Gooz', 'Hodor', 'WG'],
		'blue': ['MVDE', 'chitrox', 'Cold-M', 'ImitatoR', 'Maldito'],
		'redScore': 9,
		'blueScore': 1,
		'map': 'Grendelkeep',
		'date': '23.05.2020'
	});

	games.push({
		'red': ['MVDE', 'mnt', 'Maldito', 'chitrox', 'Forsiets'],
		'blue': ['TT-Tolyan', 'Gooz', 'Cold-M', 'ImitatoR', 'WG'],
		'redScore': 6,
		'blueScore': 5,
		'map': 'Vault',
		'date': '23.05.2020'
	});

	games.push({
		'red': ['MVDE', 'mnt', 'Maldito', 'chitrox', 'Forsiets'],
		'blue': ['TT-Tolyan', 'Gooz', 'Cold-M', 'ImitatoR', 'WG'],
		'redScore': 4,
		'blueScore': 3,
		'map': 'Virility',
		'date': '23.05.2020'
	});

	games.push({
		'red': ['MVDE', 'pr!x', 'Loox', 'Koffee', 'Thoums'],
		'blue': ['mnt', 'Gooz', 'Cold-M', 'Bad_Bond', 'what'],
		'redScore': 7,
		'blueScore': 0,
		'map': 'Archanastre',
		'date': '24.05.2020'
	});

	games.push({
		'red': ['MVDE', 'pr!x', 'what', 'Koffee', 'Thoums'],
		'blue': ['mnt', 'Gooz', 'Cold-M', 'Bad_Bond', 'Loox'],
		'redScore': 6,
		'blueScore': 2,
		'map': 'Grendelkeep',
		'date': '24.05.2020'
	});

	games.push({
		'red': ['Cold-M', 'Koffee', 'chitrox', 'Thoums', 'ImitatoR'],
		'blue': ['MVDE', 'TT-Tolyan', 'Rigel', 'simson', 'Loox'],
		'redScore': 2,
		'blueScore': 6,
		'map': 'Archanastre',
		'date': '26.05.2020'
	});

	games.push({
		'red': ['Cold-M', 'Koffee', 'chitrox', 'Loox', 'ImitatoR'],
		'blue': ['MVDE', 'TT-Tolyan', 'Rigel', 'simson', 'Thoums'],
		'redScore': 1,
		'blueScore': 4,
		'map': 'Virility',
		'date': '26.05.2020'
	});

	games.push({
		'red': ['Gooz', 'Koffee', 'Rigel', 'Loox', 'Thoums'],
		'blue': ['MVDE', 'TT-Tolyan', 'ImitatoR', 'chitrox', 'Cold-M'],
		'redScore': 5,
		'blueScore': 7,
		'map': 'Vault',
		'date': '26.05.2020'
	});

	games.push({
		'red': ['Gooz', 'Koffee', 'Rigel', 'Loox', 'Thoums'],
		'blue': ['MVDE', 'TT-Tolyan', 'ImitatoR', 'chitrox', 'Cold-M'],
		'redScore': 5,
		'blueScore': 6,
		'map': 'Grendelkeep',
		'date': '26.05.2020'
	});

	games.push({
		'red': ['MVDE', 'Cold-M', 'Thoums', 'chitrox', 'ImitatoR'],
		'blue': ['Gooz', 'Loox', 'pr!x', 'Koffee', 'Krnki'],
		'redScore': 0,
		'blueScore': 7,
		'map': 'Grendelkeep',
		'date': '28.05.2020'
	});

	games.push({
		'red': ['MVDE', 'pr!x', 'Thoums', 'chitrox', 'ImitatoR'],
		'blue': ['Gooz', 'Loox', 'Cold-M', 'Koffee', 'Krnki'],
		'redScore': 1,
		'blueScore': 2,
		'map': 'Ages',
		'date': '28.05.2020'
	});

	games.push({
		'red': ['MVDE', 'pr!x', 'Thoums', 'chitrox', 'ImitatoR'],
		'blue': ['Gooz', 'Loox', 'Cold-M', 'Koffee', 'Krnki'],
		'redScore': 0,
		'blueScore': 7,
		'map': 'Archanastre',
		'date': '28.05.2020'
	});

	games.push({
		'red': ['MVDE', 'Gooz', 'Thoums', 'chitrox', 'Rigel'],
		'blue': ['TT-Tolyan', 'ImitatoR', 'Cold-M', 'Koffee', 'Krnki'],
		'redScore': 3,
		'blueScore': 4,
		'map': 'Vault',
		'date': '28.05.2020'
	});

	games.push({
		'red': ['MVDE', 'TT-Tolyan', 'ImitatoR', 'chitrox', 'Cold-M'],
		'blue': ['Gooz', 'Small', 'Thoums', 'Koffee', 'Rigel'],
		'redScore': 5,
		'blueScore': 0,
		'map': 'Virility',
		'date': '28.05.2020'
	});

	games.push({
		'red': ['MVDE', 'ImitatoR', 'chitrox', 'MoRoZ', 'WG'],
		'blue': ['Gooz', 'TT-Tolyan', 'Cold-M', 'Maldito', 'Forsiets'],
		'redScore': 6,
		'blueScore': 4,
		'map': 'Vault',
		'date': '30.05.2020'
	});

	games.push({
		'red': ['MVDE', 'ImitatoR', 'chitrox', 'MoRoZ', 'WG'],
		'blue': ['Gooz', 'TT-Tolyan', 'Cold-M', 'Maldito', 'Forsiets'],
		'redScore': 3,
		'blueScore': 4,
		'map': 'Grendelkeep',
		'date': '30.05.2020'
	});
	
	games.push({
		'red': ['MVDE', 'ImitatoR', 'chitrox', 'MoRoZ', 'WG'],
		'blue': ['Gooz', 'TT-Tolyan', 'Cold-M', 'Maldito', 'Forsiets'],
		'redScore': 0,
		'blueScore': 3,
		'map': 'Pistola',
		'date': '30.05.2020'
	});

	games.push({
		'red': ['MVDE', 'ImitatoR', 'chitrox', 'MoRoZ', 'WG'],
		'blue': ['Gooz', 'TT-Tolyan', 'Cold-M', 'Maldito', 'Forsiets'],
		'redScore': 2,
		'blueScore': 3,
		'map': 'Archanastre',
		'date': '30.05.2020'
	});

	games.push({
		'red': ['MVDE', 'ImitatoR', 'chitrox', 'MoRoZ', 'WG'],
		'blue': ['Gooz', 'TT-Tolyan', 'Cold-M', 'Maldito', 'Forsiets'],
		'redScore': 2,
		'blueScore': 3,
		'map': 'Virility',
		'date': '30.05.2020'
	});
	
	games.push({
		'red': ['MVDE', 'ImitatoR', 'chitrox', 'MoRoZ', 'WG'],
		'blue': ['Gooz', 'TT-Tolyan', 'Cold-M', 'Maldito', 'Forsiets'],
		'redScore': 2,
		'blueScore': 3,
		'map': 'Virility',
		'date': '02.06.2020'
	});
	
	games.push({
		'red': ['MVDE', 'pr!x', 'Cold-M', 'Thoums', 'j'],
		'blue': ['Gooz', 'mnt', 'ImitatoR', 'chitrox', 'Rigel'],
		'redScore': 0,
		'blueScore': 7,
		'map': 'Grendelkeep',
		'date': '02.06.2020'
	});

	games.push({
		'red': ['MVDE', 'pr!x', 'Cold-M', 'Rigel', 'j'],
		'blue': ['Gooz', 'mnt', 'ImitatoR', 'chitrox', 'Thoums'],
		'redScore': 4,
		'blueScore': 5,
		'map': 'Vault',
		'date': '02.06.2020'
	});

	games.push({
		'red': ['mnt', 'Gooz', 'pr!x', 'Cold-M', 'Thoums'],
		'blue': ['TT-Tolyan', 'Koffee', 'ImitatoR', 'chitrox', 'Rigel'],
		'redScore': 5,
		'blueScore': 6,
		'map': 'Vault',
		'date': '03.06.2020'
	});

	games.push({
		'red': ['mnt', 'Gooz', 'pr!x', 'Cold-M', 'Thoums'],
		'blue': ['TT-Tolyan', 'Koffee', 'ImitatoR', 'chitrox', 'Rigel'],
		'redScore': 3,
		'blueScore': 9,
		'map': 'Grendelkeep',
		'date': '03.06.2020'
	});
	
	games.push({
		'red': ['mnt', 'Gooz', 'pr!x', 'Cold-M', 'Thoums'],
		'blue': ['TT-Tolyan', 'Koffee', 'ImitatoR', 'chitrox', 'Rigel'],
		'redScore': 2,
		'blueScore': 3,
		'map': 'Archanastre',
		'date': '03.06.2020'
	});

	games.push({
		'red': ['mnt', 'Gooz', 'pr!x', 'Cold-M', 'Thoums'],
		'blue': ['TT-Tolyan', 'Koffee', 'ImitatoR', 'chitrox', 'Rigel'],
		'redScore': 2,
		'blueScore': 1,
		'map': 'Ages',
		'date': '03.06.2020'
	});

	games.push({
		'red': ['MVDE', 'Gooz', 'chitrox', 'Maldito', 'Thoums'],
		'blue': ['TT-Tolyan', 'Koffee', 'ImitatoR', 'Cold-M', 'Loox'],
		'redScore': 3,
		'blueScore': 1,
		'map': 'Grendelkeep',
		'date': '05.06.2020'
	});

	games.push({
		'red': ['ImitatoR', 'Gooz', 'chitrox', 'Hodor', 'Thoums'],
		'blue': ['TT-Tolyan', 'MVDE', 'Maldito', 'Cold-M', 'Loox'],
		'redScore': 2,
		'blueScore': 3,
		'map': 'Anfractuous',
		'date': '05.06.2020'
	});

	games.push({
		'red': ['ImitatoR', 'Gooz', 'chitrox', 'Hodor', 'Thoums'],
		'blue': ['TT-Tolyan', 'MVDE', 'Maldito', 'Cold-M', 'Loox'],
		'redScore': 2,
		'blueScore': 4,
		'map': 'Vault',
		'date': '05.06.2020'
	});

	games.push({
		'red': ['MVDE', 'TT-Tolyan', 'chitrox', 'Cold-M', 'Thoums'],
		'blue': ['mnt', 'j', 'Krnki', 'pr!x', 'WG'],
		'redScore': 5,
		'blueScore': 4,
		'map': 'Grendelkeep',
		'date': '07.06.2020'
	});

	games.push({
		'red': ['MVDE', 'TT-Tolyan', 'chitrox', 'Cold-M', 'Thoums'],
		'blue': ['mnt', 'j', 'Krnki', 'pr!x', 'WG'],
		'redScore': 5,
		'blueScore': 3,
		'map': 'Sulphur',
		'date': '07.06.2020'
	});

	games.push({
		'red': ['MVDE', 'pr!x', 'Krnki', 'Koffee', 'Thoums'],
		'blue': ['mnt', 'j', 'Gooz', 'chitrox', 'Loox'],
		'redScore': 3,
		'blueScore': 4,
		'map': 'Grendelkeep',
		'date': '08.06.2020'
	});

	games.push({
		'red': ['MVDE', 'pr!x', 'Koffee', 'TT-Tolyan', 'Thoums'],
		'blue': ['mnt', 'Gooz', 'ImitatoR', 'chitrox', 'Cold-M'],
		'redScore': 6,
		'blueScore': 5,
		'map': 'Grendelkeep',
		'date': '09.06.2020'
	});
	
	games.push({
		'red': ['MVDE', 'pr!x', 'Koffee', 'TT-Tolyan', 'Thoums'],
		'blue': ['mnt', 'Gooz', 'ImitatoR', 'chitrox', 'Cold-M'],
		'redScore': 1,
		'blueScore': 4,
		'map': 'Anfractuous',
		'date': '09.06.2020'
	});

	games.push({
		'red': ['MVDE', 'Gooz', 'pepper', 'TT-Tolyan', 'Cold-M'],
		'blue': ['mnt', 'Koffee', 'ImitatoR', 'chitrox', 'Rigel'],
		'redScore': 2,
		'blueScore': 5,
		'map': 'Virility',
		'date': '09.06.2020'
	});

	games.push({
		'red': ['MVDE', 'Gooz', 'pepper', 'TT-Tolyan', 'Cold-M'],
		'blue': ['mnt', 'Koffee', 'ImitatoR', 'chitrox', 'Rigel'],
		'redScore': 5,
		'blueScore': 4,
		'map': 'Archanastre',
		'date': '09.06.2020'
	});

	games.push({
		'red': ['MVDE', 'Koffee', 'pepper', 'chitrox', 'Krnki'],
		'blue': ['mnt', 'TT-Tolyan', 'Gooz', 'Cold-M', 'j'],
		'redScore': 4,
		'blueScore': 6,
		'map': 'Grendelkeep',
		'date': '10.06.2020'
	});
	
	games.push({
		'red': ['MVDE', 'Koffee', 'pepper', 'chitrox', 'Krnki'],
		'blue': ['mnt', 'TT-Tolyan', 'Gooz', 'Cold-M', 'j'],
		'redScore': 1,
		'blueScore': 6,
		'map': 'Vault',
		'date': '10.06.2020'
	});
	
	games.push({
		'red': ['Gooz', 'Koffee', 'j', 'chitrox', 'zazuza'],
		'blue': ['MVDE', 'mnt', 'TT-Tolyan', 'pepper', 'Cold-M'],
		'redScore': 0,
		'blueScore': 4,
		'map': 'Archanastre',
		'date': '10.06.2020'
	});
	
	games.push({
		'red': ['Gooz', 'Koffee', 'j', 'chitrox', 'Cold-M'],
		'blue': ['MVDE', 'mnt', 'TT-Tolyan', 'pepper', 'zazuza'],
		'redScore': 5,
		'blueScore': 1,
		'map': 'Virility',
		'date': '11.06.2020'
	});
	
	return games;
}