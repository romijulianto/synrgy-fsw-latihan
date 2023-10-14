const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
}

function displayStudentGrades() {
  let itemGrade = [{}];
  studentGrades.map((item) => itemGrade.push(item?.grade));
  const result = `Grade ${itemGrade}`;
  console.log(result);

  //   yang ini console object satu persatu
  //   studentGrades.map((item) =>
  //     console.log({
  //       Name: item.name,
  //       Grade: item.grade,
  //     })
  //   );
}

function calculateAverageGrade() {
  let gradeTotal = 0;
  studentGrades.map((item) => (gradeTotal += item.grade));
  const result = gradeTotal / studentGrades?.length;

  return result;
}

function findHighestGradeStudent() {
  let gradeWithIndex = [];
  let studentWithHighGrade = {};
  studentGrades?.map((item) => gradeWithIndex.push(item?.grade));
  const maxHighGrade = Math.max(...gradeWithIndex);
  const indexHighGrade = gradeWithIndex.indexOf(maxHighGrade);

  // console.log(indexHighGrade)
  studentGrades.map((item, index) =>
    index === indexHighGrade ? (studentWithHighGrade = item) : {}
  );

  console.log(studentWithHighGrade);
  return studentWithHighGrade;

  //   ini lebih simple aja
  // if (!studentGrades || studentGrades.length === 0) {
  //     return null;
  // }

  // const maxHighGrade = Math.max(...studentGrades.map(item => item.grade));
  // const studentWithHighGrade = studentGrades.find(item => item.grade === maxHighGrade);

  // console.log(studentWithHighGrade);
  // return studentWithHighGrade;
}

addStudentGrade('Alice', 92);
addStudentGrade('David', 78);
addStudentGrade('Jupri', 99);
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

// Alhamdulillah done hehehhee
