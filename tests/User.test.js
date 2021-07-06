const User = require('../src/User.js')
const Station = require('../src/Station')
const Scooter = require('../src/Scooter')

describe('User class',()=>{
    const testUser = new User('Dexter789','goodpassword',21);
    test('User should have a name',()=>{
        
        expect(testUser.name).toStrictEqual({"first":"", "last": ""})
        })
    test('User should have a username',()=>{

        expect(testUser.username).toBe('Dexter789')
    })

    test('User should have password', ()=>{
        expect(testUser.password).toBe('goodpassword')
    })
    test('user should have an age',()=>{
        expect(testUser.age).toBe(21)
    })

    test('updatePassword function should update the password',()=>{
        testUser.updatePassword('newPassword')
        expect(testUser.password).toBe('newPassword')
    })

    test('user should be able to enter their name', ()=>{
        testUser.enterName("Dexter","Jones")
        expect(testUser.name.first).toBe("Dexter") && (testUser.name.last).toBe("Jones")
    })
   
    test('user under age 21 cannot register',()=>{
        expect(()=>new User("kiddo12","easypassword", 12)).toThrow("Sorry, user must be at least 18 to register")
    })
    test('usernames should be added to an array list',()=>{
        expect(User.usernames).toStrictEqual(["Dexter789"])
    })
    test('username should be unique',()=>{
        expect(()=> new User("Dexter789",'somepassword', 33)).toThrow('That username is not available. Please try again')

    })

})

       