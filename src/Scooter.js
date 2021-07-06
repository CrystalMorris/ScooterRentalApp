const Station = require("./Station")

class Scooter{
    static idNum = 1
    constructor(location){
        this.id = Scooter.idNum
        this.status = "Ready"
        this.location = location
        this.batteryLevel = 100
        Scooter.idNum++
        for(const element of Station.stations){
            if(element.stationName === location){
                element.scooters.push(this)
            }
        }
    }
    static recharge(){
        this.batteryLevel = 100;
    }

}
module.exports = Scooter