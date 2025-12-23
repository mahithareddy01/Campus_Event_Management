function log(message) {
  alert(message);
}

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  log(this.name + " logged in");
};

function Student(name, email, rollNo) {
  User.call(this, name, email);
  this.rollNo = rollNo;
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.registerEvent = function () {
  log(this.name + " registered for an event 🎉");
};

function Organizer(name, email, department) {
  User.call(this, name, email);
  this.department = department;
}

Organizer.prototype = Object.create(User.prototype);
Organizer.prototype.constructor = Organizer;

Organizer.prototype.createEvent = function () {
  log(this.name + " created a new event 🛠");
};

const student = new Student("Mahi", "mahi@gmail.com", 58);
const organizer = new Organizer("Alex", "alex@gmail.com", "CSE");

function studentLogin() {
  student.login();
}

function registerEvent() {
  student.registerEvent();
}

function organizerLogin() {
  organizer.login();
}

function createEvent() {
  organizer.createEvent();
}
