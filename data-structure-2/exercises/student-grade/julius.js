const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade }); // void;
}

function displayStudentGrades() {
  console.log('All Student Grades:'); // void
  studentGrades.forEach((student) => {
    console.log('${student.name}: ${student.grade}'); // menampilkan setiap student's name dan grade di dalam 'studentGrades'
  });
}

function calculateAverageGrade() {
  if (studentGrades.length === 0) {
    // cek apakah studentGrades array kosong / tidak
    return 0; // number
  }

  const totalGrade = studentGrades.reduce(
    // membuat variabel untuk menyimpan jumlah dari keseluruhan grade
    (sum, student) => sum + student.grade,
    0
  );

  const averageGrade = totalGrades / studentGrades.length; // mendapatkan rata-rata dengan membagi total grade dengan jumlah student

  return averageGrade;
}

function findHighestGradeStudent() {
  if (studentGrades.length === 0){ // cek apakah studentGrades array kosong / tidak
    return null;
  }
  
    return {}; // object
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
