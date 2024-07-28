// 1. recursive function to calculate the factorial of a number
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test cases
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(7)); // 5040

// 2. recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test cases
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55

// 3. recursive function to find the sum of all elements in an array
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60
console.log(sumArray([])); // 0

// 4. recursive function to find the maximum element in an array
function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        const maxOfRest = maxArray(arr.slice(1));
        return arr[0] > maxOfRest ? arr[0] : maxOfRest;
    }
}

// Test cases
console.log(maxArray([1, 2, 3, 4, 5])); // 5
console.log(maxArray([10, 20, 30])); // 30
console.log(maxArray([-5, -10, -3, -4])); // -3

// 5. a recursive function to reverse a string
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("")); // ""

// 6. a recursive function to check if a string is a palindrome
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.slice(1, -1));
    }
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("")); // true

// 7. recursive function to perform a binary search on a sorted array
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // -1
console.log(binarySearch([5, 10, 15, 20, 25], 20)); // 3

// 8. recursive function to count the occurrences of a target element in an array
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    } else {
        const count = arr[0] === target ? 1 : 0;
        return count + countOccurrences(arr.slice(1), target);
    }
}

// Test cases
console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // 3
console.log(countOccurrences([10, 20, 30, 40, 50], 25)); // 0
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); // 5

// 9. a recursive function to perform an in-order traversal of a binary tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

// Test cases
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); // 4, 2, 5, 1, 3

// 10. a recursive function to calculate the depth of a binary tree
function treeDepth(node) {
    if (node === null) {
        return 0;
    } else {
        const leftDepth = treeDepth(node.left);
        const rightDepth = treeDepth(node.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

// Test cases
const treeRoot = new TreeNode(1);
treeRoot.left = new TreeNode(2);
treeRoot.right = new TreeNode(3);
treeRoot.left.left = new TreeNode(4);
treeRoot.left.right = new TreeNode(5);

console.log(treeDepth(treeRoot)); // 3
