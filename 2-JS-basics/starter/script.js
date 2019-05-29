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

/*
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

*/

/*****************************
* FUNCTIONS
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear
}

var ageJohn = calculateAge(1994)
var ageMike = calculateAge(1996)
var ageJane = calculateAge(1998)

console.log(ageJohn, ageMike, ageJane)

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year)
    var retirement = 60 - age
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1990, 'John')
yearsUntilRetirement(1948, 'Mike')

*/

/*****************************
* Function Statements and Expressions
*/

/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites.'
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
*/

/*****************************
* Arrays
*/

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane']
var years = new Array(1990, 1969, 1948)

console.log(names[0])
console.log(names.length)

// Mutate array data
names[1] = 'Ben'
names[names.length] = 'Mary'
console.log(names)

// Different data types
var john = ['John', 'Smith', 1990, 'designer',  false]

john.push('blue')
john.unshift('Mr.')
console.log(john)

console.log(john.pop())
john.shift()
console.log(john)

console.log(john.indexOf(23))

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : "John IS a designer"
console.log(isDesigner)

*/

/*****************************
* Coding Challenge 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*
var bill1 = 124
var bill2 = 48
var bill3 = 268

var tipCaculator = function (bill) {
    var percentage
    if (bill < 50) {
        percentage = 0.2
    } else if (bill <= 200) {
        percentage =  0.15
    } else {
        percentage = 0.1
    }
    return bill * percentage
}

var allTips = []
allTips.push(tipCaculator(bill1))
allTips.push(tipCaculator(bill2))
allTips.push(tipCaculator(bill3))
console.log(allTips)

var allPaid = []
allPaid.push(tipCaculator(bill1) + bill1)
allPaid.push(tipCaculator(bill2) + bill2)
allPaid.push(tipCaculator(bill3) + bill3)
console.log(allPaid)
*/


/*****************************
* Objects and properties
*/

/*
// Object literal
var john = {
    firstName: 'John',
    lastName : 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.firstName)
console.log(john['firstName'])
console.log(john.family[0])
var x = 'birthYear'
console.log(john[x])

john.job = 'designer'
john['isMarried'] = true
console.log(john)

// new Object syntax
var jane = new Object()
jane.firstName = 'Jane'
jane.birthYear = 1990
jane['lastName'] = 'Smith'
console.log(jane)
*/

/*****************************
* Objects and methods
*/

/*
var john = {
    firstName: 'John',
    lastName : 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear
    },
}

john.calcAge()
console.log(john)
*/

/*****************************
* Coding Challenge 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
var mark = {
    name: 'Mark',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

var john = {
    name: 'John',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.name + ' has a higher BMI of ' + mark.bmi)
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(john.name + ' has a higher BMI ofh ' + john.bmi)
} else {
    console.log('They have the same BMI')
}
*/

/*****************************
* Loop and Iteration
*/

/*
// For loop
for (var i = 0; i < 10; i++) {
    console.log(i)
}

// i = 0, 0 < 10 True, log i to console, i++
// i = 1, 1 < 10 True, log i to console, i++
// ...
// i = 9, 9 < 10 True, log i to console, i++
// i = 10, 10 < 10 False, exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false]
for (var i = 0; i < john.length; i++) {
    console.log(john[i])
}

// While loop
var i = 0
while(i < john.length) {
    console.log(john[i])
    i++
}
*/

/*
// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false]
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue
    console.log(john[i])
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break
    console.log(john[i])
}

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i])
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var johnBills = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid : [],
    calcTip: function() {
        for (i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips.push(this.bills[i] * 0.2)
                this.finalPaid.push(this.bills[i] + this.bills[i] * 0.2)
            } else if (this.bills[i] <= 200) {
                this.tips.push(this.bills[i] * 0.15)
                this.finalPaid.push(this.bills[i] + this.bills[i] * 0.15)
            } else {
                this.tips.push(this.bills[i] * 0.1)
                this.finalPaid.push(this.bills[i] + this.bills[i] * 0.1)
            }
        }
    }
}

johnBills.calcTip()
console.log(johnBills)