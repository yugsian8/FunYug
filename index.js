//The Sum Game
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber1 = getRandomNumber(9, 100)
let randomNumber2 = getRandomNumber(9, 100)

let question = document.getElementById("question")
question.textContent = randomNumber1 + "+" + randomNumber2;
let ans = randomNumber1 + randomNumber2

let comment = document.querySelector("#comment")
function checkValue () {

  let input = document.getElementById("input")
  let inputValue = input.value
  if (inputValue == ans) {
    console.log("You Won")
    comment.textContent = "You Won! the answer is " + ans
  } else {
    console.log("You Lost")
    comment.textContent = "You Lost! the answer is " + ans
  } if (inputValue === "") {
    comment.textContent = "Please Enter Your Answer!"
  }
}

function handleEnterKey(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    checkValue()
  }
}

let img = document.querySelector("#img");
img.addEventListener("click", function() {
  location.reload()
})

//The Subtraction Game

function getRandomNumber2(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber3 = getRandomNumber(150, 200)
let randomNumber4 = getRandomNumber(10, 150)

let question2 = document.getElementById("question2")
question2.textContent = randomNumber3 + "-" + randomNumber4;
let ans2 = randomNumber3 - randomNumber4

let comment2 = document.querySelector("#comment2")
console.log(comment2)
function checkValue2 () {
  let input2 = document.getElementById("input2")
  let input2Value = input2.value
  if (input2Value == ans2) {
    console.log("You Won")
    comment2.textContent = "You Won! the answer is " + ans2
  } else {
    console.log("You Lost")
    comment2.textContent = "You Lost! the answer is " + ans2
  } if (input2Value === "") {
    comment2.textContent = "Please Enter Your Answer!"
  }
}


function handleEnterKey2(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    checkValue2()
  }
}

let img2 = document.querySelector("#img2");
img2.addEventListener("click", function() {
  location.reload()
})

//The Product Game
function getRandomNumber3(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber5 = getRandomNumber(2, 100)
let randomNumber6 = getRandomNumber(2, 10)

let question3 = document.getElementById("question3")
question3.textContent = randomNumber5 + "*" + randomNumber6;
let ans3 = randomNumber5 * randomNumber6

let comment3 = document.querySelector("#comment3")
console.log(comment3)
function checkValue3 () {
  let input3 = document.getElementById("input3")
  let input3Value = input3.value
  if (input3Value == ans3) {
    console.log("You Won")
    comment3.textContent = "You Won! the answer is " + ans3
  } else {
    console.log("You Lost")
    comment3.textContent = "You Lost! the answer is " + ans3
  } if (input3Value === "") {
    comment3.textContent = "Please Enter Your Answer!"
  }
}


function handleEnterKey3(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    checkValue3()
  }
}

let img3 = document.querySelector("#img3");
img3.addEventListener("click", function() {
  location.reload()
})

//The Quotient Game

function getRandomNumber4(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber7 = getRandomNumber(10, 200)
let randomNumber8 = getRandomNumber(2, 10)

let question4 = document.getElementById("question4")
question4.textContent = randomNumber7 + "/" + randomNumber8;
let ans4 = randomNumber7 / randomNumber8

let comment4 = document.querySelector("#comment4")
console.log(comment4)
function checkValue4 () {
  let input4 = document.getElementById("input4")
  let input4Value = input4.value
  if (input4Value == ans4) {
    console.log("You Won")
    comment4.textContent = "You Won! the answer is " + ans4
  } else {
    console.log("You Lost")
    comment4.textContent = "You Lost! the answer is " + ans4
  } if (input4Value === "") {
    comment4.textContent = "Please Enter Your Answer!"
  }
}


function handleEnterKey4(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    checkValue4()
  }
}

let img4 = document.querySelector("#img4");
img4.addEventListener("click", function() {
  location.reload()
})