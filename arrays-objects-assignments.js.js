// Create students object

const students = [ {id:1, name: "Alice Johnson", age: 20, grades: [85, 92, 78]}, {id:2, name: "Sarah Johnson", age: 18, grades: [70, 70, 65]}, {id:3, name: "John Doe", age: 22, grades: [60, 50, 50]}, {id:4, name: "Jane Smith", age: 25, grades: [90, 95, 93]}, {id:5, name: "James Hans", age: 20, grades: [80, 55, 74]} ];

// Calculate averages of each students
function calculateAverage(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    return Number((total / grades.length).toFixed(2));
}
console.log(calculateAverage(students[0].grades))

const studentsWithAverage = students.map (student => {
    return {
        id: student.id,
        name: student.name,
        age: student.age,
        grades: student.grades,
        average: calculateAverage(student.grades)
    }
})
console.log(studentsWithAverage[1])

// filter passing students
function getPassingStudents (students) {
    return students.filter ( student => {
        return student.average >= 60;
    })
}

const passing = getPassingStudents(studentsWithAverage);
console.log(passing);

// calculate class average
function calculateClassAverage(students) {
  const totalAverage = students.reduce((sum, student) => {
    return sum + student.average;
  }, 0);

  const classAverage = totalAverage / students.length;

  return Number(classAverage.toFixed(2));
}

const classAvg = calculateClassAverage(studentsWithAverage);
console.log(classAvg);

// find student by Id
function findStudentById(students, id) {
  const student = students.find(student => {
    return student.id === id;
  });

  return student || null;
}

const student = findStudentById(students, 5);
console.log(student);
