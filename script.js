const current_date = document.getElementById('current_date');
const current_time = document.getElementById('current_time');

const workInBtn = document.getElementById('workInBtn');
const workOutBtn = document.getElementById('workOutBtn');
const workStart = document.getElementById('workStart');
const workEnd = document.getElementById('workEnd');

const breakInBtn = document.getElementById('breakInBtn');
const breakOutBtn = document.getElementById('breakOutBtn');
const breakStart = document.getElementById('breakStart');
const breakEnd = document.getElementById('breakEnd');
const breakTotal = document.getElementById('breakTotal');

const working_time = document.getElementById('working_time');

//Global variable
let workInTime = null;
let workOutTime = null;
let breakInTime = null;
let breakOutTime = null;
let breakTimeTotal = "00:00";


function currentDate(){
  const d = new Date();
  current_date.innerHTML = d.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric'
  }).replace(/ /g, ' ');
}

function currentTime(){
  const d = new Date();
  current_time.innerHTML = d.getHours() + ":" + d.getMinutes()  + ":" + d.getSeconds();
}

currentDate();
setInterval(currentTime, 1000);

function workIn (){
  const d = new Date();
  let workInHours = d.getHours();
  let workInMinutes = d.getMinutes();
  workInTime = workInHours + ":" + workInMinutes;
  workStart.innerHTML = workInTime;

  workInBtn.classList.add("disabled");
  workOutBtn.classList.remove("disabled");
  breakInBtn.classList.remove("disabled");
}

function workOut (){
  const d = new Date();
  let workOutHours = d.getHours() + 2;
  let workOutMinutes = d.getMinutes() + 30;
  workOutTime = workOutHours + ":" + workOutMinutes;
  workEnd.innerHTML = workOutTime;
  
  let startTimeTemp = workInTime.split(":");
  let endTimeTemp = workOutTime.split(":");
  let workingTimeTotal = `${endTimeTemp[0] - startTimeTemp[0]}:${endTimeTemp[1] - startTimeTemp[1]}`;

  let workingTimeTotalTemp = workingTimeTotal.split(":")
  let breakTimeTotalTemp = breakTimeTotal.split(":");
  
  let workingTimeActual = breakTimeTotal !== "00:00" ? `${workingTimeTotalTemp[0] - breakTimeTotalTemp[0]}hr:${workingTimeTotalTemp[1] - breakTimeTotalTemp[1]}min` : workingTimeTotal;
  working_time.innerHTML = workingTimeActual;

  workOutBtn.classList.add("disabled");
  breakInBtn.classList.add("disabled");
 }

//Break time
function breakIn (){
  const d = new Date();
  let breakInHours = d.getHours() + 3;
  let breakInMinutes = d.getMinutes();
  breakInTime = breakInHours + ":" + breakInMinutes;
  breakStart.innerHTML = breakInTime;

  breakInBtn.classList.add("disabled");
  workOutBtn.classList.add("disabled");
  breakOutBtn.classList.remove("disabled");
}

function breakOut (){
  const d = new Date();
  let breakOutHours = d.getHours() + 3;
  let breakOutMinutes = d.getMinutes() + 30;
  breakOutTime = breakOutHours + ":" + breakOutMinutes;
  breakEnd.innerHTML = breakOutTime;
  
  let startTimeTemp = breakInTime.split(":");
  let endTimeTemp = breakOutTime.split(":");
  breakTimeTotal = `${endTimeTemp[0] - startTimeTemp[0]}:${endTimeTemp[1] - startTimeTemp[1]}`;
  breakTotal.innerHTML = `${breakTimeTotal}min`;
  
  breakOutBtn.classList.add("disabled");
  breakInBtn.classList.remove("disabled");
  workOutBtn.classList.remove("disabled");
}


// const localStorageTransactions = JSON.parse(
//   localStorage.getItem('transactions')
// );

// let transactions =
//   localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// //Add Transaction
// function addTransaction(e) {
//   e.preventDefault();

//   if (text.value.trim() === '' || amount.value.trim() === '') {
//     alert('Please add a text and amount');
//   } else {
//     const transaction = {
//       id: generateID(),
//       text: text.value,
//       amount: +amount.value
//     };

//     transactions.push(transaction);

//     addTransactionDOM(transaction);

//     updateValues();

//     updateLocalStorage();

//     text.value = '';
//     amount.value = '';
//   }
// }

// // Generate random ID
// function generateID() {
//   return Math.floor(Math.random() * 100000000);
// }

// //Add transaction to DOM list
// function addTransactionDOM(transaction) {
//   //Get sign
//   const sign = transaction.amount < 0 ? '-' : '+';

//   const item = document.createElement('li');

//   //Add class based on value
//   item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

//   item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
//     transaction.amount
//   )}</span>  <button class="delete-btn" onclick="removeTransaction(${
//     transaction.id
//   })">x</button>`;

//   list.appendChild(item);
// }

// //Update the  balance, income and expense
// function updateValues() {
//   const amounts = transactions.map((transaction) => transaction.amount);

//   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

//   const income = amounts
//     .filter((item) => item > 0)
//     .reduce((acc, item) => (acc += item), 0)
//     .toFixed(2);

//   const expense = (
//     amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
//     -1
//   ).toFixed(2);

// }

// //Remove transaction by ID
// function removeTransaction(id) {
//   transactions = transactions.filter((transaction) => transaction.id !== id);

//   updateLocalStorage();

//   init();
// }

// //Update local storage transactions
// function updateLocalStorage() {
//   localStorage.setItem('transactions', JSON.stringify(transactions));
// }
// //Init App
// function init() {
//   list.innerHTML = '';

//   transactions.forEach(addTransactionDOM);

//   updateValues();
// }

// init();

// form.addEventListener('submit', addTransaction);

