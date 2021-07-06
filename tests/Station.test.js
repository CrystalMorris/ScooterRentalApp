const { stationNames } = require('../src/Station')
const Station = require('../src/Station')

describe('Station class',()=>{

    const testStation = new Station("Jane")

    test('stations should have an stationName', ()=>{
        expect(testStation.stationName).toBe("Jane")
    })

    test('station names should be unique',()=>{
        expect(()=> new Station('Jane')).toThrowError("A station with this name already exists. Please choose a different name.")
    })

    test('station should have a place to store scooters',()=>{
        expect(testStation.scooters).toStrictEqual([])
    })
    test('station names should be added to list of station names',()=>{
        expect(stationNames.length).toBe(1)
    })

    test('station can list scooters ready and available for rent',()=>{
        expect(testStation.availableScooters).toStrictEqual([]) 
       })








    })