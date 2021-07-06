const Scooters = require('../src/Scooter')
class Station{
    static stations = []
    static stationNames = []
    constructor(stationName){
        if(Station.stationNames.includes(stationName)){
            throw new Error("A station with this name already exists. Please choose a different name.")
        }
        this.stationName= stationName
        this.scooters = []
        this.availableScooters = []
        Station.stations.push(this)
        Station.stationNames.push(this.stationName)
        
    }
    addScooter(scooter){
        this.scooters.push(scooter)
    }
}

module.exports = Station