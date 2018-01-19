var Student = /** @class */ (function () {
    function Student(_person, _age) {
        this._person = _person;
        this._age = _age;
        this.person = _person;
        this.age = _age;
    }
    return Student;
}());
// To make sure that the greeting will only be a string, the only type the function can return is a string
// To make sure only strings will be used to fill the greeting, person gets the type string
function generateGreeting(person) {
    return "Hello " + person;
}
function greet() {
    // The same goes for the input field, as it should always be an input element
    var input = document.getElementById('input-username');
    // The following line would not work because the Element is not necessarily casted as a Input Element
    // input = document.getElementById('input-username');
    document.getElementById('greeting').innerHTML = generateGreeting(input.value);
}
function greetWarningWrongType1() {
    // The following line shows a warning, because the value which is assigned to the input variable
    // is not necessarily a HTMLInputElement
    var input = document.getElementById('input-username');
    // This will work anyway, because after compiling to js the types do not matter
    document.getElementById('greeting').innerHTML = generateGreeting(input.value);
}
function greetWarningWrongType2() {
    var stringArray = ["1", "2", "3"];
    // The following line shows a warning, because the function generateGreeting cannot be called with a
    // string-Array because it expects a string
    document.getElementById('greeting').innerHTML = generateGreeting(stringArray);
}
function displayStudent() {
    // Get all the values from the InputElements
    var iFName = document.getElementById('input-student-firstname').value;
    var iLName = document.getElementById('input-student-lastname').value;
    var iAge = document.getElementById('input-student-age').value;
    // Generate a student with the values from the InputElements by using the generateStudent-Method
    var nStudent = generateStudent(iFName, iLName, iAge);
    // Write the student information in the correct field
    document.getElementById('student-info').innerText =
        nStudent.person.firstName + " " + nStudent.person.lastName + ", " + nStudent.age;
}
function generateStudent(fName, lName, sAge) {
    // Use the Person interface to generate a variable in the format for people
    var sPerson = { firstName: fName, lastName: lName };
    // Create a new Student with the constructor of the class Student
    return new Student(sPerson, sAge);
}
