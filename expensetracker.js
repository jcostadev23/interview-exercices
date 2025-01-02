/*
Expense Tracker

Description:
Implement a class called ExpenseTracker to manage personal expenses. The class should allow the following:

	1.	Add an expense by specifying the amount and category (e.g., food, transport, etc.).
	2.	View all expenses grouped by category.
	3.	Get the total expenses for a specific category.
    
    */

class ExpenseTracker {
  constructor() {
    this.expenses = {};
  }

  addExpense(category, amount) {
    if (!this.expenses[category]) {
      this.expenses[category] = [];
    }

    this.expenses[category].push(amount);
  }

  allExpenses() {
    return this.expenses;
  }

  totalExpenses(category) {
    return this.expenses[category].reduce(
      (total, expences) => total + expences,
      0
    );
  }
}

const expenses = new ExpenseTracker();
expenses.addExpense("food", 200);
expenses.addExpense("food", 250);
expenses.addExpense("transport", 200);
expenses.addExpense("food", 20);
expenses.addExpense("transport", 400);
expenses.addExpense("transport", 250);

console.log("all", expenses.allExpenses());
console.log("total", expenses.totalExpenses("food"));
console.log("total", expenses.totalExpenses("transport"));
