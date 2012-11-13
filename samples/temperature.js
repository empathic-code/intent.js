var iAnticipateThat = require('../lib/index');
var fig = require('../tests/figurant.js')

// Dependent-On Component
var thermometer = function (currentTemperature, desiredTemperature) {
	return (currentTemperature >= desiredTemperature);
};

// System under Test
var thermostat = function (desiredTemperature, sensor, thermometer) {
	var temperature = sensor(); // 1.
	if(temperature === desiredTemperature) {
		return 0;
	}
	if(thermometer(temperature, desiredTemperature)) { // 2.
		return -1;
	}
	return 1;
};

var hot = 40;
var cold = 10;
var roomTemperature = 21;

iAnticipateThat(thermometer, {
	'tells me whether something is hot' : { in: [hot, roomTemperature], out: true },
	'tells me whether something is cold' : { in: [cold, roomTemperature], out: false }
});

iAnticipateThat(thermostat, {
	'should increase temperature if it is cold.' : { in: [roomTemperature, fig.give(cold), thermometer], out: 1 },
	'should decrease temperature if it is hot.' : { in: [roomTemperature, fig.give(hot), thermometer], out: -1 },
	'should not do anything if temperature ok.' : { in: [roomTemperature, fig.give(roomTemperature), thermometer], out: 0},
});

// 1. Here a stub is required to give indirect input into the system under test
// 2. Here a mock is can be used to record the indirect outputs of the system under test