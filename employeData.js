/*
Filter and Transform Employee Data

You have an array of employee records, where each employee is represented as an object with properties like name, age, department, and salary.

Given:
	•	A specific department (e.g., "Engineering")
	•	A minimum salary threshold

Perform operations to return only employees from the given department whose salary exceeds the threshold, and include only their name and salary in the resulting array.

employees = [
    { name: "Alice", age: 30, department: "Engineering", salary: 70000 },
    { name: "Bob", age: 40, department: "HR", salary: 50000 },
    { name: "Charlie", age: 25, department: "Engineering", salary: 60000 },
    { name: "Diana", age: 35, department: "Marketing", salary: 80000 },
];
department = "Engineering";
minSalary = 65000;

Example output:
[
    { name: "Alice", salary: 70000 }
]
     */

const employees = [
  { name: "Alice", age: 30, department: "Engineering", salary: 70000 },
  { name: "Bob", age: 40, department: "HR", salary: 50000 },
  { name: "Charlie", age: 25, department: "Engineering", salary: 60000 },
  { name: "Diana", age: 35, department: "Marketing", salary: 80000 },
];

const filteredEmploye = (department, minSalary) => {
  const employ = [];
  employees.forEach((person) => {
    if (person.department !== department) {
      return false;
    }

    if (person.salary >= minSalary) {
      employ.push({ name: person.name, salary: person.salary });
    }
  });

  return employ;
};

console.log("enginer", filteredEmploye("Engineering", 60000));

function selectedEmploye(department, minSalary) {
  const selectedEmployees = [];

  for (let i = 0; i < employees.length; i++) {
    if (
      employees[i].department === department &&
      employees[i].salary >= minSalary
    ) {
      selectedEmployees.push({
        name: employees[i].name,
        salary: employees[i].salary,
      });
    }
  }

  return selectedEmployees;
}

console.log("enginer2", selectedEmploye("Engineering", 60000));
