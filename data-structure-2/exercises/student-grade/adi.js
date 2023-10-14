const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  for (let i = 0; i < studentGrades.length; i++) {
    console.log(`${studentGrades[i].name}: ${studentGrades[i].grade}`);
  }
  console.log(); // void
}

function calculateAverageGrade() {
  let avg = 0;
  let total = 0;
  for (let i = 0; i < studentGrades.length; i++) {
    total += studentGrades[i].grade;
    avg = total / studentGrades.length;
  }
  return avg.toFixed(2); // number
}

function findHighestGradeStudent() {
  let top = studentGrades[0];
  for (let i = 1; i < studentGrades.length; i++) {
    if (studentGrades[i].grade > top.grade) {
    }
    top = studentGrades[i];
  }
  return top; // object
}

addStudentGrade('Alice', 92);
addStudentGrade('Bob', 78);
addStudentGrade('Charlie', 86);

console.log('All Student Grades:');
displayStudentGrades();

console.log('Average Grade:', calculateAverageGrade());

const topStudent = findHighestGradeStudent();
console.log(
  'Top Student:',
  topStudent
    ? `${topStudent.name} with a grade of ${topStudent.grade}`
    : 'No top student found.'
);
