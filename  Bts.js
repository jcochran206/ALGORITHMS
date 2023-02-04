class  Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    //methods
    add(data){
        const newNode = new Node(data);
        //look if root node
        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(data < currentNode.data){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right 
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    contains(data){

    }
}
const tree = new BinarySearchTree();
tree.add(9);
tree.add(4);
tree.add(20);
tree.add(1);
console.log(JSON.stringify(tree));

