//Activity - 05  Tree traversal 

//Task - 09
// Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    inOrderTraversal(node.left);

    console.log(node.value);

    inOrderTraversal(node.right);
}

// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("In-Order Traversal:");
inOrderTraversal(root);


//Task - 10
// Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
class TreeNode1 {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function calculateDepth(node) {
    if (node === null) {
        return 0; 
    }

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

const root1 = new TreeNode1(1);
root1.left = new TreeNode1(2);
root1.right = new TreeNode1(3);
root1.left.left = new TreeNode1(4);
root1.left.right = new TreeNode1(5);
root1.right.right = new TreeNode1(7);
root1.left.left.left = new TreeNode1(8);
root1.right.right.right = new TreeNode1(9);

console.log("Depth of the binary tree:", calculateDepth(root1)); 


