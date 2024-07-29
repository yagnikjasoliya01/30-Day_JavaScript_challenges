//Activity - 04  Queue

//Task - 07
// Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode{
    constructor(value , left = null , right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }

    toString(){
        return `TreeNode(value: ${this.value}), left: ${this.left ? this.left.value : null}, , right: ${this.right ? this.right.value : null}`
    
    }
}

const leftchild = new TreeNode(2);
const rightchild = new TreeNode(3);
const root = new TreeNode(7 , leftchild , rightchild);

console.log("Root Node:", root.toString()); 
console.log("Left Child:", leftchild.toString());
console.log("Right Child:", rightchild.toString()); 


//Task - 08
// Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
