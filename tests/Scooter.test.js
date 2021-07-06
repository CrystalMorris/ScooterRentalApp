
const Scooter = require('../src/Scooter')
const Station = require('../src/Station')

describe('scooter class',()=>{
     const testScooter = new Scooter("Jane")
     const testScooter2 = new Scooter()
     test("scooters should have automatically set unique ids",()=>{
          expect(testScooter.id).toBe(1) && (testScooter2.id).toBe(2)
     })

     test('scooters should have a status',()=>{
          expect(testScooter.status).toBe("Ready")
     })

     test('scooter should have a location',()=>{
          expect(testScooter.location).toBe("Jane")
     })
     test('scooter should have a battery level', ()=>{
         expect(testScooter.batteryLevel).toBe(100) 
     })

     test('scooter should be assigned to a station on creation',()=>{
          const jane = new Station("Jane")
          const testScooter3 = new Scooter("Jane")
               expect(jane.scooters.length).toBe(1)
     })
     













})