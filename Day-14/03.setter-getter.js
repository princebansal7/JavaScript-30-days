class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getGreeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
}

// Create an instance, update the name using the setter, and log the updated full name
const person1 = new Person("Alice", "Johnson", 30);
person1.fullName = "Eve Adams";
console.log(person1.fullName);

// with private field
class Account {
    #balance; //private property

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}, New balance: ${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}, New balance: ${this.#balance}`);
        } else {
            console.log("Invalid withdraw amount.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Create an instance and test the deposit and withdraw methods
const account1 = new Account(1000);
account1.deposit(500);
account1.withdraw(200);
console.log(`Final balance: ${account1.getBalance()}`);
