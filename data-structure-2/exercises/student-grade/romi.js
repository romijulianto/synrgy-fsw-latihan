const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  for (let i = 1; i < studentGrades.length; i++) {
    console.log(studentGrades[i].name, studentGrades[i].grade);
  }
}

function calculateAverageGrade() {
  let sum = 0;
  for (let i = 0; i < studentGrades.length; i++) {
    sum += studentGrades[i].grade;
  }
  const avg = sum / studentGrades.length;
  return avg;
}

function findHighestGradeStudent() {
  let highestGrade = -1;
  let topStudent = null;

  for (let i = 0; i < studentGrades.length; i++) {
    if (studentGrades[i].grade > highestGrade) {
      highestGrade = studentGrades[i].grade;
      topStudent = studentGrades[i];
    }
  }

  return topStudent;
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
