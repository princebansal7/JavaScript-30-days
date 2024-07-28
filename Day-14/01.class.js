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
    // static method
    static getGenericGreeting() {
        return "Hello, welcome to our community!";
    }
}

// Create an instance and log the greeting message
const person1 = new Person("Alice", 30);
console.log(person1.getGreeting());
person1.updateAge(31);
// Call the static method without creating an instance
console.log(Person.getGenericGreeting());

// Inheritance
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
    // overriding the greeting method
    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

// Create an instance and log the student ID
const student1 = new Student("Bob", 20, "S12345");
console.log(student1.getStudentId());
console.log(student1.getGreeting());
