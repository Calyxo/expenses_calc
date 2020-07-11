let expensesInput = document.getElementById('amount-input');
let categoryInput = document.getElementById('category-input');
let addExpenseButton = document.getElementById('addExpenseButton');
let expensesTable = document.getElementById('expenses-table');
let sumExpenses = document.getElementById('sum');

let sum = 0;
let sumDisplay = document.createElement('p');
sumDisplay.innerHTML = sum+"€";
sumExpenses.appendChild(sumDisplay);

addExpenseButton.onclick= function(){
  if ((expensesInput.value.trim()) !== ""){
  let newExpense = document.createElement('tr');
  let category = document.createElement('td');
  category.innerHTML = categoryInput.value;
  let amount = document.createElement('td');
  amount.innerHTML = expensesInput.value+'€';
  amount.setAttribute('class','amount')
  newExpense.appendChild(category);
  newExpense.appendChild(amount);
  expensesTable.appendChild(newExpense);
  sum += parseInt(expensesInput.value);
  
  sumDisplay.innerHTML = sum+"€";
    
    }
  expensesInput.value = "";
  categoryInput.value = "None";
  
}


