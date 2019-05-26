/*
1. Variables and Data Types
*/
/*
var firstName = 'John'
console.log(firstName)

var lastName = 'Smith'
var age = 28;

var fullAge = true
console.log(fullAge)

var job
console.log(job)

job = 'Teacher'
console.log(job)

// single line comment
*/

/****************************************/

/*
2. Variable mutation and type coercion
*/

/*
var firstName = 'John'
var age = 28

// Type Coercion

console.log(firstName + ' ' + age)
console.log(`${firstName} ${age}`)

var job, isMarried
job = 'teacher'
isMarried = false

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// Variable mutation
age = 'twenty eight'
job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?')
console.log(firstName + ' ' + lastName)
*/

/****************************************/

/*
3. Basic Operators
*/

/*
var now = 2018
ageJohn = 28
ageMark = 33

// Math operators
var yearJohn = now - ageJohn
var yearMark = now - ageMark

console.log(yearJohn)

console.log(now + 2)
console.log(now * 2)
console.log(now / 10)

// Logical operators
var johnOlder = ageJohn > ageMark
console.log(johnOlder)

// typeof operator
console.log(typeof johnOlder)
console.log(typeof ageJohn)
console.log(typeof 'Mark')
console.log(typeof x)
*/

/****************************************/

/*
4. Operator precedence
*/

/*
var now = 2018
var yearJohn = 1989
var fullAge = 18

// Multiple operators
var isFullAge = now - yearJohn >= fullAge
console.log(isFullAge)

// Grouping
var ageJohn = now - yearJohn
var ageMark = 35
var average = (ageJohn + ageMark) / 2
console.log(average)

// Multiple assignment
var x, y
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var markMass = 78
var markHeight = 1.69

var johnMass = 92
var johnHeight = 1.95

var markBMI = markMass / (markHeight * markHeight)
var johnBMI = johnMass / (johnHeight * johnHeight)
console.log(markBMI, johnBMI)

var compare = markBMI > johnBMI
console.log("Is Mark's BMI higher than John's? " + compare)

