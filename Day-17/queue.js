class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove element from the queue
    dequeue() {
        return this.items.shift();
    }

    // View the first element
    front() {
        return this.items[0];
    }
}

function simulatePrinterQueue(printJobs) {
    const queue = new Queue();
    for (let job of printJobs) {
        queue.enqueue(job);
    }

    while (queue.front() !== undefined) {
        console.log(`Processing job: ${queue.dequeue()}`);
    }
}

simulatePrinterQueue(["Job1", "Job2", "Job3"]); // Output: Processing job: Job1, Processing job: Job2, Processing job: Job3
