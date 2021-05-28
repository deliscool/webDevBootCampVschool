//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr = []


function fiveAndGreaterOnly(arr) {
    return arr.filter (greater => greater >= 5)

  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2]));


// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
    return arr.filter(evens => evens %2 === 0)
}

//test
console.log(evensOnly([3, 6, 8, 2]));

// 3) GIven an array of strings, return a new array that only includes that are 5 characters or fewer in length

function fiveCharactersOnly(arr) {
    return arr.filter(string => string.length >= 5 )
}

//test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(clubMember=> clubMember.member === true)
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

function ofAge(arr){
    return arr.filter(rightAge=> rightAge.age >= 18)
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 