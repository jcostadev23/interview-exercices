/*
You have an array of student records, where each student is represented as an object with properties like 
    name, grade, and subject.

Given:
A minimum grade threshold (e.g., 70)
A specific subject (e.g., "Math")
Perform operations to return a list of students who have a grade above the threshold in the specified subject, 
    and calculate the average grade of those students.
 */

const students = [
  {
    name: "Aurelio",
    subject: "Math",
    grade: 75,
  },
  {
    name: "Lilia",
    subject: "Math",
    grade: 80,
  },
  {
    name: "David",
    subject: "Math",
    grade: 80,
  },
  {
    name: "Costa",
    subject: "Math",
    grade: 70,
  },
  {
    name: "Lilia",
    subject: "History",
    grade: 90,
  },
  {
    name: "Yara",
    subject: "History",
    grade: 80,
  },
  {
    name: "Emma",
    subject: "Math",
    grade: 85,
  },
  {
    name: "Armando",
    subject: "History",
    grade: 80,
  },
];

const aboveGrade = (minGrade, subject) => {
  const selectedStudents = students.filter(
    (student) => student.subject === subject && student.grade > minGrade
  );

  const average =
    selectedStudents.length > 0
      ? selectedStudents.reduce((total, student) => total + student.grade, 0) /
        selectedStudents.length
      : null;

  return { selectedStudents, average };
};

aboveGrade(70, "History");

const aboveAverage2 = (minGrade, subject) => {
  const { selectedStudents, total, count } = students.reduce(
    (acc, student) => {
      if (student.subject === subject && student.grade > minGrade) {
        acc.selectedStudents.push(student);
        acc.total += student.grade;
        acc.count++;
      }
      return acc;
    },
    {
      selectedStudents: [],
      total: 0,
      count: 0,
    }
  );

  const average = count > 0 ? total / count : null;

  return { selectedStudents, average };
};

aboveAverage2(70, "Math");
