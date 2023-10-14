const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  for (let i = 0; i < studentGrades.length; i++) {
    const student = studentGrades[i]; 
    console.log(student.name + ' : ' + student.grade); // void
  }
}

function calculateAverageGrade() {
  if (studentGrades.length === 0) {
    return 0;
  }

  let totalGrade = 0;
  for (let i = 0; i < studentGrades.length; i++) {
    const student = studentGrades[i];
    totalGrade += student.grade;
  }

  return totalGrade / studentGrades.length; // number
}

function findHighestGradeStudent() {
  let highestGradeStudent = studentGrades[0];
  for (let i = 1; i < studentGrades.length; i++) {
    if (studentGrades[i].grade > highestGradeStudent.grade) {
      highestGradeStudent = studentGrades[i];
    }
  }
  return highestGradeStudent; // object
}

addStudentGrade('Alice', 92);
addStudentGrade('Bob', 78);
addStudentGrade('Charlie', 86);

console.log('All Student Grades:');
displayStudentGrades();

console.log('---------------------------------');

console.log('Average Grade:', calculateAverageGrade());

console.log('---------------------------------');

const topStudent = findHighestGradeStudent();
console.log(
  'Top Student:',
  topStudent
    ? `${topStudent.name} with a grade of ${topStudent.grade}`
    : 'No top student found.'
);
