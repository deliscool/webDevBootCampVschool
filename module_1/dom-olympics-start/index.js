const myGreeting = document.getElementById('header');
const myNewGreeting = document.createElement("h1")
myNewGreeting.textContent = "JavaScript Made This!!!"
myGreeting.append(myNewGreeting)
myGreeting.style.textAlign = "center"

const mySpan = document.createElement("span")
const myName = mySpan.textContent = "Del "
mySpan.style.color = "orange"

const subGreeting = document.createElement("h2")
subGreeting.textContent = " wrote the JavaScript"
header.append(subGreeting)
subGreeting.prepend(mySpan)


const messages = document.querySelectorAll(".messages > div")
const newMessageLeft = messages.textContent = "I really have something serious to say"
const newMessageRight = messages.textContent = "Me too!"
const newMessageLeftTwo = messages.textContent = "Say it already..."
const newMessageRightTwo = messages.textContent = "Your mom"
for (var i = 0; i < messages.length; i++) {
    messages[0].textContent = newMessageLeft,
        messages[1].textContent = newMessageRight,
        messages[2].textContent = newMessageLeftTwo,
        messages[3].textContent = newMessageRightTwo
}

var clearAllConvo = document.getElementById('clearbutton');
clearAllConvo.addEventListener("click", function () {
    var clearIt = document.querySelectorAll(".message");
    for (var i = 0; i <= clearIt.length; i++) {
        newText = clearIt[i];
        newText.textContent = "";
        newText.style.backgroundColor = "white";
    }
})