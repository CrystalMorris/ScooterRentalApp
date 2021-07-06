const Scooter = require('../src/Scooter');
const Station = require('./Station');

class User{
    static users = [];
    static usernames = []
    constructor(username, password, age){
        if(age < 18){
            throw new Error("Sorry, user must be at least 18 to register")
        }
        if(User.usernames.includes(username)){
            throw new Error("That username is not available. Please try again")
        }

        this.name = {
            first: "",
            last: ""
        }
        this.username = username
        this.password = password
        this.age = age
        User.users.push(this)
        User.usernames.push(this.username)
    }
    updatePassword(newPassword){
        this.password = newPassword
    }
    enterName(first, last){
        this.name.first = first
        this.name.last = last
    }

    
}
module.exports = User