// Let and Const

/*
// ES5
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller'
console.log(name5)

// ES6
const name6 = 'Jane Smith'
let age6 = 23
name6 = 'Jane Miller'
console.log(name6)
*/

/*
// ES5
function driversLicense5(passedTest) {
    if (passedTest) {
        console.log(firstName)
        var firstName = 'John'
        var yearaOfBirth = 1990
    }
    console.log(firstName + ', born in ' + yearaOfBirth + ', is now offically allowed to drive a car.')
}

driversLicense5(true)

//ES6
function driversLicense6(passedTest) {
    let firstName
    const yearaOfBirth = '1990'
    if (passedTest) {
        firstName = 'John'
    }
    console.log(firstName + ', born in ' + yearaOfBirth + ', is now offically allowed to drive a car.')
}

driversLicense6(true)


let i = 23

for (let i = 0; i < 5; i++) {
    console.log(i)
}

 console.log(i)
 */

// Blocks and IIFEs
// ES6
/*
 {
    const a = 1
    let b = 2
 }

 console.log(c)

 // ES5
 (function() {
    var c = 3
 })()

 // console.log(c)
*/

/*
// Strings

let firstName = 'John'
let lastName = 'Smith'
const yearOfBirth = 1990

function calcAge(year) {
    return 2019 - year
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.')

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`
console.log(n.startsWith('J'))
console.log(n.endsWith('th'))
console.log(n.includes('oh'))
console.log(firstName.repeat(5))
*/

/*
// Arrow Function

const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function(el) {
    return 2019 - el
})

console.log(ages5)

// ES6
let ages6 = years.map(el => 2019 - el)
console.log(ages6)

ages6 = years.map((el, index) => `Age element ${index + 1} : ${2019 - el}.`)
console.log(ages6)

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear()
    const age = now - el
    return `Age element ${index + 1} : ${age}.`
})
console.log(ages6)
*/

// ES5

var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this
		document.querySelector('.green').addEventListener('click', function() {
			var str =
				'This is box number ' + self.position + ' and it is ' + self.color
			alert(str)
		})
	}
}

// box5.clickMe()

//ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		document.querySelector('.green').addEventListener('click', () => {
			var str =
				'This is box number ' + this.position + ' and it is ' + this.color
			alert(str)
		})
	}
}

// box6.clickMe()

// const box66 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: function() {
// 		document.querySelector('.green').addEventListener('click', () => {
// 			var str =
// 				'This is box number ' + this.position + ' and it is ' + this.color
// 			alert(str)
// 		})
// 	}
// }

// box66.clickMe()

// const box66 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: () => {
// 		document.querySelector('.green').addEventListener('click', () => {
// 			var str =
// 				'This is box number ' + this.position + ' and it is ' + this.color
// 			alert(str)
// 		})
// 	}
// }

// box66.clickMe()

// ES5
function Person(name) {
	this.name = name
}

Person.prototype.myFriends5 = function(friends) {
	var arr = friends.map(
		function(el) {
			return this.name + ' is friends with ' + el
		}.bind(this)
	)
	console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends)

// ES6
function Person(name) {
	this.name = name
}

Person.prototype.myFriends6 = function(friends) {
	var arr = friends.map(el => `${this.name} is friends with ${el}`)
	console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('Mike').myFriends6(friends)
