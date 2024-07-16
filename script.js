const btn = document.getElementById("roll-button");
const dice = document.getElementById("dice");
const historyel = document.getElementById("roll-history");
let list = [];

function rolldice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    const face = getdiceface(roll);
    dice.innerHTML = face;
    list.push(roll);
    update();
}

function update() {
    historyel.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const item = document.createElement("li");
        item.innerHTML = `Roll: ${i + 1} <span>${getdiceface(list[i])}</span>`;
        historyel.appendChild(item);
    }
}

function getdiceface(roll) {
    switch (roll) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}
btn.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rolldice();
    }, 1000);
});
// const buttonEl = document.getElementById("roll-button");

// const diceEl = document.getElementById("dice");

// const rollHistoryEl = document.getElementById("roll-history");

// let historyList = [];

// function rollDice() {
//     const rollResult = Math.floor(Math.random() * 6) + 1;
//     const diceFace = getDiceFace(rollResult);
//     diceEl.innerHTML = diceFace;
//     historyList.push(rollResult);
//     updateRollHistory();
// }

// function updateRollHistory() {
//     rollHistoryEl.innerHTML = "";
//     for (let i = 0; i < historyList.length; i++) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
//       historyList[i]
//     )}</span>`;
//         rollHistoryEl.appendChild(listItem);
//     }
// }

// function getDiceFace(rollResult) {
//     switch (rollResult) {
//         case 1:
//             return "&#9856;";
//         case 2:
//             return "&#9857;";
//         case 3:
//             return "&#9858;";
//         case 4:
//             return "&#9859;";
//         case 5:
//             return "&#9860;";
//         case 6:
//             return "&#9861;";
//         default:
//             return "";
//     }
// }

// buttonEl.addEventListener("click", () => {
//     diceEl.classList.add("roll-animation");
//     setTimeout(() => {
//         diceEl.classList.remove("roll-animation");
//         rollDice();
//     }, 1000);
// });