console.log("Always more to add");

let rollButton = document.querySelector("#roll");
let showRollsButton = document.querySelector("#breakdown");
let resetButton = document.getElementById("reset")
let pic = document.getElementById("pic").innerHTML
let dieRolls = []

rollButton.addEventListener("click", function () {
    let index = 0;
    let option = document.getElementById("faces")
    let faces = document.getElementById("faces").value;
    let userNumber = document.querySelector("#userNumber").value;
    let addedTogether = document.getElementById("totalRoll").innerHTML

    if (addedTogether > 0) {
        dieRolls = [];
        // console.log(addedTogether)
    }
    while (index < userNumber) {

        if (index <= userNumber) {
            rolledNumber = (Math.floor(Math.random() * faces) + 1)
            // console.log(rolledNumber)
            dieRolls.push(rolledNumber)
        }
        index++
    }
    console.log(dieRolls)
    addedTogether = dieRolls.reduce(function (a, b) {
        return a + b;
    }, 0)
    // console.log(addedTogether)
    document.getElementById("totalRoll").innerHTML = addedTogether

    if (addedTogether > 0) {
        document.getElementById("totalRoll").style.boxShadow = "1px 1px 2px black, 0 0 15px #d89a00, 0 0 5px #d89a00";
    } else {
        document.getElementById("totalRoll").style.boxShadow = "";
    }
    // console.log(faces)
})

showRollsButton.addEventListener("click", function () {
    let addedTogether = document.getElementById("totalRoll").innerHTML
    if (addedTogether > 0) {
        var rollAgain = document.createElement("button");
        rollAgain.innerHTML = "Roll Again!"
        rollAgain.id = "repeat"
        document.getElementById("rollAgain").appendChild(rollAgain)
    }

    var ol = document.createElement("ol");
    ol.id = "ordered"
    document.getElementById("list").appendChild(ol);
    count = 0;
    while (count < dieRolls.length) {
        var li = document.createElement("li");
        li.id = "allrolls"
        li.innerHTML = dieRolls[count];
        ol.appendChild(li);
        count++

        // add image tag here
    }
})

rollAgain.addEventListener("click", function () {
    let index = 0;
    // let option = document.getElementById("faces")
    let faces = document.getElementById("faces").value;
    let userNumber = document.querySelector("#userNumber").value;
    let addedTogether = document.getElementById("totalRoll").innerHTML

    if (addedTogether > 0) {
        dieRolls = [];
        // console.log(addedTogether)
    }
    while (index < userNumber) {

        if (index <= userNumber) {
            rolledNumber = (Math.floor(Math.random() * faces) + 1)
            // console.log(rolledNumber)
            dieRolls.push(rolledNumber)
        }
        index++
    }
    console.log(dieRolls)
    addedTogether = dieRolls.reduce(function (a, b) {
        return a + b;
    }, 0)
    // console.log(addedTogether)
    document.getElementById("totalRoll").innerHTML = addedTogether

    if (addedTogether > 0) {
        document.getElementById("totalRoll").style.boxShadow = "1px 1px 2px black, 0 0 15px #d89a00, 0 0 5px #d89a00";
    } else {
        document.getElementById("totalRoll").style.boxShadow = "";
    }
    // console.log(faces)
    var ol = document.createElement("ol");
    ol.id = "ordered"
    document.getElementById("list").appendChild(ol);
    count = 0;
    while (count < dieRolls.length) {
        var li = document.createElement("li");
        li.id = "allrolls"
        li.innerHTML = dieRolls[count];
        ol.appendChild(li);
        count++
    }

})

resetButton.addEventListener("click", function () {
    repeated = document.getElementById("repeat") 

    repeated.remove()
    document.getElementById("faces").value = '0'
    document.querySelector("#userNumber").value = ''
    document.getElementById("list").innerHTML = ""
    dieRolls = []
    addedTogether = "_";
    document.getElementById("totalRoll").innerHTML = addedTogether
    document.getElementById("totalRoll").style.boxShadow = "";
})


