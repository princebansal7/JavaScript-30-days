class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the end
    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Remove a node from the end
    removeNode() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // Display all nodes
    display() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}
