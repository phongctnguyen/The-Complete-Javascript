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

/*
var markMass = 78
var markHeight = 1.69

var johnMass = 92
var johnHeight = 1.95

var markBMI = markMass / (markHeight * markHeight)
var johnBMI = johnMass / (johnHeight * johnHeight)
console.log(markBMI, johnBMI)

var compare = markBMI > johnBMI
console.log("Is Mark's BMI higher than John's? " + compare)
*/

/*****************************
* 5. If/else statements
*/

/*
var firstName = 'John'
var civilStatus = 'single'

if (civilStatus === 'married') {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon')
}

var isMarried = true
if (isMarried) {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon')
}

var markMass = 78
var markHeight = 1.69

var johnMass = 92
var johnHeight = 1.95

var markBMI = markMass / (markHeight * markHeight)
var johnBMI = johnMass / (johnHeight * johnHeight)

if (markBMI > johnBMI) {
    console.log('Mark\' BMI is higher than John\'s.')
} else {
    console.log('John\' BMI is higher than Mark\'s.')
}

// var compare = markBMI > johnBMI
// console.log("Is Mark's BMI higher than John's? " + compare)
*/

/*****************************
* 6. Boolean Logic
*/

/*
var firstName = 'John'
var age = 20

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}
*/

/*****************************
* 7. The Ternary Operator and Switch Statements
*/

/*
var firstName = 'John'
var age = 22

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice'
console.log(drink)

// Switch Statement
var job = 'teacher'

switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.')
        break
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.')
        break
    case 'designer':
        console.log(firstName + ' designs beautiful websites')
        break
    default:
        console.log(firstName + ' does something else.')
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.')
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.')
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.')
    default:
        console.log(firstName + ' is a man.')
}
*/

/*****************************
* 8. Truthy and Falsy values and equality operators
*/

/*
var height = 23

if (height || hieght === 0  ) {
    console.log('Variables is defined')
} else {
    console.log('Variables has NOT been defined')
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
var johnTeamGame1Score = 118
var johnTeamGame2Score = 97
var johnTeamGame3Score = 127

var johnTeamAverageScore = (johnTeamGame1Score + johnTeamGame2Score + johnTeamGame3Score) / 3

var mikeTeamGame1Score = 124
var mikeTeamGame2Score = 97
var mikeTeamGame3Score = 175

var mikeTeamAverageScore = (mikeTeamGame1Score + mikeTeamGame2Score + mikeTeamGame3Score) / 3

var maryTeamGame1Score = 116
var maryTeamGame2Score = 94
var maryTeamGame3Score = 123

var maryTeamAverageScore = (maryTeamGame1Score + maryTeamGame2Score + maryTeamGame3Score) / 3

console.log(johnTeamAverageScore, mikeTeamAverageScore, maryTeamAverageScore)

if (johnTeamAverageScore > mikeTeamAverageScore && johnTeamAverageScore > maryTeamAverageScore) {
         console.log('John\'s team is winner! with ' + johnTeamAverageScore + ' points')
}   else if (mikeTeamAverageScore > johnTeamAverageScore && mikeTeamAverageScore > maryTeamAverageScore) {
        console.log('Mike\'s team is winner! with ' + mikeTeamAverageScore + ' points')

}   else if (maryTeamAverageScore > johnTeamAverageScore && maryTeamAverageScore > mikeTeamAverageScore) {
        console.log('Mary\'s team is winner! with ' + maryTeamAverageScore +  ' points')
}   else {
        console.log('There is a draw!')
}