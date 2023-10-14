addStudentGrade('Ahmad', 92);
addStudentGrade('Christopler', 98);
addStudentGrade('Nasrul', 90);

const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
}

function displayStudentGrades() {
  studentGrades.forEach((student) => {
    console.log(`${student.name}: ${student.grade}`);
  });
}

function calculateAverageGrade() {
  if (studentGrades.length === 0) {
    return 0;
  }

  const totalGrades = studentGrades.reduce(
    (sum, student) => sum + student.grade,
    0
  );
  return totalGrades / studentGrades.length;
}

function findHighestGradeStudent() {
  if (studentGrades.length === 0) {
    return null;
  }

  let topStudent = studentGrades[0];

  for (let i = 1; i < studentGrades.length; i++) {
    if (studentGrades[i].grade > topStudent.grade) {
      topStudent = studentGrades[i];
    }
  }

  return topStudent;
}

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
