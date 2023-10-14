const name = 'gusti';
let age = 20;

var grade = 'A';

age = 25;

function getStudentGrade() {
  grade = 'B';
  console.log('Grade > ', grade);
}

getStudentGrade();
console.log('current grade > ', grade);
