const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades(studentGrades_) {
  console.log(studentGrades_); // void
}

function calculateAverageGrade(studentGrades_) {
  let avrg = 0;

  let totalGrades = 0;
  let gradesAmnt = 0;

  const arrOfGrades = studentGrades_.map((students) => students.grade);

  for (let index = 0; index < arrOfGrades.length; index++) {
    totalGrades = totalGrades + arrOfGrades[index];
    gradesAmnt = gradesAmnt + 1;
  }

  avrg = totalGrades / gradesAmnt;

  //   console.log(avrg);

  return avrg; // number
}

function findHighestGradeStudent(studentGrades_) {
  const arrOfGrades = studentGrades_.map((students) => students.grade);
  const maxGrades = Math.max(...arrOfGrades);

  let highestGrade = studentGrades_.filter((student) => {
    return student.grade === maxGrades;
  });

  //   console.log(highestGrade)
  return highestGrade[0]; // object
}

addStudentGrade('Alice', 92);
addStudentGrade('Bob', 78);
addStudentGrade('Charlie', 86);

console.log('All Student Grades:');
displayStudentGrades(studentGrades);

console.log('Average Grade:', calculateAverageGrade(studentGrades));

const topStudent = findHighestGradeStudent(studentGrades);
console.log(
  'Top Student:',
  topStudent
    ? `${topStudent.name} with a grade of ${topStudent.grade}`
    : 'No top student found.'
);
