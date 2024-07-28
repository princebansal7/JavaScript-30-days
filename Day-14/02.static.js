class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

    static getGenericGreeting() {
        return "Hello, welcome to our community!";
    }
}

// Call the static method without creating an instance
console.log(Person.getGenericGreeting());

// adding static property
class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
        console.log(`Total number of students: ${Student.studentCount}`);
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

// Create instances and log the total number of students
const student1 = new Student("Bob", 20, "S12345");
const student2 = new Student("Charlie", 22, "S12346");
