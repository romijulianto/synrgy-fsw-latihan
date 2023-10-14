function abc() {}

function def() {}

abc();
def();
ghi();

const fnExp = function () {};
function fnDes() {}
const fnArrow = () => {};

function AuthController() {
  const login = () => {};
  const logout = () => {};
  const register = () => {};
  const resetPassword = () => {};

  return {
    login,
    logout,
    register,
    resetPassword,
  };
}

const authController = AuthController();
authController.resetPassword();

class Student {
  constructor() {}
}

const formStudent = document.getElementById('form-student');
const inputSearch = document.getElementById('search');

// array of object
const studentRecords = [
  {
    name: 'Amir',
    age: 20,
    grade: 'A',
  },
  {
    name: 'Bona',
    age: 22,
    grade: 'B',
  },
  {
    name: 'Ciko',
    age: 21,
    grade: 'C',
  },
];

displayStudents(studentRecords);

inputSearch.addEventListener('change', searchByName);
formStudent.addEventListener('submit', addStudent);

function searchByName(e) {
  const keyword = e.target.value;
  // gunakan fungsi .filter contoh : studentRecords.filter((student) => {student.age === keyword})
  displayStudents(filteredRecords);
}

function addStudent(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value);
  const grade = parseFloat(document.getElementById('grade').value);

  // Validate inputs
  if (!name || isNaN(age) || isNaN(grade)) {
    alert('Please enter valid values for Name, Age, and Grade.');
    return;
  }

  const student = {
    name: name,
    age: age,
    grade: grade,
  };
  studentRecords.push(student);

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('grade').value = '';

  displayStudents(studentRecords);
}

function displayStudents(studentRecords) {
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = '';

  for (let i = 0; i < studentRecords.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div>
        Student Name: ${studentRecords[i].name}, Age: ${studentRecords[i].age}, Grade: ${studentRecords[i].grade}
        <button type="button" onclick="remove(${i})">remove</button>
        <button type="button" onclick="edit(${i})">edit</button>
        </div>
    `;
    studentList.appendChild(listItem);
  }
}

function remove(index) {
  // arr.splice(index, jumlah_data_yang_dihapus)
  // tampilkan kembali data student
}
function edit(index) {
  // arr[index] untuk mengambil 1 data student
  // tampilkan ke dalam form menggunakan document.getElementById('input_name').value = arr[index].input_name
  // ikuti proses seperti pada function addStudent
}
