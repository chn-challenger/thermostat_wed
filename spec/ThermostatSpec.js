describe("Thermostat",function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("when created",function() {

    it("has a starting temperature of 20 degress",function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("powersaving mode is on",function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe("can turn powersaving on and off",function() {

    it("turning powersaving off",function() {
      thermostat.switchPowerSaving();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it("turning powersaving back on",function() {
      thermostat.switchPowerSaving();
      thermostat.switchPowerSaving();
      expect(thermostat.powerSavingMode).toBe(true);
    });

  });

  describe("can change the temperature",function() {

    it("incresae temperature by 1 degree",function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it("decrease temperature by 1 degree",function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it("has a minimum temperature of 10 degrees",function() {
      for(i = 1; i < 12; i++){
        thermostat.decreaseTemperature();
      };
      expect(thermostat.temperature).toEqual(10);
    });

    it("max temperature of 25 degree when power saving mode is on",function() {
      for(i=1;i<7;i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.temperature).toEqual(25);
    });

    it("max temperature of 32 degree when power saving mode is off",function() {
      thermostat.switchPowerSaving();
      for(i = 1; i < 14; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe("can reset temperature",function() {
    it("to 20 degrees",function() {
      thermostat.switchPowerSaving();
      for(i = 1; i < 9; i++){
        thermostat.increaseTemperature();
      };
      thermostat.resetTemperature();
      // reset everything
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("has corresponding color schemes",function() {
    it("is green when less than 18 degrees",function() {
      for(i = 1; i < 8; i++){
        thermostat.decreaseTemperature();
      };
      expect(thermostat.colour()).toEqual("green");
    })

    it("is red when greater than 25 degrees",function() {
      thermostat.switchPowerSaving();
      for(i = 1; i < 20; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.colour()).toEqual("red");
    });

    it("is yellow when between 18 and 25 degrees",function() {
      expect(thermostat.colour()).toEqual("blue");
    });

  });

});
