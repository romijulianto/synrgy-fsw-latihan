const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  console.log(); // void
  for (const student of studentGrades) {
    console.log(`${student.name}: ${student.grade}`);
  }
}

function calculateAverageGrade() {
  if (studentGrades.length === 0) {
    return 0; //number
  }

  const totalGrades = studentGrades.reduce(
    (total, student) => total + student.grade,
    0
  );
  const averageGrade = totalGrades / studentGrades.length;
  return averageGrade;
}

function findHighestGradeStudent() {
  if (studentGrades.length === 0) {
    return null;
  }

  let highestStudent = studentGrades[0];
  for (const student of studentGrades) {
    if (student.grade > highestStudent.grade) {
      highestStudent = student;
    }
  }
  return highestStudent; //object
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
