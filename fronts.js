class Node {
    constructor(data){
        this.data = data;
        this.next=null; 
    }
}

class SLL {
    constructor() {
        this.head = null
    }

    addFront(value){
        let new_node = new Node(value);
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
    }

    removeFront(){
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }
}

// let SLL1 = new SLL();
// SLL1.addFront(18);
// SLL1.addFront(5);
// SLL1.addFront(30);
// SLL1.removeFront(18);
// console.log(SLL1);




