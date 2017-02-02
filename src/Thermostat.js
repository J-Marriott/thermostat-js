'use strict'

function Thermostat () {
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    this.MAX_TEMP_POWERSAVE = 25;
    this.MAX_TEMP_NO_POWERSAVE = 32;
    this.MEDIUM_ENERGY_USE_LIMIT = 18;
    this.max_temp = 25;
    this.powerSaveStatus = true;
    this._temp = 20;
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
    this.max_temp = this.MAX_TEMP_NO_POWERSAVE
    this.powerSaveStatus = false;
};
Thermostat.prototype.powerSaveOn = function () {
    this.max_temp = this.MAX_TEMP_POWERSAVE
    if(this._temp > this.MAX_TEMP_POWERSAVE) {
      this._temp = this.MAX_TEMP_POWERSAVE;
    }
    this.powerSaveStatus = true;

};
Thermostat.prototype.reset = function () {
  this._temp = this.DEFAULT_TEMP;
}
Thermostat.prototype.energyUsage = function () {
  if (this._temp < this.MEDIUM_ENERGY_USE_LIMIT) {
    return 'low-usage';
  }
  else if (this._temp >= this.MEDIUM_ENERGY_USE_LIMIT && this._temp <= this.MAX_TEMP_POWERSAVE) {
    return 'medium-usage';
  } else {
  return 'high-usage';
}
};
