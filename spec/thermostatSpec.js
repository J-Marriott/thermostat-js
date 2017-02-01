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
    it('Can reset the temperature to 20 degrees from any setting', function() {
        thermostat.increase();
        thermostat.reset();
        expect(thermostat.getCurrentTemp()).toEqual(20);

    })
});

describe('When power saving mode - on', function() {
    it('prevents maximum temperature above 25 degrees', function() {
        for (var i = 0; i <= 5; i++) {
            thermostat.increase();
        }
        expect(thermostat.getCurrentTemp()).toEqual(25);

    });
});
describe('When power saving mode - off', function() {
    it('prevents maximum temperature above 32 degrees', function() {
        thermostat.powerSaveOff();
        for (var i = 0; i <= 13; i++) {
            thermostat.increase();
        }
        expect(thermostat.getCurrentTemp()).toEqual(32);

    });
});

describe('displaying usage levels', function() {
    var thermostat

    beforeEach(function() {
        thermostat = new Thermostat();
    });
    describe('when temperature setting below 18 degrees', function() {
        it('returns low-usage', function() {
            for (var i = 0; i <= 2; i++) {
                thermostat.decrease();
            }
            expect(thermostat.energyUsage()).toEqual('low-usage');
        });
    });
    describe('when temperature setting above 18 and below 25 degrees', function() {
        it('returns medium-usage', function() {
            expect(thermostat.energyUsage()).toEqual('medium-usage');
        });
    });
    describe('when temperature setting above 25 degrees', function() {
        it('returns high-usage', function() {
            thermostat.powerSaveOff();
            for (var i = 0; i <= 6; i++) {
                thermostat.increase();
            }
            expect(thermostat.energyUsage()).toEqual('high-usage');
        });
    });
});
