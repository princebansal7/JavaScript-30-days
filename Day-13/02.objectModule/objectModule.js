const person = {
    name: "Prince Bansal",
    age: 26,
    info() {
        // return `Hello ${this.name}, your age is ${this.age}`;
        //                          or
        return `Hello ${person.name}, your age is ${person.age}`;
    },
};

module.exports = person;
