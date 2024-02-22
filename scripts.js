
let sections = document.getElementsByTagName('section');
console.log(sections);

const root1 = sections[0].querySelector("dl").getAttribute("data-key");
const biscuits1 = sections[0].querySelector("dl").getAttribute("data-biscuits")
const donuts1 = sections[0].querySelector("dl").getAttribute("data-donuts");
const pancakes1 = sections[0].querySelector("dl").getAttribute("data-pancakes");
const status1 = sections[0].querySelector("dl").getAttribute("data-delivered");
console.log (biscuits1);

const root2 = sections[1].querySelector("dl").getAttribute("data-key");
const biscuits2 = sections[1].querySelector("dl").getAttribute("data-biscuits");
const donuts2 = sections[1].querySelector("dl").getAttribute("data-donuts");
const pancakes2 = sections[1].querySelector("dl").getAttribute("data-pancakes");
const status2 = sections[1].querySelector("dl").getAttribute("data-delivered");
console.log(biscuits2)

const root3 = sections[2].querySelector("dl").getAttribute("data-key");
const biscuits3 = sections[2].querySelector("dl").getAttribute("data-biscuits");
const donuts3 = sections[2].querySelector("dl").getAttribute("data-donuts");
const pancakes3 = sections[2].querySelector("dl").getAttribute("data-pancakes");
const status3 = sections[2].querySelector("dl").getAttribute("data-delivered");

let myCount = document.getElementsByClassName("count");

console.log(myCount)
myCount[0].textContent = biscuits1;
myCount[1].textContent =donuts1;
myCount[2].textContent =pancakes1;
myCount[3].textContent = biscuits2;
myCount[4].textContent =donuts2;
myCount[5].textContent =pancakes2;
myCount[6].textContent = biscuits3;
myCount[7].textContent = donuts3;
myCount[8].textContent = pancakes3;

let myStatus = document.getElementsByClassName("status");
console.log(myStatus)
myStatus[0].textContent = status1;
myStatus[1].textContent = status2;
myStatus[2].textContent = status3;
