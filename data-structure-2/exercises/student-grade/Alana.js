const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  studentGrades.forEach((studentGrade) => {
    console.log(`Name: ${studentGrade.name}, Grade: ${studentGrade.grade} `);
  }); // display
}

function calculateAverageGrade() {
  let avg = 0;
  studentGrades.forEach((studentGrade) => {
    avg += studentGrade.grade;
  });
  return avg; // number
}

function findHighestGradeStudent() {
  studentGrades.sort((a, b) => {
    return b.grade - a.grade;
  });
  return studentGrades[0]; // object
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
