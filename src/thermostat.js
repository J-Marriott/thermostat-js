'use strict'

function Thermostat () {
    this.MINIMUM_TEMP = 10;
    this._temp = 20;
    this.powerSaveStatus = true;
    this.max_temp = 25;
};

var thermostat = new Thermostat()

Thermostat.prototype.getCurrentTemp = function () {
    return this._temp
};
Thermostat.prototype.increase = function () {
    if (!this.isMaximumTemp()) {
        this._temp += 1;
    }
};
Thermostat.prototype.decrease = function () {
    if (!this.isMinimumTemp()) {
        this._temp -= 1;
    }
};
Thermostat.prototype.isMinimumTemp = function () {
    return this._temp === this.MINIMUM_TEMP;
};
Thermostat.prototype.isMaximumTemp = function () {
    return this._temp === this.max_temp;
}
Thermostat.prototype.isPowerSave = function () {
    return this.powerSaveStatus;
};
Thermostat.prototype.powerSaveOff = function () {
    this.max_temp = 32
    this.powerSaveStatus = false;
};
Thermostat.prototype.powerSaveOn = function () {
    this.max_temp = 25
    this.powerSaveStatus = true;
};
Thermostat.prototype.reset = function () {
  this._temp = 20;
}
