/*script.js
let r;//root
let b; //biscuits
let d; // donuts
let p; // pancakes
let s; //status
*/


const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = document.querySelector('[data-biscuits="10"]');
const donuts1 = document.querySelector('[data-donuts="13"]');
const pancakes1 = document.querySelector('[data-pancakes="0"]');
const status1 = document.querySelector('[data-delivered="false"]')//console.log (biscuits1)

const root2 = document.querySelector('[data-key="order2"]'); 
const biscuits2 = document.querySelector('[data-biscuits="5"]');
const donuts2 = document.querySelector('[data-donuts="0"]');
const pancakes2 = document.querySelector('[data-pancakes="2"]');
const status2 = document.querySelector('[data-delivered="false"]');

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = document.querySelector('[data-biscuits="12"]');
const donuts3 = document.querySelector('[data-donuts="11" ]');
const pancakes3 = document.querySelector('[data-pancakes="15"]');
const status3 = document.querySelector('[data-delivered="true]');

//console.log(root3)
let myCount = document.getElementsByClassName("count");
console.log(myCount)
myCount[0].textContent = '10';
myCount[1].textContent ='13';
myCount[2].textContent ='0';
myCount[3].textContent = '5';
myCount[4].textContent ='0';
myCount[5].textContent ='2';
myCount[6].textContent = '12';
myCount[7].textContent = '11';
myCount[8].textContent = '15';

let myStatus = document.getElementsByClassName("status");
console.log(myStatus)
myStatus[0].textContent = 'false';
myStatus[1].textContent = 'false';
myStatus[2].textContent = 'true';


/*biscuits = biscuits1.getAttribute('biscuit1');
donuts1   = 1-root.donuts,
pancakes1 = 1-root.pancakes,
status1   = 1-root.status ? Delivered : Pending

biscuits2 = 2-root.biscuits,
donuts2   = 2-root.donuts,
pancakes2 = 2-root.pancakes,
status2   = 2-root.status ? Delivered : Pending

biscuits3 = 3-root.biscuits,
donuts3   = 3-root.donuts,
pancakes3 = 3-root.pancakes,
status3   = 3-root.status ? Delivered : Pending*/
