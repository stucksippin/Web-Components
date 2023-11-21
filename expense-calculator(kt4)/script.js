const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

let expenses = [];



expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = expenseNameInput.value;
    const amount = parseFloat(expenseAmountInput.value);

    if (name && amount) {
        const expense = { name, amount };
        expenses.push(expense);

        renderExpenses();
        calculateTotalExpense();

        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});

function renderExpenses() {
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const item = document.createElement('div');
        item.className = 'expense-item';

        const name = document.createElement('span');
        name.textContent = expense.name + ': ';

        const amount = document.createElement('span');
        amount.textContent = expense.amount;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', function () {
            expenses.splice(index, 1);
            renderExpenses();
            calculateTotalExpense();
        });

        item.appendChild(name);
        item.appendChild(amount);
        item.appendChild(deleteButton);

        expenseList.appendChild(item);
    });
}

function calculateTotalExpense() {
    let total = 0;

    expenses.forEach((expense) => {
        total += expense.amount;
    });

    totalExpense.textContent = 'Общая сумма расходов: ' + total;
}