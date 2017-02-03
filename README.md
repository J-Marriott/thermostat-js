### Thermostat: Javascript

```
Specification:

Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
```

####User Stories

```
As the user
So that the house is a comfortable temp
I'd like the thermostat to automatically start at 20 degrees
```

```
As the user
So I can adjust the temperature when I am too cold
I would like to be able to increase the temperature
```

```
As the user
So I can adjust the temperature when I'm too hot
I would like to be able to decrease the temperature
```

```
As the user
To avoid the house becoming too cold and the pipes freezing
I would like to set a minimum temperature of 10 degrees
```

```
As the bill payer
So that I don't waste too much money
I would like a power saving mode on by default that limits temp max to 25 degrees
```

```
As a couch potato
So that I am never even slightly cold
I would like to be able to turn power saving off to increase the max to 32 degrees.
```

```
As the user
So I can easily set the temperature
I would like to be able to reset the thermostat to 20 degrees
```

```
As the bill payer
So I can see how much energy is being used
I would like the thermostat to provide colour coded current energy usage
```

#####Diagramming completed with Peter Grant-Hay (Github: Putterhead)
>>>>>>> day-four
<img src="http://imgur.com/qPXbAM4.png"></img>
