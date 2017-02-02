$(document).ready(function() {
    updateTemperature();
    updatePowerSaveStatus();

    $('#temperature-up').click(function() {
        thermostat.increase();
        updateTemperature();
    });

    $('#temperature-down').click(function() {
        thermostat.decrease();
        updateTemperature();
    });

    $('#temperature-reset').click(function() {
        thermostat.reset();
        updateTemperature();
    });

    $('#powersaving-on').click(function() {
        thermostat.powerSaveOn();
        updateTemperature();
        updatePowerSaveStatus();
    });

    $('#powersaving-off').click(function() {
        thermostat.powerSaveOff();
        updatePowerSaveStatus();
    });

    function updateTemperature() {
        $('#currenttemp').text('Current temp ' + thermostat.getCurrentTemp());
        $('#currenttemp').attr('class', thermostat.energyUsage());
    }

    function updatePowerSaveStatus() {
        if (thermostat.powerSaveStatus == true) {
            var psNow = 'YES'
        } else {
            var psNow = 'NO'
        }
        $('#powersave').text('PowerSave? ' + psNow);
    }

});
