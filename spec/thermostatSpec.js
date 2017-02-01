'use strict'

describe('Thermostat', function() {
    var thermostat

    beforeEach(function() {
        thermostat = new Thermostat();
    });
    it('It starts at 20 degrees - default temp', function() {
        expect(thermostat.getCurrentTemp()).toEqual(20)
    });
    it('increases the temperature', function() {
        thermostat.increase();
        expect(thermostat.getCurrentTemp()).toEqual(21)
    });
    it('decreases the temperature', function() {
        thermostat.decrease();
        expect(thermostat.getCurrentTemp()).toEqual(19)
    });
    it('prevents minimum temperature below 10 degrees', function() {
        for (var i = 0; i <= 10; i++) {
            thermostat.decrease();
        }
        expect(thermostat.getCurrentTemp()).toEqual(10);
    });
    it('Default setting of power saving mode sets max temperature to 25 degrees', function() {
        expect(thermostat.isPowerSave()).toBe(true);
    });
    it('Can switch power saving mode on or off', function() {
        thermostat.powerSaveOff();
        expect(thermostat.isPowerSave()).toBe(false);
        thermostat.powerSaveOn();
        expect(thermostat.isPowerSave()).toBe(true);
    });
});

describe('When power saving mode - on', function() {
  it('prevents maximum temperature above 25 degrees', function(){
    for (var i=0; i<=5; i++) {
      thermostat.increase();
    }
    expect(thermostat.getCurrentTemp()).toEqual(25);
  });
});
