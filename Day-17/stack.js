class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove element from the stack
    pop() {
        return this.items.pop();
    }

    // View the top element
    peek() {
        return this.items[this.items.length - 1];
    }
}

function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = "";
    while (stack.peek() !== undefined) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

console.log(reverseString("hello")); // Output: "olleh"
