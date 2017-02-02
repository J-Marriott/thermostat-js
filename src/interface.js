$(document).ready(function() {
    updateTemperature();
    updatePowerSaveStatus();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=Doncaster&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp + ' degrees celsius');
    });
    $('#current-city').change(function() {
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp + ' degrees celsius')
      });
    });

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
