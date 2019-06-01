///////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965)

function calculateAge(year) {
    console.log(2018 - year);
}


//retirement(1990)

var retirement = function(year) {
    console.log(65 - (2018 - year))
}

// variables

console.log(age)
var age = 25
console.log(age)

function foo() {
    console.log(age)
    var age = 65
    console.log(age)
}
foo()
console.log(age)
*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this)


// calculateAge(1994)

// function calculateAge(year) {
//     console.log(2018 - year)
//     console.log(this)
// }

var john = {
    name: 'John',
    yearOfBirth: 1994,
    calculateAge: function() {
        console.log(this)
        console.log(2018 - this.yearOfBirth)
        /*
        function innerFunction() {
            console.log(this)
        }
        innerFunction()
        */
    }
}

john.calculateAge()

var Mike = {
    name: 'Mike',
    yearOfBirth: 1989,
}

Mike.calculateAge = john.calculateAge
Mike.calculateAge()



