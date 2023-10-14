const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  for (const student of studentGrades) {
    console.log(`${student.name}: ${student.grade}`);
  }
  // void
}

function calculateAverageGrade() {
  if (studentGrades === 0) {
    return 0;
  } else {
    const totalGrade = studentGrades.reduce(
      (acc, student) => acc + student.grade,
      0
    );
    return totalGrade / studentGrades.length;
  }
  // number
}

function findHighestGradeStudent() {
  if (studentGrades.length === 0) {
    return null; // tidak ada siswa
  }

  let highestGradeStudent = studentGrades[0];
  for (const student of studentGrades) {
    if (student.grade > highestGradeStudent.grade) {
      highestGradeStudent = student;
    }
  }

  return highestGradeStudent;
  // object
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
