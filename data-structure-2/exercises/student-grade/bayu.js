const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  for (let i in studentGrades) {
    console.log(
      `${studentGrades[i]['name']}\t\t: ${studentGrades[i]['grade']}`
    );
  }
}

function calculateAverageGrade() {
  let totalGrades = 0;

  for (let i in studentGrades) {
    totalGrades += studentGrades[i]['grade'];
  }

  return totalGrades / studentGrades.length;
}

function findHighestGradeStudent() {
  let index = 0;
  let highestGrade = 0;

  for (let i in studentGrades) {
    if (highestGrade < studentGrades[i]['grade']) {
      highestGrade = studentGrades[i]['grade'];
      index = i;
    }
  }

  return studentGrades[index]; // object
}

addStudentGrade('Alice', 92);
addStudentGrade('Bob', 78);
addStudentGrade('Charlie', 86);

console.log('All Student Grades:');
displayStudentGrades();

console.log('Average Grade\t:', calculateAverageGrade());

const topStudent = findHighestGradeStudent();
console.log(
  'Top Student:',
  topStudent
    ? `${topStudent.name} with a grade of ${topStudent.grade}`
    : 'No top student found.'
);
